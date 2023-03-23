<template>
  <div>
    <h1 className="text-3xl font-bold underline">This is Contacts Page</h1>
  </div>
</template>
<script lang="ts">
import { onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    onMounted(() => {
      router.push({ path: "/contacts" });
    });
  },
};
</script>
<style></style>
