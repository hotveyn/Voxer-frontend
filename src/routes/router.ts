import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import RegPage from "@/pages/RegPage.vue";
import ProfilePage from "@/pages/ProfilePage.vue";
import ConsultationsPage from "@/pages/ConsultationsPage.vue"
import RegionsPage from "@/pages/RegionsPage.vue"
import UsersPage from "@/pages/UsersPage.vue"
import OrganizationPage from "@/pages/OrganizationsPage.vue"

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "home",
        component: HomePage,
    },
    {
        path: "/profile",
        name: "profile",
        component: ProfilePage,
        beforeEnter: (to, from, next) => {
            if (localStorage.getItem("token")) next();
            else next("/login");
        },
    },
    {
        path: "/login",
        name: "login",
        component: LoginPage,
    },
    {
        path: "/registration",
        name: "reg",
        component: RegPage,
    },
    {
        path:"/consultations",
        name:"consultations",
        component:ConsultationsPage
    },
    {
        path:"/regions",
        name:"regions",
        component: RegionsPage
    },
    {
        path:"/users",
        name:"users",
        component:UsersPage
    },
    {
        path:"/regions/:id/organizations",
        name:"organizations",
        component:OrganizationPage
    }
];

export default createRouter({
    history: createWebHistory(),
    routes,
});