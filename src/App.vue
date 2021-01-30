<template>
    <component :is="page" />
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
    import packageJSON from '/src/package.json'

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

    const pages = import.meta.glob('./pages/**/*.vue')

    const routes = {}

    Object.keys(pages)
        .filter((key) => !key.includes('/components/'))
        .forEach((key) => {
            let path = key.toLowerCase().match(/^\.\/pages\/(.*)\.vue$/)[1]
            path = '/' + (path === 'index' ? '' : path.replace(/\/?index$/, ''))
            routes[path] = defineAsyncComponent(() => pages[key]())
        })

    const page = shallowRef()

    const setPage = (path) => {
        page.value =
            routes[path] ||
            routes['/NotFound'] ||
            routes['/404'] ||
            (() => '404')
    }

    setPage(window.location.pathname)

    window.addEventListener('popstate', () => {
        setPage(window.location.pathname)
    })
</script>
