<template>
  <div style="width: 80%">
    <h1>{{ cubo.nombre }}</h1>
    <div class="card">
      <img :src="cubo.imagen" class="card-img-top" alt="..." />
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          Marca y modelo: {{ cubo.marca }} {{ cubo.modelo }}
        </li>
        <li class="list-group-item">Valoracion: {{ cubo.valoracion }}</li>
        <li class="list-group-item">Precio: {{ cubo.precio }}€</li>
      </ul>
      <div>
        <router-link class="btn btn-info" aria-current="page" :to="'/'"
          >Volver</router-link
        >
      </div>
    </div>
    <h3>Comentarios</h3>
    <ul id="lista" class="list-group">
      <li
        v-for="comentario of comentarios"
        :key="comentario"
        class="list-group-item"
      >
        ({{ comentario.fechaComentario }}) Usuario {{ comentario.idUsuario }}:
        {{ comentario.comentario }}
      </li>
    </ul>
  </div>
</template>

<script>
import ServiceCubos from "./../services/ServiceCubos";
const service = new ServiceCubos();
export default {
  data() {
    return {
      cubo: [],
      comentarios: [],
    };
  },
  mounted() {
    let id = this.$route.params.id;
    service.findCubo(id).then((result) => {
      this.cubo = result;
    });

    service.findCuboComentarios(id).then((result) => {
      this.comentarios = result;
    });
  },
};
</script>

<style>
</style>