<template>
  <div>
    <v-row justify="space-around" class="social-group">
      <SocialBtnCompVue v-for="btn in socials" :key="btn.href" :href="btn.href" :icon="btn.icon"/>
    </v-row>
  </div>
</template>

<script>
import SocialBtnCompVue from './SocialBtnComp.vue'
export default {
  components: {
    SocialBtnCompVue
  },
  data() {
    return {
      socials: [
        {href: 'https://github.com/RyanQ96', icon: 'mdi-github'}, 
        {href: 'https://www.linkedin.com/in/rui-qiu-231aa915b/', icon: 'mdi-linkedin'}, 
        {href: 'https://observablehq.com/@ruiq', icon: 'mdi-eye-circle'}
      ]
    }
  }
}
</script>

<style scoped>
.social-group{
  max-width: 900px;
  margin: 0 auto;
}
</style>