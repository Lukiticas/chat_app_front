<script lang="ts" setup>
import { cn } from "~/lib/utils";
import { useToast } from "../ui/toast";

const emit = defineEmits(["toggle-screen"]);
const { signIn } = useAuth();
const { toast } = useToast();

const data = reactive({
  email: "",
  password: "",
});

const isLoading = ref(false);
async function onSubmit(event: Event) {
  event.preventDefault();

  try {
    isLoading.value = true;
    await signIn(data, { callbackUrl: "/" });
  } catch (error) {
    console.error(error);
    toast({
      title: "Erro ao fazer login",
      description: "Verifique suas credenciais e tente novamente",
      variant: "destructive",
    });
  } finally {
    isLoading.value = false;
  }
}
</script>

<template>
  <div :class="cn('grid gap-6', $attrs.class ?? '')">
    <div class="flex flex-col space-y-2 text-center">
      <h1 class="text-2xl font-semibold tracking-tight">Bem vindo de volta!</h1>
      <p class="text-sm text-muted-foreground">
        Para manter conectado conosco, faça login com suas informações pessoais
      </p>
    </div>
    <form @submit="onSubmit">
      <div class="grid gap-2">
        <div class="grid gap-1">
          <Label class="sr-only" for="email"> Email </Label>
          <Input
            id="email"
            v-model="data.email"
            placeholder="E-mail"
            type="email"
            auto-capitalize="none"
            auto-complete="email"
            auto-correct="off"
            :disabled="isLoading"
          />
        </div>
        <div class="grid gap-1">
          <Label class="sr-only" for="password"> Senha </Label>
          <Input
            id="password"
            v-model="data.password"
            placeholder="Senha"
            type="password"
            auto-capitalize="none"
            auto-complete="password"
            auto-correct="off"
            :disabled="isLoading"
          />
        </div>
        <Button :disabled="isLoading">
          <BaseSpinner v-if="isLoading" class="mr-2 h-4 w-4 animate-spin" />
          Entrar
        </Button>
      </div>
    </form>
    <div class="relative">
      <div class="absolute inset-0 flex items-center">
        <span class="w-full border-t" />
      </div>
      <div class="relative flex justify-center text-xs">
        <span class="bg-background px-2 text-muted-foreground"> Não tem uma conta? </span>
      </div>
    </div>
    <Button variant="outline" @click="() => emit('toggle-screen')">
      Se cadastrar
      <Icon name="uil:arrow-right" class="m-2 h-4 w-4" />
    </Button>
  </div>
</template>

<style></style>
