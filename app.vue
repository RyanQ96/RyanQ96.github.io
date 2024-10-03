<template>
  <div>
    <v-app>
      <NavBarComp />
      <v-main class="main-container">
        <NuxtPage />
      </v-main>
    </v-app>
  </div>
</template>

<script setup lang="ts">
import NavBarComp from './components/NavBarComp.vue'
useSeoMeta({
  title: "Rui Qiu's personal website",
  ogTitle: 'My Amazing Site',
  description: "Hi, this is Rui. I'm a Ph. D. student in Ohio State University. My research interests are broad range of Visual Analytics Science and Technologies (VAST). I'm documenting my learning notes and open source projects here in this blog. Besides, I'm a huge fan of VueJS, Vite and Observablehq.",
  ogDescription: "Hi, this is Rui. I'm a Ph. D. student in Ohio State University. My research interests are broad range of Visual Analytics Science and Technologies (VAST). I'm documenting my learning notes and open source projects here in this blog. Besides, I'm a huge fan of VueJS, Vite and Observablehq.",
})
</script>

<style>
@import "./node_modules/katex/dist/katex.min.css";
.main-container{
  padding-top: 100px!important;
}
</style>