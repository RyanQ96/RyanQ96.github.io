<template>
    <div id="blog-container" v-html="content">
    </div>
</template>

<script setup lang="ts">
import content from '../../public/Blogs/first/fisher.html?raw';
import { useRoute } from "nuxt/app";


</script>

<style>
#blog-container {
    max-width: 900px;
    margin: 0 auto;
}
</style>