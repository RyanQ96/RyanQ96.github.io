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
useHead({
  link: [{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=EB Garamond' }]
})
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

body {
  font-family: "Open_Sans variant0", Tofu, sans-serif;
}

.main-container{
  padding-top: 100px!important;
}


.action-tip div {
  transform: translate(0, -90%); 
  color: grey!important; 
  background-color: white!important; 
}

.section-title {
  font-size: 2em;
  color: #043361;
  font-weight: 700;
  font-family: 'EB Garamond'!important; 
}
</style>