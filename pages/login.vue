<script setup lang="ts">
definePageMeta({
  title: "Login",
  description: "Login to your account",
  keywords: "login, account, authentication",
  layout: "auth",
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: "/",
  },
});

useHeadSafe({
  title: "Login",
});
</script>

<template>
  <AuthBody />
</template>

<style scoped></style>
