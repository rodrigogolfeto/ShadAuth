<script setup lang="ts">
import {TextInput} from '@/components/common/input-group';
import {Head, Link, useForm} from '@inertiajs/vue3';
import placeholder from "../../../assets/placeholder.svg";
import {Button} from "@/components/ui/button";
import GuestAuthLayout from "@/Layouts/GuestAuthLayout.vue";

defineOptions({layout: GuestAuthLayout})

const form = useForm({
    password: '',
});

const submit = () => {
    form.post(route('password.confirm'), {
        onFinish: () => {
            form.reset();
        },
    });
};
</script>

<template>
    <div class="mx-auto grid w-[350px] gap-6">
        <div class="grid gap-2 text-center">
            <h1 class="text-3xl font-bold">
                Confirmar Senha
            </h1>
            <p class="text-balance text-muted-foreground">
                Esta é uma área segura do aplicativo. Por favor, confirme sua
                senha antes de continuar.
            </p>
        </div>
        <form @submit.prevent="submit" class="grid gap-4">
            <div class="grid gap-2">
                <TextInput v-model="form.password" id="password" type="password" placeholder="Senha" label="Senha" :error="form.errors.password" autofocus required/>
            </div>

            <Button type="submit" class="w-full">
                Confirmar
            </Button>
        </form>
    </div>
</template>
