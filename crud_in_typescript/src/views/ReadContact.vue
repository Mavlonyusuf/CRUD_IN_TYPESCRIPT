<template>
  <div>
    <main class="p-5">
      <div>
        <p class="self-center text-xl font-medium italic text-slate-50">
          View Contacts
        </p>
        <p class="text-left text-gray-500 dark:text-gray-400 italic">
          Contact management tools let you store the contact information of your
          friends, colleagues, vendors, and acquaintances in an organized
          manner. Using these apps, you can filter and categorize contacts and
          manage communications.Are you looking for a free contact management
          tool that’ll help you become more productive and speed up the
          communication process? If yes, then Pobuca Connect is the app for you.
          It lets you store all your contacts under a single umbrella.
        </p>
      </div>

      <!-- Spinner -->
      <div v-if="loading">
        <Spinner />
      </div>

      <!-- ErrorMessage -->
      <div
        class="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        v-if="!loading && errorMessage"
      >
        <p class="self-center text-3xl font-semibold italic text-red-600">
          {{ errorMessage }}
        </p>
      </div>

      <div class="flex items-center py-10" v-if="!loading && isDone()">
        <div class="w-1/2">
          <img :src="contact['photo']" alt="User" class="w-1/2 rounded-full" />
        </div>
        <div class="w-1/2">
          <ul
            class="my-2 ml-10 bg-darkContents border border-transparent w-96 rounded-lg"
          >
            <li class="flex border-b border-fuchsia-600 py-2 px-10">
              <span class="tracking-normal text-slate-400 font-normal">
                Name :
              </span>
              <span class="pl-3 tracking-normal text-slate-200 font-medium">{{
                contact["name"]
              }}</span>
            </li>
            <li class="flex border-b border-fuchsia-600 py-2 px-10">
              <span class="tracking-normal text-slate-400 font-normal">
                Email :
              </span>
              <span class="pl-3 tracking-normal text-slate-200 font-medium">{{
                contact["email"]
              }}</span>
            </li>
            <li class="flex py-2 px-10 border-b border-fuchsia-600">
              <span class="tracking-normal text-slate-400 font-normal">
                Mobile :
              </span>
              <span class="pl-3 tracking-normal text-slate-200 font-medium">{{
                contact["mobile"]
              }}</span>
            </li>
            <li class="flex border-b border-fuchsia-600 py-2 px-10">
              <span class="tracking-normal text-slate-400 font-normal">
                Company :
              </span>
              <span class="pl-3 tracking-normal text-slate-200 font-medium">{{
                contact["company"]
              }}</span>
            </li>
            <li class="flex border-b border-fuchsia-600 py-2 px-10">
              <span class="tracking-normal text-slate-400 font-normal">
                Title :
              </span>
              <span class="pl-3 tracking-normal text-slate-200 font-medium">{{
                contact["title"]
              }}</span>
            </li>
            <li class="flex border-b border-fuchsia-600 py-2 px-10">
              <span class="tracking-normal text-slate-400 font-normal">
                Group :
              </span>
              <span class="pl-3 tracking-normal text-slate-200 font-medium">{{
                group["name"]
              }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <RouterLink
          to="/contacts"
          class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
        >
          <span
            class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
          >
            <i class="fa-solid fa-arrow-left fa-beat-fade pr-2"></i> Back
          </span>
        </RouterLink>
      </div>
    </main>
  </div>
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

    let id = ref(route.params.id);
    let loading = ref(false);
    let contact = ref({});
    let errorMessage = ref();
    let group = ref({});
    async function readContact() {
      try {
        loading.value = true;
        let response = await ContactService.getContact(id.value);
        let groupRes = await ContactService.getGroup(response.data);
        group.value = groupRes.data;
        contact.value = response.data;
        loading.value = false;
      } catch (error) {
        errorMessage.value = error;
        loading.value = false;
      }
    }
    readContact();

    const isDone = () => {
      return (
        Object.keys(contact.value).length > 0 &&
        Object.keys(group.value).length > 0
      );
    };
    return {
      id,
      loading,
      contact,
      errorMessage,
      group,
      readContact,
      isDone,
    };
  },
};
</script>
<style></style>
