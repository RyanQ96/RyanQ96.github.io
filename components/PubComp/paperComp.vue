<template>
    <v-card color="transparent" variant="flat" class="card-container">
        <div class="pub-card">
            <div class="pub-img">
                <img :src="props.teaserURL" cover class="teaser"></img>
            </div>
            <div class="pub-detail">
                <div>
                    <h2>
                        <a class="title" :href="props.paperURL">{{ props.title }}</a>
                    </h2>
                    <div class="authors" v-html="authors"></div>
                    <div class="journal"> {{ props.journal }}</div>
                    <v-card-actions style="padding-top: 0">
                        <div v-if="props.githubURL">
                            <a :href="props.githubURL"><v-btn class="ma-2" icon="mdi-github"
                                    variant="text"></v-btn></a>
                            <v-tooltip activator="parent" location="bottom" class="action-tip">code</v-tooltip>
                        </div>
                        <div v-if="props.paperURL">
                            <a :href="props.githubURL" v-if="props.paperURL"><v-btn class="ma-2" icon="mdi-file-outline"
                                    variant="text"></v-btn></a>
                            <v-tooltip activator="parent" location="bottom" class="action-tip">paper</v-tooltip>
                        </div>
                    </v-card-actions>
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
        authors: String,
        year: String,
        paperURL: String,
        teaserURL: String,
        githubURL: {
            type: String,
            default: null,
        },
        journal: String,
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
}

.pub-img {
    width: 40%;
    padding-top: 10px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 30px;
}

.pub-detail {
    width: calc(60%);
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
    color: purple;
    font-weight: bold;
    font-size: 1.2em;
}

.title:hover {
    text-decoration: underline !important;
}

.authors {
    margin-top: 10px;
    color: grey;
    font-size: 1em;
    font: Crimson Pro, serif
}

.journal {
    font-style: italic;
    font-size: 1em;
}
</style>