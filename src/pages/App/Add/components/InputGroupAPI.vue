<template>
    <Input
        :value="props.apiKey"
        @input="(event) => emit('inputApiKey', event.target.value)"
        placeholder="Write the API key here"
        lg
    />
    <Input
        :value="props.apiSecret"
        @input="(event) => emit('inputApiSecret', event.target.value)"
        placeholder="Write the API secret here"
        lg
    />
    <Input
        v-if="typeof props.apiPassphrase === 'string'"
        :value="props.apiPassphrase"
        @input="(event) => emit('inputApiPassphrase', event.target.value)"
        placeholder="Write the API passphrase here"
        lg
    />
</template>

<script setup>
    import { defineEmit, defineProps } from 'vue'

    const emit = defineEmit()

    const props = defineProps({
        apiKey: {
            type: String,
            required: true,
        },
        apiSecret: {
            type: String,
            required: true,
        },
        apiPassphrase: String,
    })
</script>
