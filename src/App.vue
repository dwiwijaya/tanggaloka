<template>
  <Header @set-prev-year="setPrevYear" @set-next-year="setNextYear" :year="currentYear" />
  <div class="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    <CalendarCard v-for="(month, index) in 12" :key="index" :month="index" :year="currentYear" :today="today" />
  </div>
</template>

<script>
import dayjs from 'dayjs';
import CalendarCard from './components/CalendarCard.vue';
import Header from './components/Header.vue';

export default {
  components: {
    CalendarCard,
    Header,
  },
  data() {
    return {
      currentYear: new Date().getFullYear(),
      today: dayjs().format('YYYY-M-DD'),
    };
  },
  methods: {
    setPrevYear() {

      this.currentYear = dayjs().year(this.currentYear).subtract(1, 'year').format('YYYY')
    },
    setNextYear() {
      this.currentYear = dayjs().year(this.currentYear).add(1, 'year').format('YYYY')
    }
  }
};
</script>
