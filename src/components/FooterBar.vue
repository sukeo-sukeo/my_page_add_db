<template>
  
    <v-app-bar
    bottom
    inverted-scroll
    fixed flat dark>
      <v-row>
        <nav-menu></nav-menu>
      </v-row>
    </v-app-bar>
  
</template>

<script>
import NavMenu from './NavMenu.vue';

export default {
  name: 'App',
  components: { NavMenu },
  data: () => {
    return {
      
    }
  },
  computed: {
    },
  methods: { 
  }
};
</script>