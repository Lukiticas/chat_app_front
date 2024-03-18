<template>
  <Button variant="ghost" class="flex items-center justify-between h-full text-left w-full">
    <div class="flex items-center space-x-4">
      <Avatar class="border rounded-full p-2 bg-white">
        <AvatarImage :src="fallBackImage" />
        <AvatarFallback>ICO</AvatarFallback>
      </Avatar>
      <div>
        <p class="text-lg font-medium leading-none">{{ name }}</p>
        <slot />
      </div>
    </div>
  </Button>
</template>

<script lang="ts" setup>
const { name } = defineProps<{
  avatar: string | null;
  name: string;
}>();

const fallBackImage = computed(() => {
  return `https://ui-avatars.com/api/?name=${name}`;
});
</script>

<style></style>
