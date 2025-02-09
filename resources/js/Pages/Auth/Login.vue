<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import placeholder from '../../../assets/placeholder.svg'
import {TextInput} from "@/Components/common/input-group";
import {useForm, Link} from "@inertiajs/vue3";

defineProps<{
    canResetPassword?: boolean;
    status?: string;
}>();

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.post(route('login'), {
        onFinish: () => {
            form.reset('password');
        },
    });
};
</script>

<template>
    <div class="h-full w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
        <div class="h-full flex items-center justify-center py-12">
            <div class="mx-auto grid w-[350px] gap-6">
                <div class="grid gap-2 text-center">
                    <h1 class="text-3xl font-bold">
                        Login
                    </h1>
                    <p class="text-balance text-muted-foreground">
                        Digite seu e-mail para fazer login na sua conta
                    </p>
                </div>
                <form @submit.prevent="submit" class="grid gap-4">
                    <div class="grid gap-2">
                        <TextInput v-model="form.email" id="email" type="email" placeholder="Email" label="E-mail" :error="form.errors.email" autofocus required/>
                    </div>
                    <div class="grid gap-2">
                        <div class="flex items-center">
                            <Label for="password">Senha</Label>
                            <a
                                href="/forgot-password"
                                class="ml-auto inline-block text-sm underline"
                            >
                                Esqueceu sua senha?
                            </a>
                        </div>
                        <TextInput v-model="form.password" id="password" type="password" placeholder="********"  :error="form.errors.password" required/>

                    </div>
                    <Button type="submit" class="w-full">
                        Login
                    </Button>
                </form>
                <div class="mt-4 text-center text-sm">
                    Você não possui conta?
                    <Link :href="route('register')" class="underline" :disabled="form.processing">
                        Cadastrar-se
                    </Link>
                </div>
            </div>
        </div>
        <div class="hidden bg-muted lg:block">
            <img
                :src="placeholder"
                alt="Image"
                class="h-screen w-full object-cover dark:brightness-[0.2] dark:grayscale"
            >
        </div>
    </div>
</template>
