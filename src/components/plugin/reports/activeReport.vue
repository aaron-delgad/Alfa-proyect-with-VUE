<template>
  <div>
    <div v-for="item in dataPlugin"
          :key="item.id">
    <md-card style="background-color: #f4f5f8; height: 310px;">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title c--secondary-making">{{ item.title }}</div>
          <md-card-content>
            <div>{{ item.detail }}</div>
          </md-card-content>
          <md-card-content>
            <div>
              <span class="fw--700">Costo adicional:</span> S/.{{ item.costo }}
            </div>
            <div>
              <span class="fw--700">Ultima actualización:</span> hace
              {{ item.updateLast }} meses
            </div>
          </md-card-content>
        </md-card-header-text>

        <md-card-media md-big>
          <img :src="require(`@/assets/img/${item.image}`)" :alt="item.image" />
        </md-card-media>
      </md-card-header>

      <md-card-actions>
        <div v-if="spinnerInst">
          <md-progress-spinner
            class="md-accent"
            :md-diameter="30"
            md-mode="indeterminate"
          ></md-progress-spinner>
          <p>Instalando ...</p>
        </div>
        <div v-if="spinnerDes">
          <md-progress-spinner
            class="md-accent"
            :md-diameter="30"
            md-mode="indeterminate"
          ></md-progress-spinner>
          <p>Desinstalando ...</p>
        </div>
        <md-button
          class="md-accent"
          @click="statePlugin(activeButton)"
          v-if="activeButton"
          >Instalar Ahora</md-button
        >
        <md-button
          class="md-accent"
          @click="statePlugin(activeButton)"
          v-if="!activeButton"
          >Desactivar</md-button
        >
      </md-card-actions>
    </md-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "activeReport",
  components: {},

  data: function () {
    return {
      spinnerInst: false,
      spinnerDes: false,
      activeButton: !this.$store.state.permiUserReport,
      dataPlugin: [
        {
          id: "2",
          title: "Reportes",
          detail: "Le permitira Tener Mayor control en sus reportes",
          costo: "25.00",
          updateLast: "1",
          image: "reporte.jpg",
          alt: "logo",
        },
      ],
    };
  },
  methods: {
    statePlugin(state) {
      console.log(state);
      if (state) {
        this.spinnerInst = true;
        this.stockSpinner();
      } else {
        this.spinnerDes = true;
        this.stockSpinner();
      }
    },
    stockSpinner() {
    setTimeout(() => {
        this.spinnerDes = false;
        this.spinnerInst = false;
        this.activeButton = !this.activeButton;
        this.$store.state.permiUserReport = !this.activeButton;
    }, 10000);
  }
  },
};
</script>
