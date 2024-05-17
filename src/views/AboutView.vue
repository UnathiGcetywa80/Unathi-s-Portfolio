<template>
  <div class="about-container">
    <h1 class="display-2">About Me</h1>
    <div class="about-content">
      <p>
        Hey there, my name is Unathi Gcetywa, I'm 20 years of age. Born and bred in a small town called De Doorns, and I grew up in a city called George.
      </p>
      <p>
        I studied and did my grade 12 at HF Van Cutsem Combined School, where I was doing Commercial subjects.
      </p>
      <p>Since 2020, I have had an interest in computers, and I registered at Life Choices Academy to learn Web Development. I am dedicated to learning and improving my skills every day.</p>
      <p>I'm a passionate and dedicated web developer with a keen eye for detail and a love for clean, efficient code.I've worked on a range of projects, from simple static websites to complex web applications. My goal is to create engaging and user-friendly experiences that make a positive impact.</p>
      <div class="languages-box">
        <p><b class="lsng">Languages:</b></p>
        <ul class="languages-list">
          <li>English,Afrikaans,IsiXhosa</li>
        </ul>
      </div>
    </div>
    <!-- <section>
      <a href="https://drive.google.com/file/d/1eiaud0CWz-UiJxpcM5bkQVZWINARCsTA/view?usp=sharing" class="card-link download-cv-btn">View Resume</a>
    </section> -->
  </div>
</template>

<style>
/* Overall page styling */
body {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  color: #333;
}

.about-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff; /* Set background color to white */
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 30px;
  color: #333; /* Set heading color to black */
  font-family: Gelasio;
}

.about-content {
  text-align: left; /* Align paragraphs to the left */
}

.about-content p {
  line-height: 1.6;
  font-family: Gelasio;
  color: #333; /* Set paragraph text color to black */
}

.lsng {
  font-size: 30px;
  color: #333; /* Set text color of languages heading to black */
}

.languages-box {
  border: 1px solid #969595;
  padding: 5px;
  margin-top: 10px;
  text-align: left; /* Align languages box to the left */
  width: calc(100% - 40px); /* Full width minus padding of about-container */
  margin-left: auto; /* Auto margin for centering */
  margin-right: auto; /* Auto margin for centering */
}

.languages-list {
  color: #333; /* Set text color of languages list to black */
}

.card-link {
  display: inline-block;
  padding: 10px 20px;
  background-color: #7d7d7e;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.card-link:hover {
  background-color: grey;
}

</style>
