<template>
  <div class="container">
    <div class="timeline">
      <h1 class="display-2">References</h1>
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
.timeline-subtitle,
.timeline-text,
.timeline-title {
  color: #000; /* Set text color to black */
  /* font-family: 'Lobster', cursive; */
}

.timeline-title {
  font-size: x-large;
  margin-bottom: 0.5rem;
}

.timeline-subtitle,
.timeline-text {
  font-size: large;
}
.timeline-image {
  width: 100px; /* Set the width of the image */
  height: 100px; /* Set the height of the image */
  border-radius: 50%; /* Make the image circular */
  object-fit: cover; /* Maintain aspect ratio */
}
.display-2{
  color: #000;

}
</style>
