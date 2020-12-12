<template>
  <v-container>
    <v-row>
      <v-col>
         <v-list>
            <v-list-item>
              <router-link to="/">
              <v-icon class="mr-3" color="white">mdi-home-outline</v-icon>
              HOME</router-link>
            </v-list-item>
            <v-list-item>
              <router-link to="/product">
              <v-icon class="mr-3" color="white">mdi-laptop-chromebook</v-icon>
              PRODUCT</router-link>
            </v-list-item>
            <v-list-item>
              <router-link to="/skill">
              <v-icon class="mr-3" color="white">mdi-hand-heart-outline</v-icon>
              SKILL</router-link>
            </v-list-item>
            <v-list-item>
              <router-link to="/learned">
              <v-icon class="mr-3" color="white">mdi-book-open-page-variant-outline</v-icon>
              LEARNED</router-link>
            </v-list-item>
            <v-list-item>
              <router-link to="/contact">
              <v-icon class="mr-3" color="white">mdi-card-account-mail-outline</v-icon>
              CONTACT</router-link>
            </v-list-item>
          </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'SideMenu',
  props: {
  },
  data: () => {
    return {
     
    }
  }
}
</script>