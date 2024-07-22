<template>
    <header>
        <div class="flex items-center justify-between h-20 px-4 lg:px-10 bg-container border border-b border-stroke">
            <div class="brand flex items-center gap-2">
                <img class="w-8" src="../assets/logo.png" alt="" srcset="">
                <p class="font-bold text-lg text-neutral-600"></p>
            </div>
            <div class="flex gap-2">
                <button @click="$emit('set-prev-year')" class="fad fa-chevron-left btn"></button>
                <button class="btn" disabled>{{ year }}</button>
                <button @click="$emit('set-next-year')" class="fad fa-chevron-right btn"></button>
            </div>
            <button @click="toggleDarkMode()" class="group btn !p-3">
                <i :class="iconClass" class="bx group-active:rotate-90 transition-all duration-300 ease-in-out"></i>
            </button>
        </div>
    </header>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useDark, useToggle } from "@vueuse/core"

const props = defineProps({
    year: {
        type: Number,
        required: true
    }
})

const isDark = useDark()
const toggleDarkMode = useToggle(isDark)

const iconClass = computed(() => {
    return isDark.value ? 'bx-moon' : 'bx-sun'
})
</script>