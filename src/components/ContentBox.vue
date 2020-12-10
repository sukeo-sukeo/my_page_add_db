<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <!-- HOMEviewのときはこちらを表示 -->
          <div v-if="urlPath === '/'">
            <router-link :to=link>
              <v-img 
              height="250"
              :src='src'
              >
              </v-img>
            </router-link>
          </div>
          <!-- 基本はこちらを表示 -->
          <div
          v-else>
            <a :href=link target="_blank">
              <v-img 
              height="250"
              :src='src'
              >
              </v-img>
            </a>
          </div>
          <!-- サイト模写一覧のドロップメニュー-->
          <v-card-title
           class="py-0" 
           v-if="title === 'サイト模写'">
          <mosya-drop-menu>
          </mosya-drop-menu>
          </v-card-title>
          <!-- 基本はこちらを表示 -->
          <v-card-title
           class="pb-0 title"
           v-else>
           <v-icon v-show="urlPath === '/'"
           class="mr-3"
           >
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
import MosyaDropMenu from './MosyaDropMenu.vue'

export default {
  neme: 'ContentBox',
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
      urlPath: location.pathname
    }
  },
  methods: {
    
  },
  created: function() {

  },
  components: {
    MosyaDropMenu,
  }
}
</script>

