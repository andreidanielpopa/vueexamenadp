<template>
  <nav
    class="navbar navbar-expand-sm navbar-dark bg-dark"
    aria-label="Third navbar example"
  >
    <div class="container-fluid">
      <img
        src="https://appcubos2024-ayg5bkctbraeazac.francecentral-01.azurewebsites.net/img/peterporker.8f99499b.png"
        alt=""
        style="width: 50px; height: 50px"
      />

      <div class="collapse navbar-collapse" id="navbarsExample03">
        <ul class="navbar-nav me-auto mb-2 mb-sm-0">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/"
              >Home</router-link
            >
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/perfilempleados"
              >Iniciar Sesion</router-link
            >
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/login">Registrarse</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/login">Cerrar Sesion</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>