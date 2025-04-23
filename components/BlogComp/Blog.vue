<template>
    <v-card color="transparent" class="card-container" :href="`/blogs/${props.id}`">
        <div class="pub-card">
            <div class="pub-detail">
                <div>
                    <h2>
                        <a class="title" :href="`/blogs/${props.id}`">{{ props.title }}</a>
                    </h2>
                    <div class="limited-content">
                        <p>{{props.abstract}}</p>
                    </div>
                    <div style="display: flex">
                        <div class="authors">Date: {{props.date}} | </div> &nbsp;
                        <div class="authors" >Author: {{props.authors}}</div> 
                    </div>
                </div>
            </div>
        </div>
    </v-card>
</template>

<script setup lang="ts">
import { computed } from "vue";
const props = defineProps(
    {
        title: String,
        id: String,
        date: String,
        tags: Array, 
        abstract: String,
        authors: String, 
    }
)

const authors = computed(() => {
    return props.authors?.replace("Rui Qiu", "<a style='font-weight: bold; color:black'>Rui Qiu</a>")
})

const show = true; 
</script>

<style scoped>
.pub-card {
    display: flex;
    justify-content: space-between;
    padding: 20px; 
    box-shadow: 0px 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 1px 1px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 3px 0px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12))!important;
}

.pub-detail {
    width: calc(100%);
    box-sizing: border-box;
    display: flex;
    align-items: center;
}

.teaser {
    box-shadow: 3px 3px 6px #888 !important;
    border-radius: 5% !important;
    object-fit: cover!important;
}

.author-myself {
    font-weight: bold;
    color: black !important;
}

.title {
    color:purple;
    font-weight: bold;
    font-size: 1.7em;
    font-family: 'EB Garamond'!important; 
}

.title:hover {
    text-decoration: underline !important;
}

.authors {
    margin-top: 10px;
    color: grey;
    font-size: 1em;
    font: Crimson Pro, serif;
    display: inline-block
}

.journal {
    font-style: italic;
    font-size: 1em;
}

.limited-content {
    margin-top: 10px;
    display: -webkit-box;
    -webkit-line-clamp: 3; 
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis; 
    
    text-align:left; 
    line-height: 1.6; 
    color: black;
}
</style>