<template>
  <header :class="cn('w-full h-[4rem] border-y', $attrs.class ?? '')">
    <Separator orientation="vertical" />
  </header>
</template>

<script lang="ts" setup>
import { cn } from "~/lib/utils";
</script>

<style></style>
