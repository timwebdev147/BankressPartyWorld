import {createWebHistory, createRouter  } from "vue-router";
import AboutPage from '@/views/AboutPage.vue';
import bankress from '@/views/bankressPartyWorld.vue';

const routes = [
    {
        path: "/about",
        name: "aboutPage",
        component: AboutPage,
    },
    {
        path: "/",
        name: "bankress",
        component: bankress,
    }
];

const router = createRouter({
    history: createWebHistory(), routes,
});

export default router;
