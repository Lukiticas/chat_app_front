<template>
  <p class="text-sm font-thin mt-1 leading-none" v-if="!!activity">{{ activity }}</p>
</template>

<script lang="ts" setup>
defineProps<{
  activity: string;
}>();
</script>

<style></style>
