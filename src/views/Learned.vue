<template>
  <v-container>
    <title-box title="学んだ書籍/動画"></title-box>
    <v-row justify="center">
      <v-col cols="10" sm="4" md="3"
       v-for="data in requireData()" :key="data.title">
       
        <books-box
         :link=data[10]
         :src=data[9]
         :title=data[0]
         :descript=data[7]
         :auther=data[2]
         :publisher=data[4]
        ></books-box>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BooksBox from '../components/BooksBox.vue';
import TitleBox from '../components/TitleBox.vue';

export default {
  name: 'Learned',
  components: { 
    BooksBox,
    TitleBox 
    },
  data: () => {
    return {
    }
  },
  methods: {
    requireData: function() {
      return require('../assets/books/books.csv')
    }
  },
  created: function() {

  }
}
</script>
