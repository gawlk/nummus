<template>
    <div class="h-screen w-screen p-4">
        <div class="max-w-md w-full mx-auto space-y-8">
            <div class="pt-24 pb-12 text-center">
                <Link href="/app">
                    <Database class="h-16 w-16 text-gray-700" />
                </Link>
            </div>
            <div class="space-y-4 p-4 bg-gray-800 rounded-2xl">
                <Listbox
                    :selected="state.accountType"
                    :list="state.accountTypes"
                    @select="updateAccountType"
                    lg
                />
                <Input
                    :value="state.accountName"
                    @input="(event) => (state.accountName = event.target.value)"
                    placeholder="Write the account accountName here"
                    type="accountName"
                    lg
                />
                <InputGroupAPI
                    v-if="state.accountType !== ACCOUNT_TYPES.CUSTOM"
                    :apiKey="state.accountApiKey"
                    :apiSecret="state.accountApiSecret"
                    :apiPassphrase="
                        state.accountType === ACCOUNT_TYPES.COINBASE_PRO
                            ? state.accountApiPassphrase
                            : null
                    "
                />
                <Button
                    @click="pushAccount"
                    lg
                    center
                    :disabled="state.accountNameSent"
                    class="w-full"
                >
                    Add account
                </Button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { reactive } from 'vue'

    import InputGroupAPI from './components/InputGroupAPI.vue'
    import Database from '/src/assets/svg/outline/database.svg'

    import { ACCOUNT_TYPES } from '/src/scripts/constants'

    const state = reactive({
        accountType: ACCOUNT_TYPES.BINANCE,
        accountTypes: [
            ACCOUNT_TYPES.BINANCE,
            ACCOUNT_TYPES.COINBASE_PRO,
            ACCOUNT_TYPES.CUSTOM,
        ],
        accountName: '',
        accountApiKey: '',
        accountApiSecret: '',
        accountApiPassphrase: '',
    })

    const updateAccountType = (type) => {
        state.accountType = type
    }

    const pushAccount = () => {}
</script>
