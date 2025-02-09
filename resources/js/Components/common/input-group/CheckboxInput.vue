<script setup lang="ts">
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {HTMLAttributes} from "vue";

const modelValue = defineModel<boolean>({required: true, type: Boolean});
defineProps<{
    id: HTMLAttributes['id']
    label?: string
    error?: string | null;
}>();

</script>

<template>
	<div class="items-top flex space-x-2">
		<Checkbox :id="id" v-model:checked="modelValue" v-bind="{ ...$attrs }" />
		<Label
			:for="id"
			class="text-sm font-medium leading-tight peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
		>
			{{ label }}
		</Label>
	</div>
	<p v-if="error" class="text-red-600 text-[12px]">Mensagem de erro</p>
</template>

<style scoped></style>
