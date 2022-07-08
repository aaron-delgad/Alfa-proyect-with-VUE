<template>
  <div>
    <md-dialog :md-active.sync="active" :md-click-outside-to-close="false">
      <md-dialog-title>Crear Meta</md-dialog-title>
      <md-divider></md-divider>
      <md-dialog-content>
        <md-field>
          <md-select
            v-model="cliente"
            name="Cliente"
            id="cliente"
            placeholder="Cliente"
          >
            <md-option value="australia">Australia</md-option>
            <md-option value="brazil">Brazil</md-option>
            <md-option value="japan">Japan</md-option>
            <md-option value="united-states">United States</md-option>
          </md-select>
        </md-field>

        <md-field>
          <label>Meta</label>
          <md-input v-model="number" type="number"></md-input>
        </md-field>

        <md-datepicker v-model="selectedDate" />
      </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click="active = false"
          >Cancelar</md-button
        >
        <md-button class="md-primary" @click="active = false"
          >Guardar</md-button
        >
      </md-dialog-actions>
    </md-dialog>
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
export default {
  name: "metasIndex",
  components: { metasList },

  data: () => ({
    active: false,
    value: null,
  }),

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
