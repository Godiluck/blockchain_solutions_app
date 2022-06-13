import {createRouter, createWebHistory} from "vue-router";
import HomePage from "@/components/HomePage";
import ProfilePage from "@/components/ProfilePage";
import ConverterPage from "@/components/ConverterPage";

export const routes = [
    {
        path: '/home',
        component: HomePage,
    },
    {
        path: '/converter',
        component: ConverterPage,
        props: true,
    },
    {
        path: '/profile',
        component: ProfilePage
    },
    {
        path: '/',
        redirect: '/home',
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;