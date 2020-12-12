<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <div>
            <a :href=link target="_blank">
              <v-img 
              max-height="250"
              height="fit-content"
              width="fit-content"
              contain
              class="my-0 mx-auto"
              :src='src'
              >
              </v-img>
            </a>
          </div>
          <v-card-title>
            {{ title }}
          </v-card-title>
          <v-card-subtitle>
            {{ auther }} / {{ publisher }}
          </v-card-subtitle>

          <v-card-actions>
            <v-btn
              color="orange lighten-2"
              text
            >
              書籍の内容
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn
              icon
              @click="show = !show"
            >
              <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text class="pt-0">
                  <div class="grey--text">
                    {{ descript }}
                  </div>
                </v-card-text>
            </div>
          </v-expand-transition>


        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  neme: 'BooksBox',
  props: {
    link: String,
    title: String,
    descript: String,
    src: String,
    auther: String,
    publisher: String
    },
  data: function() {
    return {
      show: false
    }
  },
  methods: {
    
  },
  created: function() {

  },
  components: {
  }
}
</script>

