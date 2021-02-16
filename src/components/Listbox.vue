<template>
    <Listbox
        as="div"
        :modelValue="props.selected"
        @update:modelValue="update"
        :class="[
            props.xxl
                ? 'text-2xl font-bold'
                : props.xl
                ? 'text-xl font-bold'
                : props.lg
                ? 'text-lg font-medium'
                : 'text-base font-medium',
        ]"
        class="space-y-1 leading-6"
    >
        <ListboxButton
            :class="[
                props.xxl
                    ? 'py-5 px-10 rounded-2xl border-4'
                    : props.xl
                    ? 'py-3 px-6 rounded-xl border-4'
                    : props.lg
                    ? 'py-2 px-5 rounded-xl border-4'
                    : 'py-1.5 px-4 rounded-lg border-2',
            ]"
            class="w-full border-gray-700 text-left focus:ring focus:ring-gray-600"
        >
            {{ props.selected }}
        </ListboxButton>
        <ListboxOptions>
            <ListboxOption
                v-for="element in props.list"
                :key="element"
                :value="element"
            >
                {{ element }}
            </ListboxOption>
        </ListboxOptions>
    </Listbox>
</template>

<script setup>
    import { defineEmit, defineProps } from 'vue'
    import {
        Listbox,
        ListboxLabel,
        ListboxButton,
        ListboxOptions,
        ListboxOption,
    } from '@headlessui/vue'

    const emit = defineEmit()

    const props = defineProps({
        selected: String,
        list: Array,
        lg: Boolean,
        xl: Boolean,
        xxl: Boolean,
    })

    const update = (value) => {
        emit('select', value)
        emit('selectIndex', props.list.indexOf(value))
    }
</script>
