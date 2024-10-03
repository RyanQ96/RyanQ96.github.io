<template>
  <div id="content">
  </div>  
</template>

<script>
import Content from '@/assets/Blogs/first/fisher.html'
export default {
  data() {
    return {
      content: ""
    }
  }, 
  mounted() {
    document.querySelector('#content').innerHTML = Content
  }
};
</script>

<style>
#content {
  max-width: 900px;
  margin: 0 auto;
}
</style>