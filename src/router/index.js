import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import Test from "@/views/TestMad.vue";
import Footer from "@/components/Footer.vue";
import HomeView from "@/views/HomeView.vue";
import HeaderAuthor from "@/components/HeaderAuthor.vue";
import AuthorHomeView from "@/views/AuthorHomeView.vue";
import RegisterView from "@/views/RegisterView.vue";

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
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/author/profile",
      name: "authorProfile",
      component: AuthorHomeView,
    },
  ],
});

export default router;
