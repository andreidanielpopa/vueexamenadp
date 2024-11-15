<template>
  <div>
    <h1>Mi perfil ({{ usuario.nombre }})</h1>
    <h4>Nombre</h4>
    <p>{{ usuario.nombre }}</p>

    <h4>Email</h4>
    <p>USER {{ usuario.email }}</p>

    <router-link class="btn btn-info" aria-current="page" to="/compras"
      >Mostar compras</router-link
    >
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
      usuario: [],
    };
  },
  mounted() {
    this.token = Global.token;
    if (this.token == "") {
      this.$router.push("/");
    } else {
      service.getPerfilUserToken().then((result) => {
        this.usuario = result;
        console.log(result);
      });
    }
  },
};
</script>

<style>
</style>