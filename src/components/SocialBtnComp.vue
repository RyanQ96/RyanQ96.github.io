<template>
  <div>
    <a :href="href">
      <v-icon>
        {{icon}}
      </v-icon>
    </a>
  </div>
</template>

<script>
export default {
  props: ['href', 'icon'], 
  methods: {
    jump() {
      window.location.href = this.href
    }
  }
}
</script>

<style scoped>
</style>