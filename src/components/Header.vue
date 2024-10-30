<template>
    <header>
        <div class="rounded-lg sm:rounded-xl h-fit p-3 sm:p-4 bg-container border border-b border-stroke">
            <div class="flex items-center justify-between">
                <div class="brand flex items-center gap-2">
                    <img class="w-5 sm:w-8" :src="'/logo.png'" alt="" srcset="" />
                    <p class="font-pacifico text-lg text-neutral-500 dark:text-neutral-300">
                        Tanggaloka
                    </p>
                </div>
                <div class="flex gap-2">
                    <div class="flex">
                        <button @click="$emit('set-prev-year')"
                            class="fad fa-sm fa-chevron-left btn !rounded-r-none border-r-0"></button>
                        <button class="btn !rounded-r-none !rounded-l-none" disabled>
                            {{ year }}
                        </button>
                        <button @click="$emit('set-next-year')"
                            class="fad fa-sm fa-chevron-right btn !rounded-l-none border-l-0"></button>
                    </div>
                    <button @click="toggleDarkMode()" class="group btn">
                        <i :class="iconClass" class="bx group-active:rotate-90 transition-all duration-300 ease-in-out"></i>
                    </button>
                </div>
            </div>

            <div v-show="!isHiddenGreeting" class="greeting">
                <hr class="border-stroke my-4" />
                <div>
                    <h2 class="leading-3 mb-1 text-xl font-semibold">
                        <i class="fad fa-hand-wave text-primary"></i> Hii, Today's
                        {{ dayName }}
                    </h2>
                    <p class="dark:text-gray-500 text-gray-600 text-sm">
                        {{ dayName }}, <span class="font-semibold">{{ day }}</span> {{ monthName }}
                        <span class="bg-primary rounded-md text-xs p-1 py-[2px] text-blue-100 dark:text-blue-900">{{
                            javaneseMarketDay }}</span>
                    </p>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { useDark, useToggle } from "@vueuse/core";
import dayjs from "dayjs";

const props = defineProps({
    year: {
        type: Number,
        required: true,
    },
});

const isDark = useDark();
const toggleDarkMode = useToggle(isDark);
const iconClass = computed(() => (isDark.value ? "bx-moon" : "bx-sun"));

// State for controlling greeting visibility
const isHiddenGreeting = ref(false);

// Computed properties for date formatting
const today = ref(dayjs().format("YYYY-MM-DD"));
const day = computed(() => dayjs(today.value).date());
const monthName = computed(() => dayjs(today.value).format("MMMM"));
const dayName = computed(() => dayjs(today.value).format("dddd"));
const javaneseMarketDay = computed(() => {
    const marketDays = ["Legi", "Pahing", "Pon", "Wage", "Kliwon"];
    const baseDate = dayjs("2023-01-01");
    const daysSinceBase = dayjs(today.value).diff(baseDate, "day");
    return marketDays[daysSinceBase % 5];
});
</script>
