<script setup lang="ts">
import { Link, useForm } from '@inertiajs/vue3';
import placeholder from "../../../assets/placeholder.svg";
import {Button} from "@/components/ui/button";
import { TextInput } from "@/components/common/input-group";


const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
});

const submit = () => {
    form.post(route('register'), {
        onFinish: () => {
            form.reset('password', 'password_confirmation');
        },
    });
};
</script>

<template>
    <div class="h-full w-full lg:grid lg:grid-cols-2">
        <div class="h-full flex items-center justify-center py-12">
            <div class="mx-auto grid w-[350px] gap-6">
                <div class="grid gap-2 text-center">
                    <h1 class="text-3xl font-bold">
                        Cadastre-se
                    </h1>
                    <p class="text-balance text-muted-foreground">
                        Preencha os campos para criar uma conta.
                    </p>
                    <div v-if="status" class="mb-4 text-sm font-medium text-green-600">
                        {{ status }}
                    </div>
                </div>
                <form @submit.prevent="submit" class="grid gap-6">
                    <div class="grid gap-1">
                        <TextInput id="name" label="Nome" v-model="form.name"
                                   placeholder="Nome Completo" :error="form.errors.name" required/>
                    </div>
                    <div class="grid gap-1">
                        <TextInput id="email" type="email" label="E-mail" v-model="form.email"
                                   placeholder="email@exemplo.com" :error="form.errors.email" required/>
                    </div>
                    <div class="grid gap-1">
                        <TextInput id="password" type="password" label="Senha" v-model="form.password"
                                   placeholder="********" :error="form.errors.password" required autocomplete="new-password"/>
                    </div>
                    <div class="grid gap-1">
                        <TextInput id="password" type="password" label="Confirmar Senha" v-model="form.password_confirmation"
                                   placeholder="********" :error="form.errors.password_confirmation" required autocomplete="new-password"/>
                    </div>
                    <Button type="submit" class="w-full" :disabled="form.processing">
                        Cadastrar-se
                    </Button>
                </form>
                <div class="mt-4 text-center text-sm">
                    Já possui conta?
                    <Link :href="route('login')" class="underline">
                        Login
                    </Link>
                </div>
            </div>
        </div>
        <div class="hidden bg-muted lg:block">
            <img
                :src="placeholder"
                alt="Placeholder Image"
                class="h-screen w-full object-cover dark:brightness-[0.2] dark:grayscale max-h-screen"
            >
        </div>
    </div>
</template>
