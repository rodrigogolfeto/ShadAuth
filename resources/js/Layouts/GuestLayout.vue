<script setup lang="ts">
import ApplicationLogo from '@/components/ApplicationLogo.vue';
import { Link } from '@inertiajs/vue3';
</script>

<template>
    <slot />
</template>

<style>
html, body, #app{
    @apply h-full;
}
</style>
