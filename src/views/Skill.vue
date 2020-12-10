<template>
  <v-container>
    <v-row justify="center" class="mb-5">
      <v-col cols="9" sm="5" md="4"
      v-for="(item, i) in Object.keys(skillItems.devicons)" :key="item.i"
      >
        <v-card>
          <v-card-title class="display-1" 
          style="background-color: ghostwhite;">
          <v-icon class="mr-2">mdi-laptop-chromebook</v-icon>
            {{  uppercase(item) }}
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text  v-for="item in skillItems.devicons[Object.keys(skillItems.devicons)[i]]" :key="item.id">
            <v-row align="center">
              <i :class=item.path 
               style="font-size: 3rem;">
                <v-icon v-show=item.icon x-large>{{ item.icon }}</v-icon>
               </i>
              <v-rating
              class="ml-2"
              readonly
              empty-icon=""
              color="red"
              length="5"
              size="24"
              :value=item.rating
              ></v-rating>
            </v-row>
            <v-divider></v-divider>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'Skill',
  data: function() {
    return {
      skillItems: require('../assets/skill/skillData.js')
    }
  },
  methods: {
    uppercase: function(val) {
      return val.toUpperCase()
    }
  }
}
</script>
