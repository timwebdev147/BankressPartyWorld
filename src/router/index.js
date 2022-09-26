import {createWebHistory, createRouter  } from "vue-router";
// import App from '../App.vue' ;
import AboutPage from '@/views/AboutPage.vue';
import bankress from '@/views/bankressPartyWorld.vue'
import menu from '@/views/bankressMenu.vue'
import services from '@/views/bankressServices.vue'
import contact from '@/views/contactUs.vue'
import allProjects from '@/views/bankressProjects.vue'

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
        path: "/services",
        name: "services",
        component: services,
    },
    {
        path: "/contact",
        name: "contact",
        component: contact,
    },
    {
        path: "/projects",
        name: "projects",
        component: allProjects,
    }
];


const router = createRouter({
    history: createWebHistory(), routes,
});
router.afterEach(() => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    console.log('afterEach')
})

export default router;
