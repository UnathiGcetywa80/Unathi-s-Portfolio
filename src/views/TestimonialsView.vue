<template>
  <div class="container"><div class="row">
  <div class="col-4" v-for="Testimonial in Testimonials" :key="Testimonial.id">
    <div class="card">
      <div class="card-front">
        <img :src="Testimonial.imageURL" class="card-img-top" />
      </div>
      <div class="card-back">
        <div class="card-body">
          <h5 class="card-title">{{ Testimonial.name }}</h5>
          <p class="card-subtitle">{{ Testimonial.subject }}</p>
          <p class="card-text">{{ Testimonial.description }}</p>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</template>
  
  <script>
      export default {
          computed: {
            Testimonials() {
              return this.$store.state.Testimonials;
            },
          },
          mounted() {
            this.$store.dispatch("fetchTestimonials");
          },
        };
  </script>
  
  <style  scoped>
  .row{
    margin-left: 70px;
  }
  .card {
    display: grid !important;
    grid-template-columns: repeat (3, 1fr );
    justify-content: center;
    margin:20px 30px;
  }
  .card-img-top {
    height: 200px;
    object-fit: cover;
    object-position: top;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  
  
  
  .card-title
   {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  .card-title,
.card-subtitle,
.card-text {
  color: #0e0d0d; /* White text color */
}
  
  @media (width < 500px){
    .row{
      margin-left: 0;
      padding: 0;
    }
    .card{
      margin: 0;
      padding: 0;
    }
    .container{
      padding: 0;
    }
  }
  </style>
  