<template>
  <div>
    <div>
      <v-app-bar :elevation="0" class="app-bar">
        <div class="bar-container">
          <router-link to="/">
            <div class="name-avatar-container">
              <UAvatar src="/Rui Official.jpg" size="3xl" class="avatar-sf">
              </UAvatar>
              <v-toolbar-title class="nav-title">Rui (Ray) Qiu</v-toolbar-title>
            </div>
          </router-link>
          &nbsp;

          <v-spacer></v-spacer>
          <div class="nav-links">
            <router-link to="/pub">
              <v-toolbar-title class="nav-title title-mini">Publication</v-toolbar-title>
            </router-link>
            <router-link to="/blog">
              <v-toolbar-title class="nav-title title-mini">Blog</v-toolbar-title>
            </router-link>
            <router-link to="/projects">
              <v-toolbar-title class="nav-title title-mini">Project</v-toolbar-title>
            </router-link>
            <a href="/Rui_Qiu_CV_latest.pdf" target="_blank" rel="noopener noreferrer">
              <v-toolbar-title class="nav-title title-mini">CV</v-toolbar-title>
            </a>
          </div>
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
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  align-items: center;
}

.name-avatar-container {
  display: flex;
  align-items: center;
}

.nav-links {
  display: flex;
  align-items: center;
}

@media screen and (max-width: 530px) {
  .nav-links {
    display: none;
  }
  
  .bar-container {
    justify-content: center;
  }
  
  .v-spacer {
    display: none;
  }

  .name-avatar-container {
    flex-direction: column;
    align-items: center;
  }

  .nav-title {
    margin-top: 10px;
    text-align: center;
  }
}

.app-bar .v-toolbar__content{
  overflow: visible;
  height: 150px!important; 
  padding-left: 20px; 
  padding-right: 20px;
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

.avatar-sf {
  transform: scaleX(0.95);
}
</style>