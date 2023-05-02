import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Sign from "../views/Sign.vue";
import Login from "../views/Login.vue";
import Returns_Orders from "../views/Returns_Orders.vue";
import Cart from '../views/Cart.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/sign",
            name: "sign",
            component: Sign,
        },
        {
            path: "/login",
            name: "login",
            component: Login,
        },
        {
            path: "/returns",
            name: "Returns_Orders",
            component: Returns_Orders,
        },
        {
            path: "/cart",
            name: "cart",
            component: Cart,
        }
 

    ],
});

export default router