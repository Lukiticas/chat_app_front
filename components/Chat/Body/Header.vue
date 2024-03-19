<template>
  <header :class="cn('w-full h-[4rem] border-y flex flex-row align-center px-3 py-1 gap-3', $attrs.class ?? '')">
    <BaseAvatarSection :avatar="chat.avatar || ''" :name="chat.name">
      <ChatBodyHeaderActivity :activity="chatMessageStatus" />
    </BaseAvatarSection>
    <Separator orientation="vertical" />
    <div class="grid items-center">
      <Button variant="ghost" size="sm">
        <Icon name="eva:more-vertical-outline" size="20" />
      </Button>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { cn } from "~/lib/utils";

const props = defineProps<{
  chat: ChatBody;
}>();

const activity = ref<ChatMessageActivity | null>();

const chatMessageStatus = computed(() => {
  if (!activity) {
    return props.chat.members.map((member) => member.name).join(", ");
  }

  switch (activity.value?.status) {
    case "online":
      return `${activity.value.user?.name} está online`;
    case "offline":
      return `${activity.value.user?.name} está offline`;
    case "typing":
      return `${activity.value.user?.name} Digitando..`;
    case "idle":
      return props.chat.members.map((member) => member.name).join(", ");
    case "recording":
      return `${activity.value.user?.name} está gravando um áudio`;
    default:
      return props.chat.isGroup ? props.chat.members.map((member) => member.name).join(", ") : "";
  }
});
</script>

<style></style>
