<template>
    <div class="h-screen w-screen flex items-center justify-center p-4">
        <div class="space-y-8 sm:space-y-12">
            <div class="flex items-center space-x-2">
                <Coin class="h-6 w-6 sm:h-8 sm:w-8 text-gray-200" />
                <p class="text-xl sm:text-2xl font-medium text-gray-200">
                    Nummus
                </p>
            </div>
            <p class="text-4xl sm:text-5xl font-semibold">
                The only portfolio
                <br />
                you'll need now.
            </p>
            <div class="space-y-2 sm:space-y-0 sm:flex sm:space-x-4">
                <Button
                    @click="scrollDown"
                    dark
                    lg
                    center
                    class="w-full sm:w-auto"
                >
                    Learn more
                </Button>
                <Button href="/app" lg center class="w-full sm:w-auto">
                    Go to app
                </Button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { reactive } from 'vue'

    import Coin from '/src/assets/svg/coin.svg'

    import database from '/src/scripts/database'
    import { regexEmail } from '/src/scripts/regexes'

    const state = reactive({
        email: '',
        invalidEmail: false,
    })

    const signIn = async () => {
        state.invalidEmail = false

        if (regexEmail.test(state.email)) {
            const { user, session, error } = await database.auth.signIn({
                email: state.email,
            })

            console.log(user, session, error)
        } else {
            state.invalidEmail = true
        }
    }

    const scrollDown = () => {}
</script>
