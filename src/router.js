import { shallowRef, defineAsyncComponent, reactive } from 'vue'

import store from './store'
import database from './scripts/database'

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

    path = routes[path] ? path : '/'

    // console.log('auth', localStorage.getItem('supabase.auth.token'))

    if (path === '/auth' && localStorage.getItem('supabase.auth.token')) {
        return '/app'
    } else if (
        path.startsWith('/app') &&
        !localStorage.getItem('supabase.auth.token')
    ) {
        return '/auth'
    } else {
        return path
    }
}

const getPage = async (path) => {
    // Pre page actions here

    // console.log('session', database.auth.session())
    // console.log('user', database.auth.user())

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
