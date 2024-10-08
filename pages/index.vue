<template>
  <div>
    <IntroComp/>
    <PubComp/>
    <BlogComp/>
    <ProjectComp/>
  </div>
</template>

<script setup lang="ts">
import IntroComp from '../components/IntroComp.vue';
import PubComp from '../components/PubComp/index.vue';
import BlogComp from "../components/BlogComp/index.vue"
import ProjectComp from "../components/Projects/index.vue"
</script>
  
<style scoped>
#intro {
  max-width: 900px;
  margin: 70px auto;
  margin-bottom: 20px;
}

.intro-content {
  font-size: 1.2em;
  color: grey
}

.title-head {
  font-size: 2em;
  color: black;
  font-weight: 700;
}
</style>