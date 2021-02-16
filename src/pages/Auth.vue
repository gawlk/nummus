<template>
    <div class="h-screen w-screen flex items-center justify-center p-4">
        <div class="max-w-md w-full space-y-8 sm:space-y-12">
            <div class="text-center">
                <Link href="/">
                    <UserCircle class="h-16 w-16 text-gray-700" />
                </Link>
            </div>
            <div class="space-y-4 p-4 bg-gray-800 rounded-2xl">
                <Input
                    :value="state.email"
                    :invalid="state.invalidEmail"
                    @input="(event) => (state.email = event.target.value)"
                    @keydown.enter.prevent="signIn"
                    placeholder="Write your email here"
                    type="email"
                    lg
                />
                <Button
                    @click="signIn"
                    lg
                    center
                    :disabled="state.emailSent"
                    :green="state.emailSent"
                    :red="state.invalidEmail"
                    class="w-full"
                >
                    {{
                        state.invalidEmail
                            ? 'Invalid address'
                            : state.emailSent
                            ? 'Magic link sent'
                            : 'Send magic link'
                    }}
                </Button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { reactive } from 'vue'

    import UserCircle from '/src/assets/svg/outline/user-circle.svg'

    import database from '/src/scripts/database'
    import { regexEmail } from '/src/scripts/regexes'

    const state = reactive({
        email: '',
        invalidEmail: false,
        emailSent: false,
    })

    const signIn = async () => {
        if (!state.emailSent) {
            state.invalidEmail = false

            if (regexEmail.test(state.email)) {
                database.auth.signIn({
                    email: state.email,
                })

                state.emailSent = true
            } else {
                state.invalidEmail = true
            }
        }
    }
</script>
