<script setup lang="ts">
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { vMaska } from "maska/vue"
import {InputMaskType, inputMasks} from "./index.ts";
import type {HTMLAttributes} from "vue";


const modelValue = defineModel({
    required: true,
});

const props = defineProps<{
    label?: string
    mask?: InputMaskType
    error?: string | null
    type?: HTMLAttributes['type']
    id?: HTMLAttributes['id']
    class?: HTMLAttributes['class']
    placeholder?: HTMLAttributes['placeholder']
}>()

</script>

<template>
	<Label :for="id" :class="{ 'text-red-600': error }">{{ label }}</Label>
	<div class="relative mt-1">
		<Input
			v-model="modelValue"
			:type="type"
			:name="id"
			:placeholder="placeholder"
			:class="{
				'border-2 border-red-500 placeholder:text-red-500 focus:border-red-500 focus-visible:ring-transparent':
					error
			}"
			v-maska="inputMasks[mask]"
			v-bind="$attrs"
		/>
	</div>
	<p v-if="error" class="text-red-600 text-[12px]">{{ error }}</p>
</template>

<style scoped></style>
