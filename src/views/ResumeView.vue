<template>
  <div class="container">
    <!-- Education Section -->
    <div class="section-box">
      <h2 class="section-title" id="display">Education</h2>
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
      <h2 class="section-title" id="experience">Experience</h2>
      <section class="experience">
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
<div class="section-box">
  <h2 class="section-title" id="skills">Skills</h2>
  <div class="row">
    <!-- Technical Skills -->
    <div class="col-6">
      <h3 class="sub-heading">Technical Skills</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Bootstrap</li>
        <li>Node.js</li>
        <li>Vue.js</li>
        <li>Mysql</li>
        
      </ul>
    </div>

    <!-- Soft Skills -->
    <div class="col-6">
      <h3 class="sub-heading">Soft Skills</h3>
      <ul>
        <li>Communication</li>
        <li>Teamwork</li>
        <li>Problem-solving</li>
        <li>Microsoft word</li>
        <li>Microsoft excel</li>
        <li>Microsoft word</li>
      </ul>
    </div>
  </div>
</div>

  </div>
  </template>

<script>
export default {
  data() {
    return {
      Education: [
        {
          degree: "Web Development",
          institution: "Life Choices Academy",
          description: "Coding",
          duration: "2023 - 2024"
        },
        {
          degree: "Grade 12",
          institution: "HF Van Cutsem High School",
          description: "Commerce",
          duration: "2018 - 2022"
        }
      ],
      Experience: [
        {
          place: "Life Choices Academy",
          duration: "2024-Present",
          profession: "Web Dev Intern"
        },
        {
          place: "Dei Vlei Boodrey",
          duration: "2022-2022",
          profession: "Grape harvester"
        }
      ],
      projects: [
        {
          title: "Node_EOMP",
          image: "https://i.ibb.co/84LHFpN/T-J-2.png",
          github: "https://github.com/niyaazdaniels/NODE_EOMP.git",
          netlify: "https://nodeeomp-7c094.web.app"
        },
        {
          title: "K's ecommerce",
          image: "https://i.ibb.co/Jr5jJgP/download-12.jpg",
          github: "https://github.com/thimnaalam/Khanyile.js.git",
          netlify: "https://khanyiles.netlify.app/"
        },
        {
          title: "Bootstrap Portfolio",
          image: "https://i.ibb.co/TMMjCmc/1000-F-474835440-XYky-AZj-LECO54-WGb-BDAu3-Ar9-Bm23kh9-Q.jpg",
          github: "https://github.com/thimnaalam/BootstrapProject.git",
          netlify: "https://bootstrapthimna.netlify.app/"
        },
        {
          title: "Calculator",
          image: "https://i.ibb.co/nB4mJP0/download-4.png",
          github: "https://github.com/thimnaalam/projectCalculator.git"
        },
        {
          title: "Keyboard",
          image: "https://i.ibb.co/GT5XJ48/5fd7cf7f78a5740019a15561.webp"
        },
        {
          title: "MobiCare",
          image: "https://i.ibb.co/B6LX3Vq/download-5.png",
          github: "https://github.com/thimnaalam/MobiCare_week1.git"
        }
      ]
    };
  }
};
</script>

<style>


.section-title {
  color: white;
  font-family: 'Lobster', cursive;
}

.timeline {
  display: flex;
  flex-direction: column;
}

#sub-heading {
  font-size: 40px;
  font-family: 'Lobster', cursive;
}

.timeline-item {
  display: flex;
  width: 100%;
  padding: 20px;
  border-bottom: 1px solid #050505; /* Separator between items */
}

.timeline-content {
  display: flex;
  flex-direction: column;
  width: 100%; /* Adjusted width to take full width */
  font-family: 'Lobster', cursive;
  margin: 0 auto; /* Centers the content horizontally */
}

#display{
  font-size:xx-large;
}
.timeline-content h3 {
  margin-bottom: 10px;
}

/* .card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content;
{ */
</style>
