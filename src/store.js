import { reactive } from 'vue'

const store = reactive({
    // x: localStorage.getItem('x') || defaultX,
    setKey: (key, value, save = true) => {
        save && localStorage.setItem(key, value)
        store[key] = value
    },
})

export default store
