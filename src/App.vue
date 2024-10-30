<template>
  <div class="container flex gap-6 flex-col mx-auto p-4 pt-0 relative">
    <Header
      @set-prev-year="setPrevYear"
      @set-next-year="setNextYear"
      :year="currentYear"
      class="rounded-b-lg sm:rounded-b-xl sticky top-0 z-10 bg-background pt-4"
    />
    <!-- Greeting Section -->
    

    <!-- Calendar Cards -->
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
    >
      <CalendarCard
        v-for="(month, index) in 12"
        :key="index"
        :month="index"
        :year="currentYear"
        :today="today"
      />
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import CalendarCard from "./components/CalendarCard.vue";
import Header from "./components/Header.vue";

export default {
  components: {
    CalendarCard,
    Header,
  },
  data() {
    return {
      currentYear: new Date().getFullYear(),
      today: dayjs().format("YYYY-M-DD"),
    };
  },
  methods: {
    setPrevYear() {
      this.currentYear = dayjs()
        .year(this.currentYear)
        .subtract(1, "year")
        .format("YYYY");
    },
    setNextYear() {
      this.currentYear = dayjs()
        .year(this.currentYear)
        .add(1, "year")
        .format("YYYY");
    },
  },
  computed: {
    day() {
      return dayjs(this.today).date();
    },
    monthName() {
      return dayjs(this.today).format("MMMM");
    },
    dayName() {
      return dayjs(this.today).format("dddd");
    },
    isWeekend() {
      return dayjs(this.today).day() === 0 || dayjs(this.today).day() === 6; // Sunday or Saturday
    },
    javaneseMarketDay() {
      const marketDays = ["Legi", "Pahing", "Pon", "Wage", "Kliwon"];
      const baseDate = dayjs("2023-01-01"); // Adjust this to a known Javanese calendar date
      const daysSinceBase = dayjs(this.today).diff(baseDate, "day");
      return marketDays[daysSinceBase % 5]; // Simple calculation for market day
    },
  },
};
</script>
<style>
@import url("https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css");
</style>
