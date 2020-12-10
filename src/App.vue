<template>
  <v-app>

    <v-navigation-drawer app v-model="drawer">
      <side-menu></side-menu>
    </v-navigation-drawer>

    <v-app-bar app flat dark>
      <v-row align="center">
        <v-col cols="2" class="d-sm-none">
          <v-btn @click="drawer = !drawer"
          >
          <v-icon>mdi-menu-open</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="8" sm="4">
          <h1 style="text-align: ;">ABOUT ME</h1>
        </v-col>
        <v-col sm="8">
          <nav-menu class="d-none d-sm-flex"></nav-menu>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>

  </v-app>
</template>

<script>
import NavMenu from './components/NavMenu.vue';
import SideMenu from './components/SideMenu.vue';

export default {
  name: 'App',
  components: { NavMenu, SideMenu },
  data: () => {
    return {
       drawer: false
    }
  },
  computed: {
    },
  methods: { 
  }
};
</script>
