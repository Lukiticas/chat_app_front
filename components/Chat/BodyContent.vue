<template>
  <section :class="cn('', $attrs.class ?? '')"></section>
</template>

<script lang="ts" setup>
import { cn } from "~/lib/utils";
</script>

<style></style>
