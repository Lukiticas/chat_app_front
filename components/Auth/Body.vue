<script lang="ts" setup>
const isLogin = ref(true);

const toggleLoginScreen = () => {
  isLogin.value = !isLogin.value;
};
</script>

<template>
  <div class="hidden h-full flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
    <div class="h-full bg-mute bg-slate-900 md:hidden lg:block"></div>
    <div class="lg:p-8 h-full grid items-center justify-center">
      <div class="sm:w-[350px]">
        <Transition name="fade" mode="out-in">
          <AuthLoginForm v-if="isLogin" @toggle-screen="toggleLoginScreen" />
          <AuthRegisterForm v-else @toggle-screen="toggleLoginScreen" />
        </Transition>
      </div>
    </div>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
