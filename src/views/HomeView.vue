<template>
  <div class="home display-2">
    <p> Hi, I'm Unathi Gcetywa</p>
    <h1 class="container display-1" id="body"></h1>
    <div class="links">
      <a href="https://www.linkedin.com/mynetwork/" target="_blank">
        <img src="https://i.postimg.cc/Gm83MFBJ/linked.jpg" alt="LinkedIn" class="social-icon">
      </a>
      <a href="https://github.com/UnathiGcetywa80/Unathi-s-Portfolio" target="_blank">
        <img src="https://i.postimg.cc/x1cGt4yx/github.jpg" alt="GitHub" class="social-icon">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const textElement = document.getElementById('body');
    const originalText = "An aspiring web developer";
    let currentIndex = 0;
    function typeText() {
      if (currentIndex < originalText.length) {
        textElement.textContent += originalText.charAt(currentIndex);
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }
    const typingInterval = setInterval(typeText, 100);
  },
};
</script>

<style scoped>
body {
  width: 100vw;
  height: 100vh;
  background-image: url('https://i.postimg.cc/PxfjZCs3/bgrd-img3.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  text-emphasis-color: pink;
}
.container {
  font-size: 2em; 
  font-weight: bold;
}
.profile-image {
  width: 200px; /* Adjust size as needed */
  height: 200px; /* Adjust size as needed */
  border-radius: 50%;
  margin-bottom: 20px;
}
.links {
  margin-top: 20px;
}
.links a {
  margin-right: 10px;
}
.social-icon {
  width: 30px; /* Adjust size as needed */
  height: 30px; /* Adjust size as needed */
}
.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  z-index: 999;
  display: none;
}
</style>
