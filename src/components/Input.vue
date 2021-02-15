<template>
    <input
        :placeholder="props.placeholder"
        :type="props.type"
        :value="props.value"
        :class="[
            props.invalid && 'ring ring-red-500 ring-opacity-50',
            props.xl
                ? 'text-xl font-semibold p-4 px-6 rounded-xl'
                : props.lg
                ? 'text-lg font-medium py-3 px-5 rounded-xl'
                : 'text-base py-2 px-3 rounded-lg',
        ]"
        class="w-full flex-1 bg-gray-700 focus:ring focus:ring-gray-600 leading-6 focus:outline-none transition-colors duration-200"
    />
</template>

<script setup>
    import { defineEmit, defineProps } from 'vue'

    const emit = defineEmit()

    const props = defineProps({
        invalid: Boolean,
        placeholder: String,
        type: String,
        value: String,
        lg: Boolean,
        xl: Boolean,
    })
</script>
