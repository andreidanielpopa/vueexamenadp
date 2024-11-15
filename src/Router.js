import { createWebHistory, createRouter } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";


const myRoutes = [
    {
        path: '/', component: HomeComponent
    },
    // {
    //     path: '/login', component: LogIn
    // },
    // {
    //     path: '/perfilempleados/:id', component: PerfilEmpleados
    // },

]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;
