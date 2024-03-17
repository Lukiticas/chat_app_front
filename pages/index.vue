<script setup>
useHeadSafe({
  title: "Home",
});

const tabs = ref([]);
</script>

<template>
  <div class="h-screen">
    <ResizablePanelGroup id="main" direction="horizontal">
      <ResizablePanel :min-size="15" :default-size="15" :max-size="120">
        <ChatList />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel>Two</ResizablePanel>
    </ResizablePanelGroup>
  </div>
</template>

<style scoped></style>
