<template>
  <div style="width: 80%; margin: 0 auto">
    <h1>Event #{{ id }}</h1>
    <div id="blog"></div>
  </div>
</template>
<script>
import Blog from '@/components/Blog_Post.html'
// import hljs from 'highlight.js'
// import tm from 'markdown-it-texmath'
// import md from 'markdown-it'
// import katex from 'katex'
export default {
  components: {
    // Blog,
  },
  data() {
    return {
      blog: Blog,
    }
  },
  head() {
    // property used by vue-meta
    return {
      title: `Event #${this.id}`, // defines the title for this page
      meta: [
        {
          hid: 'description', // defines the description for this page
          name: 'description', //
          content: `What you need to know about Event #${this.id}`,
        },
      ],
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    },
  },
  mounted() {
    // console.log(hljs)
    // console.log(tm)
    // console.log(md)
    // const mmd = md({
    //   highlight: function (str, lang) {
    //     if (lang && hljs.getLanguage(lang)) {
    //       try {
    //         return hljs.highlight(lang, str).value
    //       } catch (__) {}
    //     }
    //     return '' // use external default escaping
    //   },
    // }).use(tm, {
    //   engine: katex,
    //   delimiters: 'dollars',
    //   katexOptions: { macros: { '\\RR': '\\mathbb{R}' } },
    // })
    // console.log('!!!')
    // console.log(mmd.render(Blog))
    // document.querySelector('#blog').innerHTML = mmd.render(Blog)
    document.querySelector('#blog').innerHTML = Blog
  },
}
</script>
