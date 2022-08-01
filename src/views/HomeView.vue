<template>
  <div>
    <IntroComp />
    <SocialGroupComp />
  </div>
</template>

<script>
// import HelloWorld from '../components/HelloWorld'
import IntroComp from '@/components/IntroComp.vue'
import SocialGroupComp from '@/components/SocialGroupComp.vue'
export default {
  name: 'Home',

  components: {
    IntroComp,
    SocialGroupComp
  },
}
</script>
