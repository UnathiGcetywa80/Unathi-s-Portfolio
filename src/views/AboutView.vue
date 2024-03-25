<template>
  <div class="container">
    <div class="box">
      <div class="image">
        <h1>Who am I?</h1>
        <img src="https://i.imgur.com/dMsh8Ug.jpg" width="400px" height="500px" alt="">
      </div>
      <div class="text" id="about-me">
        <p><b>Name:</b> Unathi Gcetywa</p>
        <p><b>Date of Birth:</b> January 19, 2004</p>
        <p><b>Introduction:</b> My name is Unathi Gcetywa, 20 years old and I am a student at Life Choices Academy studying Coding.</p>
        <p><b>Education:</b> I matriculated in 2022 from HF VAN CUTSEM HIGH SCHOOL.</p>
        <p><b>Experience:</b> Since 2020, I have had an interest in computers, and I registered at Life Choices Academy to learn Web Development. I am dedicated to learning and improving my skills every day.</p>
        <section>
          <a href="https://drive.google.com/file/d/10C18BdxflCluGyHwMYG7yopcbqPTq6Tp/view?usp=sharing" class="card-link">Download CV</a>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.box {
  display: flex;
  align-items: center;
  padding: 20px;
  border: 1px solid #9f9e9e;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(193, 192, 192, 0.1);
}

.image {
  text-align: center;
}

.text {
  margin-left: 20px;
}

.card-link {
  display: inline-block;
  padding: 10px 20px;
  background-color: #b3037b;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.card-link:hover {
  background-color: #f51ea6;
}
</style>



