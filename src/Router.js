import { createWebHistory, createRouter } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import DetallesCubo from "./components/DetallesCubo.vue";
import MarcaCubos from "./components/MarcaCubos.vue";
import LogIn from "./components/LogIn.vue";
import PerfilUsuario from "./components/PerfilUsuario.vue";
import ComprasComponent from "./components/ComprasComponent.vue";
import PedidoComponent from "./components/PedidoComponent.vue";


const myRoutes = [
    {
        path: '/', component: HomeComponent
    },
    {
        path: '/detalles/:id', component: DetallesCubo
    },
    {
        path: '/cubos/:marca', component: MarcaCubos
    },
    {
        path: '/login', component: LogIn
    },
    {
        path: '/perfil', component: PerfilUsuario
    },
    {
        path: '/compras', component: ComprasComponent
    },
    {
        path: '/pedido', component: PedidoComponent
    },
    // {
    //     path: '/perfilempleados/:id', component: PerfilEmpleados
    // },

]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;
