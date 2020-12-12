<template>
  <div>
    <p>{{ now }}</p>
  </div>
</template>

<script>
export default {
  name: 'ClockBox',
  data: function() {
    return {
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
        
        
      
      // console.log(arowDays);

      // console.log(a);
      // this.now = date.getHours() + ":"
      //   + date.getMinutes() + ":" +
      //   date.getSeconds();
      return arowTime
    }
  },
  created: function() {
    console.log(this.time());
    this.now = `${this.time().day}:${this.time().hour}:${this.time().minute}:${this.time().second}` 
  },
}
</script>