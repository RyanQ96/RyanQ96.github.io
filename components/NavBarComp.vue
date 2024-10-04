<template>
  <div>
    <div>
      <v-app-bar :elevation="0" class="app-bar">
        <div class="bar-container">
          <router-link to="/">
            <v-toolbar-title class="nav-title">Rui Qiu
            </v-toolbar-title>
          </router-link>
          &nbsp;
          <UAvatar src="/Rui Official.jpg" size="xl">
          </UAvatar>

          <v-spacer></v-spacer>

          <router-link to="/blog">
            <v-toolbar-title class="nav-title title-mini">Blog</v-toolbar-title>
          </router-link>
          <router-link to="/pub">
            <v-toolbar-title class="nav-title title-mini">Publication</v-toolbar-title>
          </router-link>
          <router-link to="/portfolio">
            <v-toolbar-title class="nav-title title-mini">Project</v-toolbar-title>
          </router-link>
          <router-link to="/cv">
            <v-toolbar-title class="nav-title title-mini">CV</v-toolbar-title>
          </router-link>
        </div>
      </v-app-bar>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>
.bar-container {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  transform: translateY(50%);
}

.app-bar .v-toolbar__content{
  overflow: visible;
}


.nav-title {
  font-size: 1.5em !important;
  font-weight: 700 !important;
  font-family: -apple-system, BlinkMacSystemFont, segoe ui, Roboto, Oxygen, Ubuntu, Cantarell, open sans, helvetica neue, sans-serif;
  text-decoration: none !important;
  color: black;
}

.title-mini {
  font-size: 1em !important;
  margin-right: 10px;
  color: black;
}

a {
  text-decoration: none !important;
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