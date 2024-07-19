<template>
  <div class="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
    <CalendarCard v-for="(month, index) in 12" :key="index" :month="index" :year="currentYear" />
  </div>
</template>

<script>
import CalendarCard from './components/CalendarCard.vue';

export default {
  components: {
    CalendarCard,
  },
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style>
/* Tambahkan gaya tambahan jika diperlukan */
</style>
