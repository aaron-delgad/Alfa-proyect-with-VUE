<template>
  <div>
    <h4 class="c--primary">
      Puedes activar las funcionalidades que deses, solo debes dar clic en el
      botón <span class="fw--700 fz--xxl">Instalar ahora</span>.
    </h4>
    <h4>{{isWide}}</h4>
    <md-divider></md-divider>
    <div class="mt-5">
      <div class="row">
        <div
          class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 px-4"
        >
          <activeMetas />
        </div>
         <div
          class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 px-4"
        >
           <activeReport />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import activeMetas from "./../components/plugin/Metas/activeMetas.vue";
import activeReport from "./../components/plugin/reports/activeReport.vue";
export default {
  name: "PluginView",
  components: { activeMetas, activeReport },
  computed: {
    isWide () {
      return this.$store.state.msg;
    }
  },
  data: function () {
    return {
      
    };
  },
};
</script>
