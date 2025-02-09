<script setup lang="ts">
import {computed} from 'vue';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import {Head, Link, useForm} from '@inertiajs/vue3';
import placeholder from "../../../assets/placeholder.svg";
import {Label} from "@/Components/ui/label";
import {TextInput} from "@/Components/common/input-group";
import {Button} from "@/Components/ui/button";

const props = defineProps<{
    status?: string;
}>();

const form = useForm({});

const submit = () => {
    form.post(route('verification.send'));
};

const verificationLinkSent = computed(
    () => props.status === 'verification-link-sent',
);
</script>

<template>

    <div class="h-full w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
        <div class="h-full flex items-center justify-center py-12">
            <div class="mx-auto grid w-[500px] gap-6">
                <div class="grid gap-2 text-center">
                    <h1 class="text-3xl font-bold">
                        Verifique seu Email
                    </h1>
                    <p class="text-balance text-muted-foreground">
                        Obrigado por se cadastrar! Antes de começar, você poderia verificar seu
                        endereço de email clicando no link que acabamos de enviar para você? Caso não
                        tenha recebido o email, teremos prazer em enviar outro.
                    </p>
                    <div
                        class="mb-4 text-sm font-medium text-green-600 dark:text-green-400"
                        v-if="verificationLinkSent"
                    >
                        Um novo link de verificação foi enviado para o endereço de email que você
                        forneceu durante o registro.
                    </div>
                </div>
                <form @submit.prevent="submit" class="grid gap-4">
                    <Button type="submit" class="w-full">
                        Reenviar Email de Verificação
                    </Button>
                </form>
                <div class="mt-4 text-center text-sm">
                    <Link  :href="route('logout')"
                           method="post"
                           as="button"
                           class="underline" :disabled="form.processing">
                        Sair
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
