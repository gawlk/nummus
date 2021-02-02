<template>
    <component :is="router.page" />
</template>

<style>
    @font-face {
        font-family: 'Inter var';
        font-weight: 100 900;
        font-style: normal;
        font-named-instance: 'Regular';
        font-display: swap;
        src: url('/fonts/Inter.var.woff2') format('woff2');
    }
</style>

<script setup>
    import { shallowRef, defineAsyncComponent } from 'vue'
    import { useHead } from '@vueuse/head'

    import packageJSON from '/src/../package.json'
    import router from './router'

    useHead({
        title: packageJSON.name
            .split(/ |-|_/)
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' '),
        meta: [
            {
                name: 'description',
                content: packageJSON.description,
            },
        ],
    })
</script>
