<template>
  <div
    class="box-border absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
  >
    <div class="flex flex-col">
      <button
        class="w-44 self-center relative m-5 inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
      >
        <RouterLink
          to="/contacts"
          class="relative pr-7 py-2.5 transition-all ease-in duration-75 bg-darkContents rounded-md group-hover:bg-opacity-0"
        >
          <i class="fa-solid fa-arrow-left fa-beat-fade px-2"></i>
          Back to Contacts
        </RouterLink>
      </button>
      <img
        class="m-5 h-96 w-4/5 border border-transparent rounded-lg self-center"
        src="../assets/images/not-found.png"
        alt="notFound"
      />
    </div>
  </div>
</template>
<script lang="ts">
export default {};
</script>
<style></style>
