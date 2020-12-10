<template>
  <v-expansion-panels flat>
    <v-expansion-panel>
      <v-expansion-panel-header>
        模写サイト一覧
      </v-expansion-panel-header>
      <v-expansion-panel-content 
       v-for="item in mosyaItems.mosyaData" :key="item.id">
        <a :href=item.link target="_blank">{{ item.title }}</a>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>  
</template>

<script>
export default {
  name: 'mosyaDropMenu',
  data: function() {
    return {
      mosyaItems: require('../assets/product/mosya/mosyaData.js')
    }
  }
}
</script>