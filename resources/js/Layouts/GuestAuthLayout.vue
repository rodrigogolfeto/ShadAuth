<script setup lang="ts">
import placeholder from "../../assets/placeholder.svg";
</script>

<template>
    <div class="h-full w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
        <div class="h-full flex items-center justify-center py-12">
            <slot />
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

<style>
html, body, #app{
    @apply h-full;
}
</style>
