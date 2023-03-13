import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
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
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router