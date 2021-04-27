<template>
  <div>
    <h1>Create an Event</h1>
  </div>
</template>
<script>
export default {
  head() {
    // property used by vue-meta
    return {
      title: 'Create an Event', // defines the title for this page
      meta: [
        {
          hid: 'description', // defines the description for this page
          name: 'description', //
          content: 'You can create a new event in your neighborhood',
        },
      ],
    }
  },
}
</script>
