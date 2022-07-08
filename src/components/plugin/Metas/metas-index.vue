<template>
  <div>
    <!-- Dialog form -->
    <md-dialog :md-active.sync="active" :md-click-outside-to-close="false">
      <md-dialog-title>Crear Meta</md-dialog-title>
      <md-divider></md-divider>
      <md-dialog-content>
        <form novalidate class="md-layout" @submit.prevent="validateUser">

            <md-field :class="getValidationClass('cliente_id')">
                <label for="cliente">Cliente</label>
                <md-select name="cliente" id="cliente" v-model="form.cliente_id" md-dense :disabled="sending">
                  <md-option></md-option>
                  <md-option value="M">M</md-option>
                  <md-option value="F">F</md-option>
                </md-select>
                <span class="md-error">El campo es requerido</span>
              </md-field>

          <md-field :class="getValidationClass('cantidad_metas')">
            <label for="meta">Meta</label>
            <md-input
              type="number"
              v-model="form.cantidad_metas"
              id="meta"
              name="meta"
              :disabled="sending"
              autocomplete="meta"
            />
            <span class="md-error" v-if="!$v.form.cantidad_metas.required"
              >El campo es requerido</span>
          </md-field>

          <md-datepicker v-model="selectedDate" />

          <md-button type="submit" class="md-primary" :disabled="sending" @click="active = false"
            >Cancelar</md-button>
          <md-button type="submit" class="md-primary" :disabled="sending" @click="active = false"
            >Guardar</md-button>
        </form>
      </md-dialog-content>
    </md-dialog>

    <!-- tabs in index -->
    <md-card>
      <md-toolbar md-elevation="0">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <h3 class="md-title">Metas</h3>
          </div>

          <div class="md-toolbar-section-end">
            <md-menu md-size="medium">
              <md-button md-menu-trigger class="md-icon-button">
                <md-icon>more_vert</md-icon>
              </md-button>
              <md-menu-content>
                <md-menu-item class="menuItem" @click="openMetasFormModal()"
                  ><md-icon>add</md-icon>
                  <span class="md-list-item-text">Nuevo</span></md-menu-item
                >
                <md-menu-item class="menuItem" @click="download()"
                  ><md-icon>cloud_download</md-icon>
                  <span class="md-list-item-text">Descargar</span></md-menu-item
                >
              </md-menu-content>
            </md-menu>
          </div>
        </div>
      </md-toolbar>

      <md-divider></md-divider>

      <md-tabs class="md-transparent">
        <md-tab md-label="Clientes">
          <md-card-content>
            <metasList />
          </md-card-content>
        </md-tab>
        <md-tab md-label="Campañas">
          <md-card-content>
            <metasList />
          </md-card-content>
        </md-tab>
        <md-tab md-label="Plan de medios">
          <md-card-content>
            <metasList />
          </md-card-content>
        </md-tab>
      </md-tabs>
    </md-card>
  </div>
</template>

<script>
import metasList from "./metas-list.vue";

// import { validationMixin } from 'vuelidate'
  import {required } from 'vuelidate/lib/validators'

export default {
  name: "metasIndex",
//   mixins: [validationMixin],
  components: { metasList },

  data: () => ({
    active: false,
    form: {
        meta_nivel_id: null,
        cantidad_metas: null,
        fecha_inicio: null,
        fecha_fin: null,
        cliente_id: null,
      },
      userSaved: false,
      sending: false,
      lastUser: null
  }),
  validations: {
      form: {
        meta_nivel_id: {
          required,
        },
        cantidad_metas: {
          required,
        },
        fecha_inicio: {
          required,
        },
        fecha_fin: {
          required,
        },
        cliente_id: {
          required
        },
      }
    },

  methods: {
    openMetasFormModal() {
      this.active = true;
    },
    download() {},
  },
};
</script>

<style lang="scss" scoped>
.menuItem {
  cursor: pointer;
  :hover {
    background-color: #f4f5f8;
  }
}
</style>
