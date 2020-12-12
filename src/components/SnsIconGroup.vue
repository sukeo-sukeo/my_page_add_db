<template>
  <v-container>
    <v-row align="center">
      <v-col
       class="pa-0"
       v-for="icon in snsIcons" :key="icon.type"
      >
        <a :href="icon.path" target="_blank">
          <v-icon :color="color">{{ icon.icon }}</v-icon>
        </a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'SnsIconGroup',
  props: {
    color: String
  },
  data: function() {
    return {
      snsIcons : [
        {
          path: 'https://twitter.com/sukeo_sukeo',
          icon: 'mdi-twitter',
        },
        {
          path: 'https://github.com/sukeo-sukeo',
          icon: 'mdi-github'
        },
        {
          path: 'https://kichintodqmsl.wordpress.com',
          icon: 'mdi-wordpress'
        },
        {
          path: 'https://qiita.com/sukeo-sukeo',
          icon: 'mdi-post-outline',
        }
      ]
    }
  },
  methods: {
    
  }
}
</script>