<template>
  <nav
    class="navbar navbar-expand-sm navbar-dark bg-dark"
    aria-label="Third navbar example"
  >
    <div class="container-fluid">
      <img
        src="https://appcubos2024-ayg5bkctbraeazac.francecentral-01.azurewebsites.net/assets/images/spiderman.png"
        alt=""
        style="width: 50px; height: 70px"
      />

      <div class="collapse navbar-collapse" id="navbarsExample03">
        <ul class="navbar-nav me-auto mb-2 mb-sm-0">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/"
              >Cubos</router-link
            >
          </li>

          <li class="nav-item dropdown">
            <span
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              >Marcas</span
            >
            <ul class="dropdown-menu">
              <li v-for="marca of marcas" :key="marca">
                <router-link class="dropdown-item" :to="'/cubos/' + marca"
                  >{{ marca }}
                </router-link>
              </li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <span
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              >Seguridad</span
            >
            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" :to="'/login'"
                  >Inicar Sesion
                </router-link>
              </li>
              <li>
                <router-link class="dropdown-item" :to="'/register'"
                  >Regitrarse
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import ServiceCubos from "./../services/ServiceCubos";
const service = new ServiceCubos();
export default {
  data() {
    return {
      marcas: [],
    };
  },
  mounted() {
    service.getMarcasCubos().then((result) => {
      this.marcas = result;
    });
  },
};
</script>

<style>
</style>