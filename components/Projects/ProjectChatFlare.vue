<template>
    <v-col cols="12" md="5">
        <v-card class="mx-auto" variant="flat">
            <v-img class="project-card-img" height="200px" src="/projects/chatflare.png" cover></v-img>

            <v-card-title style="font-weight:bold">
                Chatflare <a href="https://github.com/RyanQ96/ChatFlare/tree/main"><v-btn style="width: 0px; transform: translate(0, -5%)" class="ma-2" color="red-lighten-2" icon="mdi-open-in-new"
                        variant="text"></v-btn></a>
            </v-card-title>

            <v-card-text>
                ChatFlare is a Lightning framework for building and prototying Large Language Models (LLM) applications
                with ease and efficiency. Inspired by the powerful usage of Langchain but with much less abstraction,
                ChatFlare aims to provide a streamlined and modular approach to working with LLM chains.
            </v-card-text>

            <v-space></v-space>
            <v-card-subtitle style="font-size: 1rem">
                May 10, 2024
            </v-card-subtitle>
        </v-card>
    </v-col>
</template>

<script setup lang="ts">

</script>

<style scoped>
.project-card-img {
    border-radius: 10px;
    transform: scale(0.9);
}
</style>