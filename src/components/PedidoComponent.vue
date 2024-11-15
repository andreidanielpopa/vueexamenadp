<template>
  <div>
    <h1>Realizar Pedido</h1>
    <form
      v-on:submit.prevent="realizarPedido()"
      style="width: 500px; margin: 0 auto"
    >
      <select name="" id="" class="form-control" v-model="cubosCompra.idCubo">
        <option v-for="cubo of cubos" :key="cubo" :value="cubo.idCubo">
          {{ cubo.nombre }}
        </option>
      </select>

      <br />
      <button class="btn btn-info">Comprar</button>
    </form>
  </div>
</template>
  
  <script>
import Global from "@/Global";
import ServiceCubos from "./../services/ServiceCubos";
const service = new ServiceCubos();
export default {
  data() {
    return {
      token: "",
      cubos: [],
      cubosCompra: {
        idCubo: 0,
      },
    };
  },
  mounted() {
    this.token = Global.token;
    if (this.token == "") {
      this.$router.push("/");
    } else {
      service.getCubos().then((result) => {
        this.cubos = result;
      });
    }
  },
  methods: {
    realizarPedido() {
      service.comprarCubo(this.cubosCompra.idCubo).then((result) => {
        console.log(result);
        this.$router.push("/compras");
      });
    },
  },
};
</script>
  
  <style>
</style>