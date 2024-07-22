<template>
  <div class="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    <CalendarCard v-for="(month, index) in 12" :key="index" :month="index" :year="currentYear" :today="today" />
  </div>
</template>

<script>
import dayjs from 'dayjs';
import CalendarCard from './components/CalendarCard.vue';

export default {
  components: {
    CalendarCard,
  },
  data() {
    return {
      currentYear: new Date().getFullYear(),
      today: dayjs().format('YYYY-M-DD'),
    };
  },
};
</script>

<style>
/* Tambahkan gaya tambahan jika diperlukan */
</style>
