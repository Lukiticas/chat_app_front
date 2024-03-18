<template>
  <footer :class="cn('w-full border p-3', $attrs.class ?? '')">
    <div class="flex flex-row flex-nowrap align-center gap-3 w-full">
      <div class="flex justify-stretch flex-col gap-2 flex-wrap">
        <Button size="sm">
          <Icon name="eva:attach-outline" size="20" />
        </Button>
        <Button size="sm">
          <Icon name="eva:camera-outline" size="20" />
        </Button>
      </div>
      <Textarea class="border rounded h-[3rem]" id="message" type="text" placeholder="Escrever..." />
      <Button class="bg-blue-600 hover:bg-blue-400 h-[5.1rem] w-[5rem]">
        <Icon name="eva:paper-plane-outline" size="23" />
      </Button>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { cn } from "~/lib/utils";
</script>

<style></style>
