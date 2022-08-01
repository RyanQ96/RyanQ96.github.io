<template>
  <div>
    <v-app-bar :style="{
      'background-color': 'transparent',
      'box-shadow': 'none',
      height: '70px',
      'max-width': '1000px',
      margin: '0 auto',
    }">
      <router-link to="/">
        <v-toolbar-title class="nav-title">Rui'Log 
        </v-toolbar-title>
      </router-link>
      &nbsp;
      <v-avatar>
            <img src="../assets/Rui Official.jpg" alt="John">
      </v-avatar>

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
    </v-app-bar>
  </div>
</template>

<script>
export default {
  methods: {
    toroot() {
      this.$route.path.name === 'home'
        ? -1
        : this.$router.push('/')
    }
  }
};
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