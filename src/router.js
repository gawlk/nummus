import { shallowRef, defineAsyncComponent, reactive } from 'vue'

const router = reactive({})

const pages = import.meta.glob('./pages/**/*.vue')
router.pages = pages

const routes = {}
router.routes = routes

Object.keys(pages)
    .filter((key) => !key.includes('/components/'))
    .forEach((key) => {
        let path = key.toLowerCase().match(/^\.\/pages\/(.*)\.vue$/)[1]
        path = '/' + (path === 'index' ? '' : path.replace(/\/?index$/, ''))
        routes[path] = defineAsyncComponent(() => pages[key]())
    })

const page = shallowRef()
router.page = page

const checkPath = (path) => {
    // Path logic here

    return routes[path] ? path : '/'
}

const getPage = async (path) => {
    // Pre page actions here

    router.path = checkPath(path)

    if (path !== router.path) {
        history.replaceState(null, '', router.path)
    }

    return routes[router.path]
}

const setPage = async (path) => {
    page.value = await getPage(path)
}

setPage(window.location.pathname)

window.addEventListener('popstate', () => {
    setPage(window.location.pathname)
})

router.to = (path) => {
    history.pushState(null, '', path)

    setPage(path)
}

router.back = () => {
    history.back()
}

export default router
