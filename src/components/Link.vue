<template>
    <a
        :disabled="disabled"
        :href="href"
        @click.prevent="to"
        :class="disabled ? 'cursor-not-allowed' : ''"
    >
        <slot></slot>
    </a>
</template>

<script setup>
    import { defineProps } from 'vue'

    import router from '/src/router'

    const props = defineProps({
        disabled: Boolean,
        href: String,
    })

    const to = () => {
        if (!props.disabled && props.href) {
            router.to(props.href)
        }
    }
</script>
