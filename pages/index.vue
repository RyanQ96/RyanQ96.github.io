<template>
  <div>
    <h1>Events</h1>
    <EventCard
      v-for="(event, index) in events"
      :key="index"
      :event="event"
      :data-index="index"
    />
    <div v-if="!events.length">
      <span>Unable to fetch Event Data now, try it later</span>
    </div>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard'

export default {
  components: {
    EventCard,
  },
  asyncData(context) {
    return context.$axios
      .get('http://localhost:8888/events')
      .then((response) => {
        return {
          events: response.data,
        }
      })
      .catch((e) => {
        // context.error({
        //   statusCode: 503,
        //   message: 'Unable to fetch events at this time. Please try again',
        // })
        return {
          events: [
            {
              id: 1,
              time: '12-2-2020', //
              attendees: ['Rui Qiu'],
            },
          ],
        }
      })
  },
  head() {
    // property used by vue-meta
    return {
      title: 'Event Listing', // defines the title for this page
    }
  },
}
</script>
