<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <div>
            <router-link :to=link>
              <v-img 
              height="250"
              :src='src'
              >
              </v-img>
            </router-link>
          </div>
          <v-card-title class="pb-0 title">
           <v-icon class="mr-3">
            {{ icon }}
           </v-icon>
            {{ title }}
          </v-card-title>
          <v-card-title
           class="py-0 auther"
           v-show="auther">
            {{ auther }}
          </v-card-title>
          <v-card-title
           class="py-0 publisher"
           v-show="publisher">
            {{ publisher }}
          </v-card-title>
          <v-card-text>
            <div class="grey--text">
              {{ descript }}
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  neme: 'HomeBox',
  props: {
    link: String,
    title: String,
    descript: String,
    src: String,
    auther: String,
    publisher: String,
    icon: String
    },
  data: function() {
    return {
    }
  },
  methods: {
    
  },
  created: function() {
  
  }
}
</script>

