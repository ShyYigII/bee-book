import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView/LoginView.vue";
import HomeView from "@/views/HomeView/HomeView.vue";
import AuthorProfileView from "@/views/AuthorView/AuthorProfileView.vue";
import RegisterView from "@/views/LoginView/RegisterView.vue";
import EBookView from "@/views/EBookView/EBookView.vue";
import AuthorBookView from "@/views/AuthorView/AuthorBookView.vue";
import AuthorNewBook from "@/views/AuthorView/AuthorNewBook.vue";
import BookInfoView from "@/views/BookView/BookInfoView/BookInfoView.vue";
import BookReadView from "@/views/BookView/BookReadView/BookReadView.vue";
import MyLibraryView from "@/views/MyLibraryView/MyLibraryView.vue";
import ViewerLayout from "@/layouts/ViewerLayout.vue";
import AuthorLayout from "@/layouts/AuthorLayout.vue";

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
      component: ViewerLayout,
      children: [
        {
          component: HomeView,
          path: "",
        },
        {
          component: BookInfoView,
          path: "book/:bookId",
        },
      ],
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
      path: "/author",
      name: "author",
      component: AuthorLayout,
      children: [
        {
          path: "profile",
          name: "authorProfile",
          component: AuthorProfileView,
        },
        {
          path: "myBook",
          name: "authorBook",
          component: AuthorBookView,
        },
        {
          path: "newbook",
          component: AuthorNewBook,
        },
      ],
    },

    {
      path: "/ebook",
      name: "ebook",
      component: EBookView,
    },

    {
      path: "/read/:bookId",
      component: BookReadView,
    },
    {
      path: "/myLibrary",
      component: MyLibraryView,
    },
  ],
});

export default router;
