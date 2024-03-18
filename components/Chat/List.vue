<script lang="ts" setup>
import chatsMockup from "../../data/ChatListItems.json";

defineProps<{
  selectedChat: ChatListItem | null;
}>();

const emit = defineEmits<{
  (e: "update:selected-chat", chat: ChatListItem): void;
}>();

const dayjs = useDayjs();
const orders = ref<OrderOption[]>([
  { name: "Recentes", value: "most-recent" },
  { name: "Mais antigos", value: "oldest" },
  { name: "Pendente", value: "unseen" },
  { name: "A-Z", value: "a-z" },
]);

const chats = ref<ChatListItem[]>([]);
const search = ref("");
const selectedOrder = ref("most-recent");

const getChatsPreview = async () => {
  chats.value = chatsMockup as any;
};

const filteredChats = computed(() => {
  const filtered = !search.value
    ? chats.value
    : chats.value.filter((chat) => {
        return chat.name.toLowerCase().includes(search.value.toLowerCase());
      });

  const sorted = filtered.sort((a, b) => {
    if (selectedOrder.value === "most-recent") {
      return dayjs(a.lastMessageTime).isBefore(b.lastMessageTime) ? -1 : 1;
    }

    if (selectedOrder.value === "oldest") {
      return dayjs(a.lastMessageTime).isAfter(b.lastMessageTime) ? -1 : 1;
    }

    if (selectedOrder.value === "unseen") {
      return a.isRead ? 1 : -1;
    }

    if (selectedOrder.value === "a-z") {
      return a.name.localeCompare(b.name);
    }

    return 0;
  });

  return sorted;
});

onMounted(() => {
  getChatsPreview();
});
</script>

<template>
  <section class="h-full p-4">
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-lg font-semibold">Chats</h2>
      <Button size="sm">
        <Icon class="mr-2" name="lucide:square-plus" />
        Novo chat
      </Button>
    </div>
    <div class="mb-4">
      <div class="flex flex-row gap-3 relative w-full max-w-sm items-center">
        <Input v-model="search" id="search" type="text" placeholder="Buscar chat..." class="pl-10" />
        <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
          <Icon name="lucide:search" />
        </span>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="outline" size="sm" class="ml-auto">
              <Icon name="lucide:filter" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Ordenar por</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup v-model="selectedOrder">
              <DropdownMenuRadioItem v-for="order of orders" :key="order.value" :value="order.value">
                {{ order.name }}
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
    <ScrollArea class="h-full flex">
      <div class="flex-1 flex flex-col gap-2">
        <TransitionGroup name="list" appear>
          <ChatListItem
            v-for="chat of filteredChats"
            :key="chat.id"
            :chat="chat"
            :isSelected="selectedChat?.id === chat.id"
            @select="(chat) => emit('update:selected-chat', chat)"
          />
        </TransitionGroup>
      </div>
    </ScrollArea>
  </section>
</template>

<style scoped>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(15px);
}

.list-leave-active {
  position: absolute;
}
</style>
