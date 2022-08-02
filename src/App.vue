<template>
  <div>
    <v-app>
      <NavBarComp />
      <v-main>
        <router-view></router-view>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import BlogPostComp from "@/components/BlogPostComp.vue";
import NavBarComp from "./components/NavBarComp.vue";
import 'katex/dist/katex.min.css'
export default {
  name: 'App',

  data: () => ({
    //
  }),

  components: {
    BlogPostComp,
    NavBarComp
  }
};
</script>

<style>
body {
  margin: 2em auto; 
}
@import "../node_modules/katex/dist/katex.min.css";
</style>
