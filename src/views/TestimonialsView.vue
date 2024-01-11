<!-- <template>
    <div class="testimonials">
      <h1>This is an testimonial page</h1>
    </div>
  </template>
   -->

   <template>
    <div class="testimonials">
      <h1>This is a testimonial page</h1>
  
      <div class="card" v-for="(testimonial, index) in testimonials" :key="index">
        <div class="card-body">
          <p class="card-text">{{ testimonial.text }}</p>
          <p class="card-author"><strong>{{ testimonial.author }}</strong></p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        testimonials: [
          {
            text: "I had an amazing experience with this service. The team is highly professional and responsive.",

            author: "Thimna Alam"
          },
          {
            text: "The product exceeded my expectations. I would highly recommend it to others.",
            author: "Vuyiseka Njovane"
          },
          {
            text: "The product exceeded my expectations. I would highly recommend it to others.",
            author: "Jane Smith"
          },
          {
            text: "The product exceeded my expectations. I would highly recommend it to others.",
            author: "Jane Smith"
          },
          
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .testimonials {
    display: table-row-group;
    flex-wrap: wrap;
  }
  
  .card {
    width: 18rem;
    margin: 1rem;
  }
  
  .card-author {
    margin-top: 1rem;
  }
  </style>
  