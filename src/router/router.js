import { createRouter, createWebHashHistory } from "vue-router";

/* const routes = [
    {
        name: "Home",
        path: "/",
        component: () => import('../view/home.vue')
    },
    {
        name: "newItem",
        path: "/newItem",
        component: () => import('../view/newItem.vue')
    },
    {
        name: "watchFrom",
        path: "/watchFrom",
        component: () => import('../view/watchFrom.vue')
    },
]; */

const routes = [
    {
        name: "newHome",
        path: "/",
        component: () => import('../layouts/defaultLayout.vue'),
    },
    {
        name: "listAdd",
        path: "/listAdd",
        component: () => import("../layouts/listAdd.vue"),
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router