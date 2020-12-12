<template>
  <v-row justify="center">
      <p class="display-2">{{ day }}</p>
      <p class="display-1" style="align-self: center;">{{ now }}</p>
   </v-row>
</template>

<script>
export default {
  name: 'ClockBox',
  data: function() {
    return {
      day: null,
      now: null
    }
  },
  methods: {
    time: function() {
      const getStartDate = new Date('1/1/2020')
      const getNowDate = new Date()
      const arowTime = {
        day: (Math.floor((getNowDate - getStartDate) / (1000 * 60 * 60 * 24))).toString(),
        hour: getNowDate.getHours(),
        minute:  getNowDate.getMinutes(),
        second: getNowDate.getSeconds()
      }  
      return arowTime
    },
    updateTime: function() {
       const hour = String(this.time().hour)
       const minute = String(this.time().minute)
       const second = String(this.time().second)
       this.day = `${this.time().day - 1}日と`
       this.now = `${hour.padStart(2, '0')}時間${minute.padStart(2, '0')}分${second.padStart(2, '0')}秒`
    }
  },
  mounted: function() {
    setInterval(this.updateTime, 1000)
  }
}
</script>