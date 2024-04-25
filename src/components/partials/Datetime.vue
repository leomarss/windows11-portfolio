<script>
export default {
  data() {
    return {
      dateTime: this.formattedDateTime(),
    };
  },

  props: {
    onlyTime: Boolean,
    onlyDate: Boolean,
  },

  mounted() {
    setInterval(() => {
      this.dateTime = this.formattedDateTime();
    }, 1000);
  },

  methods: {
    formattedDateTime() {
      const currentDate = new Date();
      const day = currentDate.getDate();
      const month = currentDate.getMonth() + 1;
      const year = currentDate.getFullYear();
      const hours = currentDate.getHours();
      const minutes = currentDate.getMinutes();

      // Add zero if number is lower then 10
      const formattedDay = day < 10 ? `0${day}` : day;
      const formattedMonth = month < 10 ? `0${month}` : month;
      const formattedHours = hours < 10 ? `0${hours}` : hours;
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

      if (this.onlyTime) return `${formattedHours}:${formattedMinutes}`;
      else if (this.onlyDate) return `${formattedDay}/${formattedMonth}/${year}`;

      return `${formattedDay}/${formattedMonth}/${year} ${formattedHours}:${formattedMinutes}`;
    },
  },
};
</script>

<template>{{ dateTime }}</template>
