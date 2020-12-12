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
          <router-link :to="link">
            <v-card-title class="py-2 title">
              <v-row justify="space-between">
                <div>
                  <v-icon class="mb-1 mr-2">{{ icon }}</v-icon>
                  {{title}}
                </div>
                <v-icon>mdi-transfer-right</v-icon>
              </v-row>
            </v-card-title>   
          </router-link>
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
    src: String,
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

