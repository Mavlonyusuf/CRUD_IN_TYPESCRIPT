<template>
  <main class="p-5">
    <div>
      <p class="self-center text-xl font-medium italic text-slate-50">
        Edit Contacts
      </p>
      <p class="text-left text-gray-500 dark:text-gray-400 italic">
        Contact management tools let you store the contact information of your
        friends, colleagues, vendors, and acquaintances in an organized manner.
        Using these apps, you can filter and categorize contacts and manage
        communications.Are you looking for a free contact management tool
        that’ll help you become more productive and speed up the communication
        process? If yes, then Pobuca Connect is the app for you. It lets you
        store all your contacts under a single umbrella.
      </p>
    </div>
    <div class="flex justify-between mx-20 my-5 items-center">
      <form class="w-1/3 p-5" @submit.prevent="submitUpdate()">
        <div class="relative">
          <input
            v-model="contact.name"
            type="text"
            id="name"
            class="block mb-3 px-2.5 pb-1.5 pt-3 w-full text-sm bg-transparent text-slate-300 rounded-lg border-2 italic border-fuchsia-600 appearance-none focus:outline-none focus:ring-0 focus:border-fuchsia-800 peer"
            placeholder=" "
          />
          <label
            for="name"
            class="absolute italic text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-darkContents px-2 peer-focus:px-2 peer-focus:text-fuchsia-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1"
            >Name</label
          >
        </div>
        <div class="relative">
          <input
            v-model="contact.photo"
            type="text"
            id="photo"
            class="block mb-3 px-2.5 pb-1.5 pt-3 w-full text-sm bg-transparent text-slate-300 rounded-lg border-2 italic border-fuchsia-600 appearance-none focus:outline-none focus:ring-0 focus:border-fuchsia-800 peer"
            placeholder=" "
          />
          <label
            for="photo"
            class="absolute italic text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-darkContents px-2 peer-focus:px-2 peer-focus:text-fuchsia-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1"
            >Photo URL</label
          >
        </div>
        <div class="relative">
          <input
            v-model="contact.email"
            type="email"
            id="email"
            class="block mb-3 px-2.5 pb-1.5 pt-3 w-full text-sm bg-transparent text-slate-300 rounded-lg border-2 italic border-fuchsia-600 appearance-none focus:outline-none focus:ring-0 focus:border-fuchsia-800 peer"
            placeholder=" "
          />
          <label
            for="email"
            class="absolute italic text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-darkContents px-2 peer-focus:px-2 peer-focus:text-fuchsia-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1"
            >Email</label
          >
        </div>
        <div class="relative">
          <input
            v-model="contact.mobile"
            type="text"
            id="mobile"
            class="block mb-3 px-2.5 pb-1.5 pt-3 w-full text-sm bg-transparent text-slate-300 rounded-lg border-2 italic border-fuchsia-600 appearance-none focus:outline-none focus:ring-0 focus:border-fuchsia-800 peer"
            placeholder=" "
          />
          <label
            for="mobile"
            class="absolute italic text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-darkContents px-2 peer-focus:px-2 peer-focus:text-fuchsia-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1"
            >Mobile</label
          >
        </div>
        <div class="relative">
          <input
            v-model="contact.company"
            type="text"
            id="company"
            class="block mb-3 px-2.5 pb-1.5 pt-3 w-full text-sm bg-transparent text-slate-300 rounded-lg border-2 italic border-fuchsia-600 appearance-none focus:outline-none focus:ring-0 focus:border-fuchsia-800 peer"
            placeholder=" "
          />
          <label
            for="company"
            class="absolute italic text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-darkContents px-2 peer-focus:px-2 peer-focus:text-fuchsia-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1"
            >Company</label
          >
        </div>
        <div class="relative">
          <input
            v-model="contact.title"
            type="text"
            id="title"
            class="block mb-3 px-2.5 pb-1.5 pt-3 w-full text-sm bg-transparent text-slate-300 rounded-lg border-2 italic border-fuchsia-600 appearance-none focus:outline-none focus:ring-0 focus:border-fuchsia-800 peer"
            placeholder=" "
          />
          <label
            for="title"
            class="absolute italic text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-darkContents px-2 peer-focus:px-2 peer-focus:text-fuchsia-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1"
            >Title</label
          >
        </div>
        <div class="relative">
          <select
            v-model="contact.groupId"
            v-if="groups.length > 0"
            id="group"
            class="block w-full p-2.5 mb-6 text-sm border border-fuchsia-600 rounded-lg bg-darkContents focus:ring-fuchsia-600 focus:border-furing-fuchsia-600 placeholder-transparent text-slate-300 dark:focus:ring-fuborder-fuchsia-600 dark:focus:border-fuchsia-600"
          >
            <option selected>Select Group</option>
            <option :value="group.id" v-for="group in groups" :key="group.id">
              {{ group.name }}
            </option>
          </select>
        </div>
        <button
          type="submit"
          class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
        >
          <span
            class="relative italic px-5 py-2.5 transition-all font-medium ease-in duration-75 bg-darkContents rounded-md group-hover:bg-opacity-0"
          >
            Update
          </span>
        </button>
      </form>
      <div class="w-1/3">
        <img
          :src="contact.photo"
          alt="user"
          class="border border-transparent rounded-full"
        />
      </div>
    </div>
  </main>
</template>
<script lang="ts">
import { ref, onMounted } from "vue";
import { ContactService } from "../services/contactService";
import { useRouter, useRoute } from "vue-router";
import Spinner from "../components/Spinner.vue";
export default {
  components: {
    Spinner,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();

    let groupId = ref(route.params.id);
    let loading = ref(false);
    let contact = ref({});
    let errorMessage = ref();
    let groups = ref([]);
    async function editContact() {
      try {
        loading.value = true;
        let response = await ContactService.getContact(groupId.value);
        let groupsRes = await ContactService.getAllGroups();
        groups.value = groupsRes.data;
        contact.value = response.data;
        loading.value = false;
      } catch (error) {
        errorMessage.value = error;
        loading.value = false;
      }
    }
    editContact();

    async function submitUpdate() {
      try {
        let response = await ContactService.updateContact(
          contact.value,
          groupId.value
        );
        if (response) {
          return router.push("/");
        } else {
          return router.push(`/contact/edit/${groupId}`);
        }
      } catch (error) {
        console.log(error);
      }
    }
    return {
      groupId,
      loading,
      contact,
      errorMessage,
      editContact,
      groups,
      submitUpdate,
    };
  },
};
</script>
<style></style>
