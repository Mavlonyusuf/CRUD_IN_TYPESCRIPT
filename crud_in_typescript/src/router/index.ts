import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Contacts.vue"),
    },
    {
      path: "/contacts",
      name: "contacts",
      component: () => import("../views/AllContacts.vue"),
    },
    {
      path: "/contact/add",
      name: "AddContacts",
      component: () => import("../views/CreateContact.vue"),
    },
    {
      path: "/contact/edit/:id",
      name: "EditContacts",
      component: () => import("../views/EditContact.vue"),
    },
    {
      path: "/contact/read/:id",
      name: "ReadContacts",
      component: () => import("../views/ReadContact.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      component: () => import("../views/NotFound404.vue"),
    },
  ],
});

export default router;
