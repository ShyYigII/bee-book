import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import Test from "@/views/TestMad.vue";
import Footer from "@/components/Footer.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: HomeView
//     },
//     {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (About.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import('../views/AboutView.vue')
//     }
//   ]
// })

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "/",
      component: HeaderComponent,
    },
  ],
});

export default router;
