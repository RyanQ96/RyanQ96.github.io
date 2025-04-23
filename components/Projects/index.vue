<template>
    <div>
        <div class="project-container">
            <h1 class="section-title" style="margin-left: 50px">Open-Source Projects</h1>
            <v-row style="margin-top: 20px">
                <ProjectChatFlare></ProjectChatFlare>
            </v-row>
        </div>
    </div>
</template>

<script setup lang="ts">
import ProjectChatFlare from './ProjectChatFlare.vue';
</script>

<style scoped>
.project-container {
    max-width: 900px;
    margin: 70px auto;
    margin-bottom: 20px;
}

.intro-content {
    font-size: 1.2em;
    color: grey
}
</style>