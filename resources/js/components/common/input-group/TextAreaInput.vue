<script setup lang="ts">
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {HTMLAttributes} from "vue";

const modelValue = defineModel<string | null>({
    required: true,
    type: null
});
defineProps<{
    id?: HTMLAttributes['id'];
    label?: string;
    description?: string | null;
    error?: string | null;
}>();
</script>

<template>
	<div class="grid w-full gap-1.5">
		<Label :for="id">{{ label }}</Label>
		<Textarea
			:id="id"
			v-model="modelValue"
			v-bind="{ ...$attrs }"
			:class="[error ? 'border-red-500' : '']"
		/>
		<p v-if="description" class="text-xs text-muted-foreground">
			{{ description }}
		</p>
	</div>
	<p v-if="error" class="text-red-600 text-[12px]">{{ error }}</p>
</template>

<style scoped></style>
