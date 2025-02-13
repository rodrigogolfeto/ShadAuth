<script setup lang="ts">

import { TextInput  } from "@/components/common/input-group";
import {Head, Link, useForm} from '@inertiajs/vue3';
import placeholder from "../../../assets/placeholder.svg";
import {Button} from "@/components/ui/button";


defineProps<{
    status?: string;
}>();

const form = useForm({
    email: '',
});

const submit = () => {
    form.post(route('password.email'));
};
</script>

<template>
    <div class="h-full w-full lg:grid lg:grid-cols-2">
        <div class="h-full flex items-center justify-center py-12">
            <div class="mx-auto grid w-[350px] gap-6">
                <div class="grid gap-2 text-center">
                    <h1 class="text-3xl font-bold">
                        Esqueci a Senha
                    </h1>
                    <p class="text-balance text-muted-foreground">
                        Nos informe seu e-mail e enviaremos um link de redefinição de senha.
                    </p>
                    <div
                        v-if="status"
                        class="mb-4 text-sm font-medium text-green-600 dark:text-green-400"
                    >
                        {{ status }}
                    </div>

                </div>
                <form @submit.prevent="submit" class="grid gap-6">
                    <div class="grid gap-1">
                        <TextInput id="email" type="email" label="E-mail" v-model="form.email"
                                   placeholder="m@example.com" :error="form.errors.email" autofocus required/>
                    </div>

                    <Button type="submit" class="w-full" :disabled="form.processing">
                        Recuperar Senha
                    </Button>
                </form>
                <div class="mt-4 text-center text-sm">
                    <Link :href="route('login')" class="underline">
                        Me lembrei!
                    </Link>
                </div>
            </div>
        </div>
        <div class=" hidden bg-muted lg:block">
            <img
                :src="placeholder"
                alt="Placeholder Image"
                class="h-screen w-full object-cover dark:brightness-[0.2] dark:grayscale max-h-screen"
            >
        </div>
    </div>
</template>
