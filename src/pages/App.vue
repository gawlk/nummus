<template>
    <div class="h-screen w-screen p-4">
        <div class="max-w-md w-full mx-auto space-y-8">
            <div class="pt-16 pb-12 space-y-4">
                <div class="space-y-2 text-3xl sm:text-4xl font-semibold">
                    <p>Total</p>
                    <p>$0.00</p>
                </div>
                <div
                    class="flex items-center space-x-2 text-green-400 text-lg font-medium"
                >
                    <TrendingUp class="h-6 w-6" />
                    <p>$0.00 (0.00%)</p>
                </div>
            </div>
            <div class="space-y-2">
                <div
                    class="border-2 border-dashed border-gray-400 text-gray-200 text-lg font-medium rounded-xl px-6 py-3"
                >
                    Empty
                </div>
            </div>
            <div>
                <Button center dark lg class="w-full"> Add account </Button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import TrendingUp from '/src/assets/svg/outline/trending-up.svg'
</script>
