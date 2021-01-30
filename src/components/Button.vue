<template>
    <component
        :is="props.href ? 'a' : 'button'"
        :href="href"
        @click.prevent="href && pushUrl(href)"
        :class="[
            props.light
                ? 'bg-gray-50 hover:bg-gray-100 text-black text-opacity-50 hover:text-opacity-75'
                : 'bg-gray-900 hover:bg-gray-700 text-white',
            props.xxl
                ? 'text-3xl font-extrabold py-6 px-12 rounded-2xl'
                : props.xl
                ? 'text-2xl font-extrabold py-4 px-8 rounded-xl'
                : props.lg
                ? 'text-xl font-bold py-3 px-6 rounded-xl'
                : props.md
                ? 'text-lg font-semibold py-3 px-6 rounded-xl'
                : 'text-base font-medium py-2 px-4 rounded-lg',
            !props.full && 'sm:w-auto',
            props.center && 'justify-center',
        ]"
        class="w-full flex-none inline-flex items-center cursor-pointer leading-6 border border-transparent focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200"
    >
        <slot></slot>
    </component>
</template>

<script setup>
    import { defineProps } from 'vue'

    const props = defineProps({
        href: String,
        light: Boolean,
        md: Boolean,
        lg: Boolean,
        xl: Boolean,
        xxl: Boolean,
        full: Boolean,
        center: Boolean,
    })

    const pushUrl = (href) => {
        history.pushState(null, '', href)
        window.dispatchEvent(new Event('popstate'))
    }
</script>
