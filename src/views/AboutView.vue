<template>
  <div class="container">
    <div class="box">
      <div class="image">
        <h1 class="heading">Who is Unathi?</h1>
        <img src="https://i.imgur.com/dMsh8Ug.jpg" width="400px" height="500px" alt="">
      </div>
      <div class="text" id="about-me">
        <p><b>Date of Birth:</b> January 19, 2004</p>
        <p><b>Introduction:</b> My name is Unathi Gcetywa, i'm 20 years of age.Born and breed in a small town called De Doorns and I grew up in a city called George,
          .</p>
        <p><b>Education:</b> From 2009 to 2013 i studied in HF Van Cutsem Combined School, i then changed schools in 2014 I went to study in George at Mzoxolo Primary School.In 2016 i went back to continue with my grades in De Doorns at Van Cutsem Combined School,where I finished my  matric in 2022</p>
        <P><b>Subjects:</b>Accounting,
                           Economics,
                          Business Studies,
                          Maths Literacy,
                          English(FAL),
                          IsiXhosa(Home language)</P>
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
  border: 1px solid #fa1b99;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(193, 192, 192, 0.1);
}
.heading{
  color: white; /* Set text color to white */
  font-family: 'Lobster', cursive;
  
}

.image {
  text-align: center;
}

.text {
  margin-left: 20px;
  color: white; /* Set text color to white */
  font-family: 'Lobster', cursive; /* Use Lobster font */
}

.card-link {
  display: inline-block;
  padding: 10px 20px;
  background-color: #818081;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.card-link:hover {
  background-color: #f51ea6;
}
</style>
