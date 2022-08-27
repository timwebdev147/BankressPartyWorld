import {createWebHistory, createRouter  } from "vue-router";
// import App from '../App.vue' ;
import AboutPage from '@/views/AboutPage.vue';
import bankress from '@/views/bankressPartyWorld.vue'
import menu from '@/views/bankressMenu.vue'
import catering from '@/views/bankressCatering.vue'
import contact from '@/views/contactUs.vue'

const routes = [
    {
        path: "/about",
        name: "aboutPage",
        component: AboutPage,
    },
    {
        path: "/menu",
        name: "menu",
        component: menu,
    },
    {
        path: "/",
        name: "home",
        component: bankress,
    },
    {
        path: "/catering",
        name: "catering",
        component: catering,
    },
    {
        path: "/contact",
        name: "contact",
        component: contact,
    }
];

const router = createRouter({
    history: createWebHistory(), routes,
});

export default router;
