<template>
    <div class="container">
        <h1 class="section-title">Publications</h1>
        <div class="pub-list">
            <paperComp 
                v-for="item in pubData"  
                :key="item.title"
                :title="item.title"
                :authors="item.authors"
                :githubURL="item.githubURL"
                :paperURL="item.paperURL"
                :year="item.year"
                :journal="item.journal"
                :teaserURL="item.teaserURL"
                >
            </paperComp>
        </div>
        
    </div>
</template>

<script setup lang="ts">
import type {Publication} from "./types"
import paperComp from "./paperComp.vue"
import jsonData from '../../public/pubdata/index.json'

const pubData = jsonData as Publication[];
</script>

<style>
.container {
    max-width: 900px;
    margin: 70px auto;
    margin-bottom: 20px;
}

.section-title {
    font-size: 2em;
    color: #043361;
    font-weight: 700;
}

.pub-list {
    margin-top: 20px;
}

</style>