<script setup>
useHeadSafe({
  title: "Home",
});

const selectedChat = ref(null);
</script>

<template>
  <div class="h-screen">
    <ResizablePanelGroup id="main" direction="horizontal">
      <ResizablePanel :min-size="15" :default-size="15" :max-size="120">
        <ChatList v-model:selected-chat="selectedChat" />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel>
        <ChatBody v-model:selected-chat="selectedChat" />
      </ResizablePanel>
    </ResizablePanelGroup>
  </div>
</template>

<style scoped></style>
