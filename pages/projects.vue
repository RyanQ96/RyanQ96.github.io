<template>
  <div>
    <ProjectComp/>
  </div>
</template>

<script setup lang="ts">
import ProjectComp from "../components/Projects/index.vue"
</script>

<style scoped>
.project-container {
  max-width: 1000px;
  margin: 70px auto;
  margin-bottom: 20px;
}

.intro-content {
  font-size: 1.2em;
  color: grey
}
</style>