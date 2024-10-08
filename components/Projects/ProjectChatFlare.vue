<template>
    <v-col cols="12" md="5">
        <v-card class="mx-auto" variant="flat">
            <img class="project-card-img" src="/projects/chatflare.png"></img>

            <v-card-title style="font-weight:bold">
                Chatflare <a href="https://github.com/RyanQ96/ChatFlare/tree/main"><v-btn
                        style="width: 0px; transform: translate(-50%, -5%)" class="ma-2" color="red-lighten-2"
                        variant="text">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h14v-7h2v7q0 .825-.587 1.413T19 21zm4.7-5.3l-1.4-1.4L17.6 5H14V3h7v7h-2V6.4z" />
                        </svg>
                    </v-btn></a>
            </v-card-title>

            <v-card-text>
                ChatFlare is a Lightning framework for building and prototying Large Language Models (LLM) applications
                with ease and efficiency. Inspired by the powerful usage of Langchain but with much less abstraction,
                ChatFlare aims to provide a streamlined and modular approach to working with LLM chains.
            </v-card-text>

            <v-space></v-space>
            <v-card-subtitle>
                <span style="font-size: 1rem; ">May 10, 2024</span>
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
    width: 100%;
    height: 200px;
    object-fit: cover;
}
</style>