<template>
    <div id="news">
        <h1 class="section-title">News</h1>
        <NewsItem v-for="item in newsData" :key="item.time" :time="item.time" :content="item.content" />
    </div>
</template>

<script setup>
import NewsItem from './NewsItem.vue';
import newsData from '../../public/newsdata/index.json';
</script>

<style scoped>
#news {
    max-width: 800px !important;
    margin: 70px auto;
    margin-bottom: 20px;
}

</style>