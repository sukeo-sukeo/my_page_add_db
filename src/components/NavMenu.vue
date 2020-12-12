<template>
  <v-container>
    <v-row>
      <v-col>
        <router-link class="mr-3" to="/">HOME</router-link>
        <router-link class="mr-3" to="/product">PRODUCT</router-link>
        <router-link class="mr-3" to="/skill">SKILL</router-link>
        <router-link class="mr-3" to="/learned">LEARNED</router-link>
        <router-link to="/contact">CONTACT</router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'NavMenu',
  props: {
  },
  data: () => {
    return {
      
    }
  }
}
</script>
