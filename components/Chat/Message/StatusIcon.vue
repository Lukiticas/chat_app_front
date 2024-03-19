<template>
  <div class="grid items-center">
    <Icon :name="icon" :class="cn('text-black ', $attrs.class ?? '')" />
  </div>
</template>

<script lang="ts" setup>
import { cn } from "~/lib/utils";

const props = defineProps<{
  status: MessageStatus;
}>();

const icon = computed(() => {
  switch (props.status) {
    case "sent":
      return "material-symbols:alarm-on";
    case "delivered":
      return "material-symbols:done";
    case "read":
      return "material-symbols:done-all-rounded";
    default:
      return "material-symbols:alarm-outline";
  }
});
</script>

<style></style>
