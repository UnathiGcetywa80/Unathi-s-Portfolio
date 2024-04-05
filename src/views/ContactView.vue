<template>
  <div class="container">
    <div class="contact-form">
      <h1 class="display-2">Reach Me</h1>
      <form action="https://formspree.io/f/mleqpqgp" class="form" method="post" @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" v-model="formData.name" required class="form-control">
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" v-model="formData.email" required class="form-control">
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" name="message" v-model="formData.message" required class="form-control"></textarea>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
    <div class="personal-details">
      <h2>Personal Details</h2>
      <p><i class="fas fa-user"></i> <b>Name:</b> Unathi Gcetywa</p>
      <p><i class="fas fa-envelope"></i> <b>Email:</b> unathigcetywa80@gmail.com</p>
      <p><i class="fas fa-phone"></i> <b>Phone:</b> 069 861 2356</p>
      <p><i class="fas fa-map-marker-alt"></i> <b>Address:</b> Bellville South, Cape Town, South Africa</p>
      <p><img src="https://img.icons8.com/material-rounded/24/000000/github.png"/> <b>GitHub:</b> <a href="https://github.com/UnathiGcetywa80">unathigcetywa80</a></p>
      <p><img src="https://img.icons8.com/material-rounded/24/000000/linkedin.png"/> <b>LinkedIn:</b> <a href="https://www.linkedin.com/in/unathi-gcetywa-1406062ab/">Unathi Gcetywa</a></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      console.log('Form submitted with data:', this.formData);
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.contact-form {
  width: 50%;
  margin-right: 20px;
  font-family: 'Lobster', cursive;
}

.personal-details {
  width: 50%;
  font-family: 'Lobster', cursive;
}

.personal-details h2 {
  margin-bottom: 65px;
}

.form-group {
  margin-bottom: 50px;
}

.form-control {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.btn-primary {
  background-color: grey;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: grey;
}
</style>
