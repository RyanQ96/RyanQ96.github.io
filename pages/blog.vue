<template>
    <div id="content" v-html="Content">
    </div>
</template>

<script setup lang="ts">
import Content from '@/public/assets/Blogs/first/fisher.html?raw';
</script>

<style>
#content {
    max-width: 900px;
    margin: 0 auto;
}
</style>