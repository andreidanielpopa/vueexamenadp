<template>
  <div>
    <h1>Tus Compras</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Num Pedido</th>
          <th>ID Cubo</th>
          <th>Fecha</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="compra of compras" :key="compra">
          <td>{{ compra.idPedido }}</td>
          <td>{{ compra.idCubo }}</td>
          <td>{{ compra.fechaPedido }}</td>
        </tr>
      </tbody>
    </table>
    <div class="w-25 mx-auto d-flex justify-content-between">
      <router-link class="btn btn-info" aria-current="page" to="/perfil"
        >Volver al perfil</router-link
      >

      <router-link class="btn btn-info" aria-current="page" to="/pedido"
        >Realizar Pedido</router-link
      >
    </div>
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
      compras: [],
    };
  },
  mounted() {
    this.token = Global.token;
    if (this.token == "") {
      this.$router.push("/");
    } else {
      service.findComprasUser().then((result) => {
        this.compras = result;
        console.log(result);
      });
    }
  },
};
</script>
  
  <style>
</style>