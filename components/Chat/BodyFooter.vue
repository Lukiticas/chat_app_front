<template>
  <footer :class="cn('w-full h-[5rem] border-y p-3 flex items-stretch gap-3 flex-nowrap', $attrs.class ?? '')">
    <Textarea class="border px-4 py-2 rounded w-full" id="message" type="text" placeholder="Escrever..." />
  </footer>
</template>

<script lang="ts" setup>
import { cn } from "~/lib/utils";
</script>

<style></style>
