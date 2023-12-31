import { createRouter, createWebHistory } from 'vue-router'


const home = () => import("@/views/home.vue");
const register = () => import("@/views/register.vue");
const login = () => import("@/views/login.vue");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: "/register"
    },
    {
      path: '/home',
      name: 'home',
      component: home,
    },
    {
      path: '/register',
      name: 'register',
      component: register,
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    }
  ]
});

export default router
