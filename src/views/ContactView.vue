<template>
  <div class="container">
    <div class="contact-form">
      <h1>Reach Me</h1>
      <form action="https://formspree.io/f/xjvnkgnq" class="form" method="post" @submit.prevent="submitForm">
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
      <p><b>Name:</b> Unathi Gcetywa</p>
      <p><b>Email:</b> unathigcetywa80@gmail.com</p>
      <p><b>Phone:</b> 069 861 2356</p>
      <p><b>Address:</b> Bellville South , Cape Town, South Africa</p>
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
  background-color: #fa32d5;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: #f019be;
}
</style>
