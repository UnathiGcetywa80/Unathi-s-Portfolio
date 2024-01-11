<template>
    <div class="testimonial">
      <!-- <h1>This is the testimonial page</h1> -->
      <div class="card-container">
        <div
          class="card"
          v-for="testimonials in $store.state.testimonials"
          :key="testimonials.name"
          style="width: 18rem;"
        >
          <img src="" class="card-img-top" alt=""/>
          <div class="card-body">
            <h5 class="card-title">{{ testimonials.name }}</h5>
            <p class="card-text">{{ testimonials.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  export default {
    computed: {
      fetchTestData() {
        this.$store.dispatch('fetchTestData');
      }
    },
    mounted() {
      this.fetchTestData;
    }
  };
  </script>
  <style>
  .card-container {
    display: flex;
    /* flex-wrap: wrap;  */
  }
  .card {
    margin-right: 16px;
    margin-bottom: 16px;
  }
  .card img {
    width: 100%;
    height: auto;
  }
  </style>
  
  
  
  
  
  
  
  