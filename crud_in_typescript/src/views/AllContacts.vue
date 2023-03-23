<template>
  <div class="h-full">
    <main class="p-5">
      <div class="flex">
        <p class="self-center text-xl font-medium italic text-slate-50">
          All Contacts
        </p>
        <RouterLink
          to="/contact/add"
          class="self-center relative mx-5 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-purple-800"
        >
          <span
            class="relative italic pr-5 pl-2 py-2 transition-all ease-in duration-75 bg-darkContents rounded-md group-hover:bg-opacity-0"
          >
            <i class="fa-solid fa-circle-plus fa-beat-fade px-3"></i>Add
          </span>
        </RouterLink>
      </div>
      <div>
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
      <div class="flex my-5">
        <div class="relative">
          <input
            type="text"
            id="small_outlined"
            class="block px-2.5 pb-1.5 pt-3 w-full text-sm bg-transparent text-slate-300 rounded-lg border-2 italic border-fuchsia-600 appearance-none focus:outline-none focus:ring-0 focus:border-fuchsia-800 peer"
            placeholder=" "
          />
          <label
            for="small_outlined"
            class="absolute italic text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-darkContents px-2 peer-focus:px-2 peer-focus:text-fuchsia-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1"
            >Search...</label
          >
        </div>
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

      <!-- Contacts available -->
      <div
        class="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        v-if="contacts.length === 0"
      >
        <p class="self-center text-3xl font-semibold italic text-red-600">
          Contacts are not available yet...
        </p>
      </div>

      <div class="grid gap-4 grid-cols-2" v-if="contacts.length > 0">
        <div
          v-for="contact in contacts"
          :key="contact"
          class="flex bg-darkBars p-5 border-2 border-transparent rounded-lg items-center shadow-md shadow-fuchsia-900"
        >
          <div class="">
            <img
              :src="contact.photo"
              class="max-h-24 border-1 border-transparent rounded-full"
              alt=""
            />
          </div>
          <div>
            <ul
              class="my-2 ml-10 bg-darkContents border border-transparent min-w-72 rounded-lg"
            >
              <li class="flex border-b border-fuchsia-600 py-2 px-10">
                <span class="tracking-normal text-slate-400 font-normal">
                  Email :
                </span>
                <span class="pl-3 tracking-normal text-slate-200 font-medium">{{
                  contact.email
                }}</span>
              </li>
              <li class="flex border-b border-fuchsia-600 py-2 px-10">
                <span class="tracking-normal text-slate-400 font-normal">
                  Name :
                </span>
                <span class="pl-3 tracking-normal text-slate-200 font-medium">{{
                  contact.name
                }}</span>
              </li>
              <li class="flex py-2 px-10 border-b border-fuchsia-600">
                <span class="tracking-normal text-slate-400 font-normal">
                  Mobile :
                </span>
                <span class="pl-3 tracking-normal text-slate-200 font-medium">{{
                  contact.mobile
                }}</span>
              </li>
            </ul>
          </div>
          <div class="mx-5">
            <ul>
              <li>
                <RouterLink :to="`/contact/edit/${contact.id}`">
                  <button
                    type="button"
                    class="text-white w-12 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-4 py-2 text-center mr-2"
                  >
                    <i class="fa-solid fa-pen-to-square fa-beat-fade"></i>
                  </button>
                </RouterLink>
              </li>
              <li>
                <RouterLink :to="`/contact/read/${contact.id}`">
                  <button
                    type="button"
                    class="text-gray-900 w-12 bg-gradient-to-r my-1.5 from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-4 py-2 text-center mr-2"
                  >
                    <i class="fa-solid fa-eye fa-beat-fade"></i>
                  </button>
                </RouterLink>
              </li>
              <li>
                <button
                  @click="deleteContact(contact.id)"
                  type="button"
                  class="text-white w-12 bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-4 py-2 text-center mr-2"
                >
                  <i class="fa-solid fa-trash fa-beat-fade"></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script lang="ts">
import { ref, onMounted } from "vue";
import { ContactService } from "../services/contactService";
import Spinner from "../components/Spinner.vue";
export default {
  components: { Spinner },
  setup() {
    let loading = ref(false);
    let contacts = ref([]);
    let errorMessage = ref();

    async function getAllData() {
      try {
        loading.value = true;
        let response = await ContactService.getAllContacts();
        contacts.value = response.data;
        loading.value = false;
      } catch (error) {
        errorMessage.value = error;
        loading.value = false;
      }
    }
    getAllData();

    async function getAllContactsData() {
      return await ContactService.getAllContacts();
    }

    async function deleteContact(contactId) {
      try {
        loading.value = true;
        let response = await ContactService.deleteContact(contactId);
        if (response) {
          let response = await ContactService.getAllContacts();
          contacts.value = response.data;
          loading.value = false;
        }
      } catch (error) {
        errorMessage.value = error;
        loading.value = false;
      }
    }
    return {
      loading,
      contacts,
      errorMessage,
      getAllData,
      getAllContactsData,
      deleteContact,
    };
  },
};
</script>
<style></style>
