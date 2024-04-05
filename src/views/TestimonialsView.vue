<template>
  <div class="container">
    <div class="timeline">
      <div v-for="testimonial in testimonials" :key="testimonial.id" class="timeline-item">
        <div class="timeline-content">
          <div class="timeline-header">
            <img :src="testimonial.imageURL" class="timeline-image" />
          </div>
          <div class="timeline-body">
            <h5 class="timeline-title">{{ testimonial.name }}</h5>
            <p class="timeline-subtitle">{{ testimonial.subject }}</p>
            <p class="timeline-text">{{ testimonial.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    testimonials() {
      return this.$store.state.Testimonials;
    },
  },
  mounted() {
    this.$store.dispatch("fetchTestimonials");
  },
};
</script>

<style>
/* Testimonials.css */

.timeline {
  position: relative;
  margin-top: 20px;
}

.timeline-item {
  display: flex;
  padding: 20px 0;
}

.timeline-content {
  display: flex;
  width: 100%;
}

.timeline-header {
  flex: 0 0 auto;
  margin-right: 20px;
}

.timeline-image {
  width: 100px; /* Adjust the width of the image */
  height: auto;
  border-radius: 50%;
}

.timeline-body {
  flex: 1 1 auto;
}

.timeline-title {
  font-size: x-large;
  margin-bottom: 0.5rem;
  font-family: 'Lobster', cursive;
}

.timeline-subtitle,
.timeline-text {
  color: #eceaea; /* Black text color */
  font-family: 'Lobster', cursive;
  font-size: large;
}

@media (max-width: 500px) {
  .timeline-image {
    width: 50px; /* Adjust the width of the image for smaller screens */
  }
}
</style>
