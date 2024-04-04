<template>
  <div class="about-container">
    <h1>About Me</h1>
    <div class="about-content">
      <p>
        My name is Unathi Gcetywa, I'm 20 years of age. Born and breed in a small town called De Doorns, and I grew up in a city called George.
      </p>
      <p>
        From 2009 to 2013, I studied at HF Van Cutsem Combined School. Then, I changed schools in 2014 and went to study in George at Mzoxolo Primary School. In 2016, I went back to continue with my grades in De Doorns at Van Cutsem Combined School, where I finished my matric in 2022.
      </p>
      <p><b>Subjects:</b></p>
    
      <p><b>Experience:</b></p>
      <p>Since 2020, I have had an interest in computers, and I registered at Life Choices Academy to learn Web Development. I am dedicated to learning and improving my skills every day.</p>
    </div>
    <section>
      <a href="https://drive.google.com/file/d/1eiaud0CWz-UiJxpcM5bkQVZWINARCsTA/view?usp=sharing" class="card-link download-cv-btn">Download CV</a>
    </section>
  </div>
</template>

<script>
export default {
  // Component logic goes here
}
</script>

<style scoped>
.about-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  padding-bottom: 80px; /* Ensure space for the footer */
}

.about-content {
  font-size: 16px;
  line-height: 1.6;
  font-family: 'Lobster', cursive; /* Apply Lobster font */
}

h1 {
  font-size: 32px;
  margin-bottom: 20px;
  font-family: 'Lobster', cursive; /* Apply Lobster font */
}

strong {
  font-weight: bold;
}

.download-cv-btn {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;
  display: inline-block; /* Ensure the button stays in line with the text */
}

.download-cv-btn:hover {
  background-color: #0056b3;
}

/* Fixed footer styles */
.fixed-bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #343a40; /* Dark color for contrast */
  color: #ffffff; /* Light color for text contrast */
  padding: 10px;
  text-align: center;
}
</style>
