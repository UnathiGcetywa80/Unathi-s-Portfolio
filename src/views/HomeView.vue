<template>
  <div class="home">
   
    <div class="middle-container">
      <div class="blue-side">
        <img src="https://i.postimg.cc/ryYs0J7Y/IMG-5869.jpg" class="profile-image" alt="Profile Image">
        <h2>Unathi Gcetywa</h2>
        <p class="small-text">Fullstack</p>
        <div class="social-icons">
          <a href="https://github.com/UnathiGcetywa80" target="_blank"><img src="https://img.icons8.com/material-rounded/24/000000/github.png"/></a>
          <a href="https://www.linkedin.com/in/unathi-gcetywa-1406062ab/" target="_blank"><img src="https://img.icons8.com/material-rounded/24/000000/linkedin.png"/></a>
        </div>
      </div>
      
      <div class="white-side">
        <h1 class="lobster-text display-1" style="color: black;">Hello</h1>
        <p>Here's who I am & what I do</p>
        <router-link to="/resume" class="btn btn-pink">Resume</router-link>
        <router-link to="/project" class="btn btn-pink" style="margin-left: 10px;">Project</router-link>
        <p>I am a passionate web developer with expertise in HTML, CSS, JavaScript, and various frameworks such as Vue.js. I specialize in creating user-friendly, responsive web applications that meet the client's needs and exceed expectations.</p>
        <p>DOB: [19-01-2004]</p>
        <p>Location: [Bellville South, Cape Town, South Africa]</p>
        <p>Profession: Web Developer</p>
      </div>
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
  flex: 2;
  justify-content: space-between;
  align-items: center;
  background-image: linear-gradient(to right, pink 35%, white 1%);
  padding: -5px;
}

.middle-container {
  display: flex;
  padding: 90px;
}

.blue-side {
  margin-bottom: 50px;
  flex: 1.5;
  background-image: linear-gradient(to right, pink 140%, #f0f0f0 10%);
  padding: 10px;
  text-align: center;
  color: white;
}

.white-side {
  margin-bottom: 50px;
  flex: 2;
  background-color: #f0f0f0;
  padding: 20px;
}

.profile-image {
  max-width: 200px;
  height: auto;
  border-radius: 100%;
  border: 5px solid rgb(63, 63, 63);
}

p {
  color: black;
}

.small-text {
  font-size: 12px;
}

.btn-pink {
  background-color: pink;
  color: white;
  border: none;
}

.btn-pink:hover {
  background-color: darkpink;
}

h2 {
  color: black;
}
</style>
