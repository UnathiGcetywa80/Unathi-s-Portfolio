<template>
  <div class="container">
    <!-- Education Section -->
    <div class="section-box">
      <h2 class="section-title">Education</h2>
      <section class="education">
        <div class="timeline">
          <div v-for="(educationItem, index) in Education" :key="index" class="timeline-item" :class="{ 'timeline-item-left': index % 2 === 0, 'timeline-item-right': index % 2 !== 0 }">
            <div class="timeline-content">
              <div class="content-left">
                <h3>{{ educationItem.degree }}</h3>
                <p>{{ educationItem.institution }}</p>
                <p>{{ educationItem.duration }}</p>
              </div>
              <div class="content-right">
                <p>{{ educationItem.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Experience Section -->
    <div class="section-box">
      <section class="experience">
        <h2 class="section-title" id="experience">Experience</h2>
        <div class="timeline">
          <div v-for="(experienceItem, index) in Experience" :key="index" class="timeline-item" :class="{ 'timeline-item-left': index % 2 === 0, 'timeline-item-right': index % 2 !== 0 }">
            <div class="timeline-content">
              <div class="content-left">
                <h3>{{ experienceItem.place }}</h3>
                <p>{{ experienceItem.duration }}</p>
                <p>{{ experienceItem.profession }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Skills Section -->
<section class="skills">
  <h2 class="section-title">Skills</h2>
  <div class="skills-container">
    <div v-for="skill in Skills" :key="skill.name" class="card">
      <div class="card-inner">
        <div class="card-front">
          <img :src="skill.imgUrl" class="card-img-top" :alt="skill.name" />
          <h1 class="card-text">{{ skill.name }}</h1>
        </div>
        <div class="card-back">
          <p>{{ skill.text }}</p>
        </div>
      </div>
    </div>
  </div>
</section>

  </div>
</template>

<script>
export default {
  data() {
    return {
      "Education": [
        {
          "degree": "Web Development",
          "institution":"Life Choices Academy",
          "description": "Coding",
          "duration": "2023 - 2024"
        }, 
        {
          "degree": "Grade 12",
          "institution": "HF Van Cutsem High School",
          "description": "Commerce",
          "duration": "2018 - 2022"
        }
      ],
      "Experience": [
        {
          "place": "Life Choices Academy" ,
          "duration": "2024-Present",
          "profession": "Web Dev Intern"
        },
        {
          "place": "Dei Vlei Boodrey" ,
          "duration": "2022-2022",
          "profession": "Grape harvester"
        }
      ],
      "Skills": [
        {
          "name": "HTML",
          "imgUrl": "https://i.imgur.com/42X0yia.png",
          "text": "HTML, or Hypertext Markup Language, is a markup language for the web that defines the structure of web pages. It is one of the most basic building blocks of every website, so it's crucial to learn if you want to have a career in web development."
        },
        {
          "name": "CSS",
          "imgUrl": "https://i.imgur.com/B4YCCEF.jpg",
          "text": "CSS stands for Cascading Style Sheets. CSS saves a lot of work. It can control the layout of multiple web pages all at once. What is CSS? Cascading Style Sheets (CSS) is used to format the layout of a webpage.HTML Styles CSS - W3Schools."
        },
        {
          "name": "Bootstrap",
          "imgUrl": "https://i.imgur.com/fIcKnQW.png",
          "text": "As a framework, Bootstrap is a collection of pre-written code chunks in CSS, HTML, and JavaScript that allows developers to create websites more quickly than if they had to create every bit of code from scratch. Bootstrap saves developers time so that they can focus on other things rather than coding CSS."
        },
        {
          "name": "Javascript",
          "imgUrl": "https://i.imgur.com/zboSh42.jpg",
          "text": "Together with HTML and CSS, JavaScript forms the foundation of web development. The language is used heavily in web pages, but now various JavaScript platforms allow you to execute JavaScript on a server without a browser. It is also used to create mobile apps for Android and iOS platforms.."
        },
        {
          "name": "Vuejs",
          "imgUrl": "https://i.imgur.com/UhHAk6K.png",
          "text": "Vue.js lets you extend HTML with HTML attributes called directives Vue.js directives offers functionality to HTML applications Vue.js provides built-in directives and user defined directives Vue.js uses double braces { { }} as place-holders for data. In the example below, a new Vue object is created with new Vue ()."
        }
      ]
    };
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.section-title{
  margin-top: 3%;
}
.section-box {
  width: 70%;
  margin-bottom: 50px;
}

.section-title {
  margin-bottom: 20px;
}

.timeline {
  display: flex;
  flex-direction: column;
}

.timeline-item {
  display: flex;
  width: 100%;
  padding: 20px;
}

.timeline-item-left {
  justify-content: flex-end;
}

.timeline-item-right {
  justify-content: flex-start;
}

.timeline-content {
  display: flex;
  flex-direction: column;
  width: 50%;
}

.timeline-content h3 {
  margin-bottom: 10px;
}

.skills {
  width: 70%;
}

.skills h2 {
  margin-top: 50px;
  margin-bottom: 20px;
}

.skills-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

.card {
  width: 200px;
  

}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.card:hover .card-inner {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.card-front {
  background-color: #fff;
}

.card-back {
  color:white;
  background-color: #f2f2f2;
  transform: rotateY(180deg);
}

.card-img-top {
  width: 100%;
  height: 100px;
  object-fit: cover;
}

.card-text {
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
}

.card-back p {
  padding: 20px;
  font-size: 16px;
}
.education{
  background-color: black;
  margin-top: 10%;
  border-radius: 25%;
}
.experience{
  background-color: black;
  margin-top: 10%;
  border-radius: 25%; 
}
#experience{
  /* margin-top: 30%; */
}
.card-text{
  color: white;
}


</style>
