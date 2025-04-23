<template>
    <div class="news-item">
        <div class="news-time">{{ time }}</div>
        <div class="news-content" v-html="content"></div>
    </div>
</template>

<script setup lang="ts">
interface Props {
    time: string;
    content: string;
}

defineProps<Props>();
</script>

<style scoped>
.news-item {
    margin-top: 10px;
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
}

.news-time {
    color: #504d4d;
    font-size: 1.1em;
    min-width: 100px;
    text-align: left;
    font-family: 'Raleway', sans-serif;
}

.news-content {
    flex: 1;
    font-size: 1.2em;
}

@media screen and (max-width: 530px) {
    .news-item {
        flex-direction: column;
        gap: 5px;
    }

    .news-time {
        text-align: left;
        min-width: auto;
    }
}
</style>
