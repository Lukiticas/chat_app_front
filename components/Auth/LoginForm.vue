<script lang="ts" setup>
import { cn } from "~/lib/utils";
const emit = defineEmits(["toggle-screen"]);

const isLoading = ref(false);
async function onSubmit(event: Event) {
  event.preventDefault();
  isLoading.value = true;

  setTimeout(() => {
    isLoading.value = false;
  }, 3000);
}
</script>

<template>
  <div :class="cn('grid gap-6', $attrs.class ?? '')">
    <div class="flex flex-col space-y-2 text-center">
      <h1 class="text-2xl font-semibold tracking-tight">Criar uma conta</h1>
      <p class="text-sm text-muted-foreground">Entre com seu email e senha</p>
    </div>
    <form @submit="onSubmit">
      <div class="grid gap-2">
        <div class="grid gap-1">
          <Label class="sr-only" for="email"> Email </Label>
          <Input
            id="email"
            placeholder="E-mail"
            type="email"
            auto-capitalize="none"
            auto-complete="email"
            auto-correct="off"
            :disabled="isLoading"
          />
        </div>
        <Button :disabled="isLoading">
          <BaseSpinner v-if="isLoading" class="mr-2 h-4 w-4 animate-spin" />
          Se cadastrar
        </Button>
      </div>
    </form>
    <div class="relative">
      <div class="absolute inset-0 flex items-center">
        <span class="w-full border-t" />
      </div>
      <div class="relative flex justify-center text-xs">
        <span class="bg-background px-2 text-muted-foreground"> Já tem uma conta? </span>
      </div>
    </div>
    <Button variant="outline" @click="() => emit('toggle-screen')">
      <Icon name="uil:arrow-left" class="mr-2 h-4 w-4" />
      Entrar
    </Button>
  </div>
</template>

<style></style>
