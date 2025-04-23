<template>
    <div class="container">
        <h1 class="section-title" style="margin-left: 50px">Blogs</h1>
        <div class="blog-list">
            <BlogComp 
                v-for="item in blogData"  
                :key="item.id"
                :id="item.id"
                :title="item.title"
                :authors="item.authors"
                :date="item.date"
                :abstract="item.abstract"
                :tags="item.tags"
                >
            </BlogComp>
        </div>
        
    </div>
</template>

<script setup lang="ts">
import type {BlogPost} from "./types"
import BlogComp from "./BlogComp.vue"
import BlogData from '../../public/assets/Blogs/index.json'

const blogData = BlogData as BlogPost[];
console.log(blogData)
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

.blog-list {
    margin-top: 20px;
}

</style>