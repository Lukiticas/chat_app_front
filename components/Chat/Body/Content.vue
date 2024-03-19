<template>
  <section :class="cn('max-h-full', $attrs.class ?? '')">
    <ChatMessageListing :messages="messages" />
  </section>
</template>

<script lang="ts" setup>
import { cn } from "~/lib/utils";

const props = defineProps<{
  chat: ChatBody;
}>();

const messages = ref<Message[]>([]);

const getMessages = async () => {
  messages.value = props.chat.messages ?? [];
};

onMounted(() => {
  getMessages();
});

watch(
  () => props.chat,
  () => {
    getMessages();
  }
);
</script>

<style></style>
