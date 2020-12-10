<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="10" sm="5" md="4"
       v-for="item in reverseItems" :key="item.id">
        <product-box
        :link=item.link
        :title=item.title 
        :descript=item.description
        :src="require(`../assets/product/img/${item.path}`)"
        :usedSkills=item.use
        >
        </product-box>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProductBox from '../components/ProductBox.vue'

export default {
  name: 'Product',
  components: {
    ProductBox
  },
  data: function() {
    return {
      productItems: require('../assets/product/productData.js'),
      }
    },
  computed: {
    reverseItems: function() {
        return this.productItems.madeItemData.slice().reverse();
    },
  },
  methods: {
  },
  created: function() {
  }
}

</script>