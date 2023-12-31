import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("@views/index.vue")
        },
        {
            path: "/contact",
            name: "contact",
            component: () => import("@views/contact.vue")
        },
        {
            path: "/register",
            name: "register",
            component: () => import("@views/register.vue")
        },
    ]
})

export default router