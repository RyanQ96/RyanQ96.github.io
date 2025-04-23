<template>
    <v-card color="transparent" variant="flat" class="card-container">
        <div class="pub-card">
            <div class="pub-img">
                <img :src="props.teaserURL" cover class="teaser"></img>
            </div>
            <div class="pub-detail">
                <div>
                    <a :href="props.award?.url" target="_blank" rel="noopener">
                        <div v-if="props.award" class="award-tag">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m7.171 12.906l-2.153 6.411l2.672-.89l1.568 2.34l1.825-5.183m5.73-2.678l2.154 6.411l-2.673-.89l-1.568 2.34l-1.825-5.183M9.165 4.3c.58.068 1.153-.17 1.515-.628a1.68 1.68 0 0 1 2.64 0a1.68 1.68 0 0 0 1.515.628a1.68 1.68 0 0 1 1.866 1.866c-.068.58.17 1.154.628 1.516a1.68 1.68 0 0 1 0 2.639a1.68 1.68 0 0 0-.628 1.515a1.68 1.68 0 0 1-1.866 1.866a1.68 1.68 0 0 0-1.516.628a1.68 1.68 0 0 1-2.639 0a1.68 1.68 0 0 0-1.515-.628a1.68 1.68 0 0 1-1.867-1.866a1.68 1.68 0 0 0-.627-1.515a1.68 1.68 0 0 1 0-2.64c.458-.361.696-.935.627-1.515A1.68 1.68 0 0 1 9.165 4.3M14 9a2 2 0 1 1-4 0a2 2 0 0 1 4 0" />
                            </svg>
                            <span>{{ props.award.name }}</span>
                        </div>
                    </a>
                    <h2>
                        <a class="title" :href="props.paperURL">{{ props.title }}</a>
                    </h2>
                    <div class="authors" v-html="authors"></div>
                    <div class="journal"> {{ props.journal }}</div>
                    <v-card-actions style="padding-top: 0">
                        <div v-if="props.paperURL" style="display: inline-block" class="paper-action-btn">
                            <UTooltip text="paper" :popper="{ offsetDistance: -5}">
                                <a :href="props.paperURL" v-if="props.paperURL">
                                    <v-btn class="ma-2" variant="text">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"
                                            viewBox="0 0 24 24">
                                            <path fill="currentColor"
                                                d="M9 12.5h1v-2h1q.425 0 .713-.288T12 9.5v-1q0-.425-.288-.712T11 7.5H9zm1-3v-1h1v1zm3 3h2q.425 0 .713-.288T16 11.5v-3q0-.425-.288-.712T15 7.5h-2zm1-1v-3h1v3zm3 1h1v-2h1v-1h-1v-1h1v-1h-2zM8 18q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm-4 4q-.825 0-1.412-.587T2 20V6h2v14h14v2z" />
                                        </svg>
                                    </v-btn>
                                </a>
                            </UTooltip>
                        </div>
                        <div v-if="props.githubURL" style="display: inline-block" class="paper-action-btn">
                            <UTooltip text="code" :popper="{ offsetDistance: -5}">
                                <a :href="props.githubURL">
                                    <v-btn class="ma-2" variant="text">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"
                                            viewBox="0 0 24 24">
                                            <path fill="currentColor"
                                                d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" />
                                        </svg>
                                    </v-btn>
                                </a>
                            </UTooltip>
                        </div>
                        <div v-if="props.demoURL" style="display: inline-block" class="paper-action-btn">
                            <UTooltip text="prototype" :popper="{ offsetDistance: -5}">
                                <a :href="props.demoURL" v-if="props.demoURL">
                                    <v-btn class="ma-2" variant="text">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"
                                            viewBox="0 0 32 32">
                                            <path fill="currentColor" d="M20 2v12l10-6z" />
                                            <path fill="currentColor"
                                                d="M28 14v8H4V6h10V4H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8v4H8v2h16v-2h-4v-4h8a2 2 0 0 0 2-2v-8zM18 28h-4v-4h4z" />
                                        </svg>
                                    </v-btn></a>
                            </UTooltip>
                        </div>
                    </v-card-actions>
                </div>
            </div>
        </div>
    </v-card>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
const props = defineProps(
    {
        award: {
            type: Object,
            required: false,
        },
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
        demoURL: String,
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
    border-radius: 2% !important;
    object-fit: cover !important;
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

.paper-action-btn {
    padding: 0 !important;
    margin: 0 !important;
    width: 52px !important;
}

.award-tag {
    display: inline-flex;
    align-items: center;
    margin-bottom: 10px;
    font-family: 'Zilla Slab', serif;
    font-weight: bold;
    color: rgb(209, 142, 6);
    border: 1px solid rgb(209, 142, 6);
    padding-right: 5px;
    border-radius: 5px;
    font-size: 0.8em;
}

.award-tag:hover {
    background-color: rgb(209, 142, 6);
    color: white;
    transition: background-color 0.3s ease;
}
</style>