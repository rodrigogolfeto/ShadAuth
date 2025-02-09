<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import {useAuth} from "@/Composables/useAuth";
import {onMounted} from "vue";

const {isAuth, authUser} = useAuth()

onMounted(() => {
})
</script>

<template>
    <div>
        Tu ta logado!
    </div>
</template>
