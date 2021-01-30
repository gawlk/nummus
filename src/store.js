import { reactive } from 'vue'

const store = reactive({
    // example: localStorage.getItem('example') || defaultExample,
    setKey: (key, value, save = true) => {
        save && localStorage.setItem(key, value)
        store[key] = value
    },
})

export default store
