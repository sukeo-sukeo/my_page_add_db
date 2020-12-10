<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <div>
            <a :href=link target="_blank">
              <v-img 
              height="250"
              :src='src'
              >
              </v-img>
            </a>
          </div>
          <v-card-title>
            {{ title }}
          </v-card-title>
          <v-card-subtitle>
            <v-chip class="ma-1"
             v-for="usedSkill in usedSkills" :key="usedSkill">
            {{ usedSkill }}
            </v-chip>
          </v-card-subtitle>

          <v-card-actions>
            <v-btn
              color="orange lighten-2"
              text
            >
              制作物の説明
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
                  <!-- サイト模写一覧のドロップメニュー-->
                  <mosya-drop-menu
                  v-if="title === 'サイト模写'">
                  </mosya-drop-menu>
                </v-card-text>
            </div>
          </v-expand-transition>


        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MosyaDropMenu from './MosyaDropMenu.vue'

export default {
  neme: 'ProductBox',
  props: {
    link: String,
    title: String,
    descript: String,
    src: String,
    usedSkills: Array
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
    MosyaDropMenu
  }
}
</script>

