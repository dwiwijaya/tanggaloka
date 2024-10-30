<template>
    <div class="py-4 px-5 border rounded-xl bg-container border-stroke">
        <h2 class="text-xl dark:text-neutral-300 font-semibold mb-4">{{ monthName }} {{ year }}</h2>
        <div class="grid grid-cols-7 gap-2">
            <div v-for="day in daysOfWeek" :key="day" :class="day === 'Sun' ? '!text-red-500' : ''"
                class="font-medium mb-2 text-neutral-800 dark:text-neutral-400 flex justify-center items-center">
                {{ day }}
            </div>
            <div v-for="day in blankDays" :key="day" class="flex justify-center items-center">
                <span class="rounded-full w-3 h-3 bg-neutral-100 dark:bg-neutral-700"></span>
            </div>
            <div v-for="day in daysInMonth" :key="day"
                :class="[dayClasses(day), isToday(day), 'text-center !w-8 h-8 flex flex-col justify-center items-center text-neutral-600 dark:text-neutral-500 text-sm']">
                <div>{{ day }}</div>
                <div class="text-[10px] leading-3 " :class="isToday(day)">{{ getPasaranDay(day) }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        month: {
            type: Number,
            required: true,
        },
        year: {
            type: Number,
            required: true,
        },
        today: {
            type: Date,
            required: true,
        }
    },
    computed: {
        daysOfWeek() {
            return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        },
        monthName() {
            return new Date(this.year, this.month).toLocaleString("default", { month: "long" });
        },
        daysInMonth() {
            const days = new Date(this.year, this.month + 1, 0).getDate();
            return Array.from({ length: days }, (_, i) => i + 1);
        },
        blankDays() {
            const firstDay = new Date(this.year, this.month, 1).getDay();
            return Array.from({ length: firstDay }, (_, i) => i);
        },
    },
    methods: {
        dayClasses(day) {
            const date = new Date(this.year, this.month, day);
            const isSunday = date.getDay() === 0;
            return {
                "!text-red-500": isSunday,
            };
        },
        isToday(day) {
            return `${this.year}-${this.month + 1}-${day}` == this.today ? '!text-green-500' : '';
        },
        getPasaranDay(day) {
            const pasaran = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"];
            // Tanggal acuan: 1 Januari 2023 adalah Kliwon
            const referenceDate = new Date(2024, 0, 1);
            const currentDate = new Date(this.year, this.month, day);
            const diffDays = Math.floor((currentDate - referenceDate) / (1000 * 60 * 60 * 24));
            const pasaranIndex = (diffDays % 5 + 5) % 5; // memastikan hasil positif
            return pasaran[pasaranIndex];
        }
    },
};
</script>
