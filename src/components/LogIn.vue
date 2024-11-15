<template>
  <div>
    <h1>LogIn</h1>

    <form v-on:submit.prevent="logIn()" style="width: 500px; margin: 0 auto">
      <label>User</label>
      <input type="text" v-model="login.email" class="form-control" />

      <label>Password</label>
      <input type="text" v-model="login.password" class="form-control" />

      <br />
      <button class="btn btn-info">LogIn</button>
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
      login: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    logIn() {
      service.getToken(this.login).then((result) => {
        Global.token = result;
        this.$router.push("/perfil");
      });
    },
  },
};
</script>
  
  <style>
</style>
  