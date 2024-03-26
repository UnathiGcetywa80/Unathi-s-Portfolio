<template>
  <div class="home display-2">
    <div class="content">
      <p class="display-2" id="content">{{ welcomeText }}</p>
      <h1 class="lobster-text" id="body"></h1>
    </div>
    <div class="image-container">
      <img src="https://i.imgur.com/dMsh8Ug.jpg" class="profile-image" alt="Profile Image">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      welcomeText: "Welcome to my portfolio"
    };
  },
  mounted() {
    // Start retyping the welcome text after a delay
    setTimeout(() => {
      this.welcomeText = "";
      this.typeWelcomeText();
    }, 2000); // Adjust delay as needed
  },
  methods: {
    typeWelcomeText() {
      const originalText = "Welcome to my portfolio";
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex < originalText.length) {
          this.welcomeText += originalText.charAt(currentIndex);
          currentIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, 100); // Adjust typing speed as needed
    }
  }
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
}

#content {
  font-family: 'Lobster', cursive;
  font-size: 2em;
  font-weight: bold;
  color: rgb(252, 251, 252); /* Set text color to white */
}

.image-container {
  width: 50%;
  height: 80vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.profile-image {
  width: auto; /* Maintain original width */
  height: 100%; /* Fill the container height */
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid rgb(253, 35, 166); /* Add border to create the cubed shape effect */
}
</style>
