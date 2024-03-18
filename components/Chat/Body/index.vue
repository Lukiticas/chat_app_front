<script lang="ts" setup>
import ChatBodies from "../../../data/ChatBodies.json";

const props = defineProps<{
  selectedChat: ChatListItem;
}>();

const currentChat = ref<ChatBody | null>(null);
const isLoading = ref(true);

const getCurrentChat = (currentSelectedChat: ChatListItem) => {
  isLoading.value = true;

  if (currentSelectedChat) {
    const current = (ChatBodies as ChatBody[]).find((chat) => chat?.id === currentSelectedChat?.id);
    current && (currentChat.value = current);
  }

  isLoading.value = false;
};

onMounted(() => {
  getCurrentChat(props.selectedChat);
});

watch(
  () => props.selectedChat,
  (currentSelectedChat) => {
    getCurrentChat(currentSelectedChat);
  }
);
</script>

<template>
  <section class="h-full w-full">
    <div v-if="currentChat && !isLoading" class="flex flex-col h-full">
      <ChatBodyHeader :chat="currentChat" class="flex-0" />
      <ChatBodyContent class="flex-1" />
      <ChatBodyFooter class="flex-0" />
    </div>
    <div class="h-full w-full grid items-center bg-slate-200" v-else-if="!currentChat && !isLoading">
      <div class="flex flex-col items-center justify-center">
        <Icon name="eva:email-outline" size="70" />
        <p>Selecione uma conversa para começar</p>
      </div>
    </div>
    <div v-else class="h-full w-full grid items-center bg-slate-200">
      <div class="flex flex-col items-center justify-center">
        <BaseSpinner />
        <p>Carregando...</p>
      </div>
    </div>
  </section>
</template>
