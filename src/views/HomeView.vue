<template>
  <div class="home">
    <div class="content">
      <h1 class="lobster-text display-1">Hey, Welcome to my portfolio</h1>
      <p>I am a passionate web developer with expertise in HTML, CSS, JavaScript, and various frameworks such as Vue.js. I specialize in creating user-friendly, responsive web applications that meet the client's needs and exceed expectations.</p>
      <p>DOB: [19-01-2004]</p>
      <p>Location: [Bellville South, Cape Town, South Africa]</p>
      <p>Profession: Web Developer</p>
    </div>
    <div class="image-container">
      <img src="https://i.postimg.cc/ryYs0J7Y/IMG-5869.jpg" class="profile-image" alt="Profile Image">
    </div>
  </div>
</template>

<script>
export default {
  // Your script goes here
};
</script>

<style scoped>
.home {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.content {
  width: 50%;
  padding: 20px;
  font-family: 'Lobster', cursive;
}

.profile-image {
  max-width: 450px; /* Adjust the max-width as needed */
  height: auto; /* Maintain aspect ratio */
  border-radius: 100%;
  border: 5px solid rgb(63, 63, 63);
}
</style>
