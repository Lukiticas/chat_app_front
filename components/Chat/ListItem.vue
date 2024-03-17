<script lang="ts" setup>
import { cn } from "~/lib/utils";

const props = defineProps<{
  chat: ChatListItem;
  isSelected: boolean;
}>();

const emit = defineEmits(["select"]);

const handleSelect = () => {
  emit("select", props.chat.id);
};
</script>

<template>
  <button
    :key="chat.id"
    :class="
      cn(
        'flex flex-col chats-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent',
        isSelected && 'bg-muted'
      )
    "
    @click="handleSelect"
  >
    <div class="flex w-full flex-col gap-1">
      <div class="flex items-center">
        <div class="flex items-center gap-2">
          <div class="font-semibold">
            {{ chat.name }}
          </div>
        </div>
        <div :class="cn('ml-auto text-xs', isSelected ? 'text-foreground' : 'text-muted-foreground')">
          {{ $dayjs(chat.lastMessageTime).fromNow() }}
        </div>
      </div>
      <div class="flex justify-between flex-nowrap items-center">
        <div class="line-clamp-2 text-xs text-muted-foreground">
          {{ chat.lastMessage.substring(0, 300) }}
        </div>
        <span v-if="!chat.isRead" class="h-2 w-2 rounded-full bg-blue-600" />
      </div>
    </div>
  </button>
</template>

<style></style>
