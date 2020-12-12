<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 style="text-align: center;" id="title">{{ title }}</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ShuffleText from 'shuffle-text'

export default {
  name: 'TitleBox',
  props: {
    title: String
  },
  mounted: function() {
    const title = document.getElementById('title')
    const shulle =  new ShuffleText(title)
    shulle.start()
  }
}
</script>