<template>
  <v-app>

    <v-navigation-drawer app v-model="drawer">
      <side-menu></side-menu>
    </v-navigation-drawer>

    <v-app-bar app flat dark hide-on-scroll>
      <v-row align="center" justify="space-between">
        <v-col cols="2" class="d-sm-none">
          <v-btn @click="drawer = !drawer"
          >
          <v-icon large>mdi-menu-open</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="6" sm="4" md="3">
          <h1>ABOUT ME</h1>
        </v-col>
        <v-col sm="5" class="d-none d-sm-flex">
          <nav-menu></nav-menu>
        </v-col>
        <v-col cols="4" sm="3" md="2" style="margin-top: 100px;">
          <sns-icon-group color="black"></sns-icon-group>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
    <footer-bar
    class="d-flex d-sm-none"
    ></footer-bar>
  </v-app>
</template>

<script>
import FooterBar from './components/FooterBar.vue';
import NavMenu from './components/NavMenu.vue';
import SideMenu from './components/SideMenu.vue';
import SnsIconGroup from './components/SnsIconGroup.vue';

export default {
  name: 'App',
  components: { NavMenu, SideMenu, FooterBar, SnsIconGroup},
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