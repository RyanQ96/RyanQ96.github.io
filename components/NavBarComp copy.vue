<template>
  <div>
    <v-app-bar :style="{
      'background-color': 'transparent',
      'box-shadow': 'none',
      height: '70px',
      'max-width': '1000px',
      margin: '0 auto',
    }">
      <NuxtLink to="/">
        <v-toolbar-title class="nav-title">Rui'Log 
        </v-toolbar-title>
      </NuxtLink>
      &nbsp;
      <v-avatar image="../assets/Rui Official.jpg" alt="John" size="40">
      </v-avatar>

      <v-spacer></v-spacer>

      <NuxtLink to="/blog">
        <v-toolbar-title class="nav-title title-mini">Blog</v-toolbar-title>
      </NuxtLink>
      <NuxtLink to="/pub">
        <v-toolbar-title class="nav-title title-mini">Publication</v-toolbar-title>
      </NuxtLink>
      <NuxtLink to="/portfolio">
        <v-toolbar-title class="nav-title title-mini">Project</v-toolbar-title>
      </NuxtLink>
      <NuxtLink to="/cv">
        <v-toolbar-title class="nav-title title-mini">CV</v-toolbar-title>
      </NuxtLink>
    </v-app-bar>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>
.nav-title {
  font-size: 1.5em;
  font-weight: 700;
  font-family: -apple-system, BlinkMacSystemFont, segoe ui, Roboto, Oxygen, Ubuntu, Cantarell, open sans, helvetica neue, sans-serif;
  text-decoration: none !important;
  color: black;
}

.title-mini {
  font-size: 1em;
  margin-right: 10px;
  color: black;
}

a {
  text-decoration: none!important;
}

.title-mini:hover {
  cursor: pointer;
  color: #39b982;
}

.nav-title:hover {
  cursor: pointer;
  color: #39b982;
}

.router-link-exact-active {
  text-decoration: underline !important;
}

</style>