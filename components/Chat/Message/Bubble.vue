<template>
  <div
    :style="`background-color: ${color ?? 'rgb(37, 99, 235)'}`"
    :class="cn('px-3 py-1 pb-2 rounded flex clamp flex-col gap-1', customClass, textColor, $attrs.class ?? '')"
  >
    <p :lass="cn('w-100', customClass)">{{ message.content }}</p>
    <div :class="cn(' text-sm font-extralight w-100 flex flex-row items-center justify-end gap-1', invertedClass)">
      <span>{{ $dayjs(message.timestamp).fromNow() }}</span>
      <ChatMessageStatusIcon :status="message.status" :class="textColor" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { cn } from "~/lib/utils";

const props = defineProps<{
  message: Message;
  direction?: "left" | "right";
  color?: string;
}>();

const customClass = computed(() => {
  return `text-${props?.direction ?? "left"}`;
});

const invertedClass = computed(() => {
  return props.direction === "right" ? "text-left" : "text-right";
});

const wc_hex_is_light = (color: string) => {
  const hex = color.replace("#", "");
  const c_r = parseInt(hex.substr(0, 2), 16);
  const c_g = parseInt(hex.substr(2, 2), 16);
  const c_b = parseInt(hex.substr(4, 2), 16);
  const brightness = (c_r * 299 + c_g * 587 + c_b * 114) / 1000;
  return brightness > 155;
};

const textColor = computed(() => {
  return wc_hex_is_light(props.color ?? "rgb(37, 99, 235)") ? "text-black" : "text-white";
});
</script>

<style scoped>
.clamp {
  width: fit-content;
  min-width: 15rem;
  max-width: 50%;
}
</style>
