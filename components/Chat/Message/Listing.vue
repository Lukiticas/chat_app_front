<template>
  <div class="p-3">
    <ScrollArea class="maxHeight flex flex-col">
      <AnimationsListAppear>
        <div
          v-for="message in messages"
          :message="message"
          :class="cn('w-full flex-1  px-2 flex align-center', messageJustification(message))"
        >
          <ChatMessageBubble :message="message" :direction="messageDirection(message)" :color="message.color" />
        </div>
      </AnimationsListAppear>
    </ScrollArea>
  </div>
</template>

<script lang="ts" setup>
import { cn } from "~/lib/utils";

defineProps<{
  messages: Message[];
}>();

const { data } = useAuth();

const messageDirection = (message: Message) => {
  return message.senderId == data.value?.id ? "right" : "left";
};

const messageJustification = (message: Message) => {
  return message.senderId !== data.value?.id?.toString() ? "justify-start" : "justify-end";
};
</script>

<style scoped>
.maxHeight {
  max-height: calc(100vh - (4rem + 6.8rem + 0.75rem));
}
</style>
