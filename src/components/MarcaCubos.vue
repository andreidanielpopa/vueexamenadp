<template>
  <div>
    <h1>Cubos de la marca: {{ marca }}</h1>
    <div class="row">
      <div class="col-3 mb-3" v-for="cubo of cubos" :key="cubo">
        <div class="card" style="width: 18rem">
          <img :src="cubo.imagen" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ cubo.nombre }}</h5>
            <p class="card-text">{{ cubo.precio }} €</p>
            <router-link
              class="btn btn-info"
              aria-current="page"
              :to="'/detalles/' + cubo.idCubo"
              >Ver detalles</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceCubos from "./../services/ServiceCubos";
const service = new ServiceCubos();
export default {
  data() {
    return {
      marca: "",
      cubos: [],
    };
  },
  mounted() {
    let marca = this.$route.params.marca;
    this.marca = marca;

    service.findCubosByMarca(marca).then((result) => {
      this.cubos = result;
    });
  },
  watch: {
    "$route.params.marca"(nextVal, oldVal) {
      if (nextVal != oldVal) {
        let marca = this.$route.params.marca;
        this.marca = marca;
        service.findCubosByMarca(marca).then((result) => {
          this.cubos = result;
        });
      }
    },
  },
};
</script>

<style>
</style>