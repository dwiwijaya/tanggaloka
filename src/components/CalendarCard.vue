<template>
    <div class="py-4 px-5 border rounded-xl bg-white">
        <h2 class="text-xl font-semibold mb-4">{{ monthName }} {{ year }}</h2>
        <div class="grid grid-cols-7 gap-2">
            <div v-for="day in daysOfWeek" :key="day" :class="day === 'Sun' ? '!text-red-500' : ''" class="font-medium mb-2 text-neutral-500 flex justify-center items-center">{{ day }}</div>
            <div v-for="day in blankDays" :key="day" class="flex justify-center items-center"><span class="rounded-full w-3 h-3 bg-neutral-100"></span></div>
            <div v-for="day in daysInMonth" :key="day" :class="[dayClasses(day), 'text-center']">
                {{ day }}
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
            console.log(firstDay);
            return Array.from({ length: firstDay }, (_, i) => i);
        },
    },
    methods: {
        dayClasses(day) {
            const date = new Date(this.year, this.month, day);
            const isSunday = date.getDay() === 0;
            return {
                "text-red-500": isSunday,
            };
        },
    },
};
</script>
  
<style scoped>
/* Tambahkan gaya tambahan jika diperlukan */
</style>
  