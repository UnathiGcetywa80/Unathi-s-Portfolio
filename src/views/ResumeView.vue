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
    <h4 class="display-4 text-white" id="sub-heading">Skills</h4>
          <div class="row d-block d-md-flex justify-content-center align-content-end">
      <div class="col">
     <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src="https://i.postimg.cc/sxTNXbvK/msql.jpg" alt="HTML" style="width:300px;height:300px;">
        </div>
        <div class="flip-card-back">
          <img src="https://i.postimg.cc/9MfKyWZZ/html.jpg" alt="CSS" style="width:300px;height:300px;">
        </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src="https://i.postimg.cc/vZfsmHtm/boot.jpg" alt="BOOTSTRAP" style="width:300px;height:300px;">
        </div>
        <div class="flip-card-back">
          <img src="https://i.postimg.cc/YCWpmxMM/css.webp" alt="JS" style="width:300px;height:300px;">
         </div>
        </div>
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

<style scoped>



.section-box {
  width: 80%;
  margin-bottom: 50px;
  border-radius: 10px; /* Rounded corners */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Shadow for a card effect */
  padding: 20px;
  box-align: center;
}

.section-title {
  margin-bottom: 20px;
  color: #333; /* Darker text color */
}
.section-title{
  color: white;
  font-family: 'Lobster', cursive;
}

.timeline {
  display: flex;
  flex-direction: column;
}
#sub-heading{
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
  width: 50%;
  font-family: 'Lobster', cursive;
 margin-left: 27%;
}

.timeline-content h3 {
  margin-bottom: 10px;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
}
.sub-heading{
  color: white;
}

.card {
  width: 200px;
  margin-bottom: 20px;
  background-color: #000; /* Change background color to black */
  border-radius: 10px; /* Rounded corners */
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1); /* Shadow for a card effect */
  overflow: hidden; /* Hide overflowing content */
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
  color: #080808; /* White text color */
  background-color: transparent; /* Transparent background */
}

.card-back {
  color: #333; /* Darker text color */
  background-color: #070606; /* Light gray background color */
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
  font-family: 'Lobster', cursive;
}

.card-back p {
  padding: 20px;
  font-size: 16px;
}

.education,
.experience {
  background-color: #333; /* Dark background color */
  border-radius: 10px; /* Rounded corners */
  padding: 20px;
  color: #fff; /* Light text color */
  margin-top: 20px;
}

#experience {
  margin-top: 30px;
}
.flip-card {
    background-color: transparent;
    width: 300px;
    height: 300px;
    perspective: 1000px;
    padding-left: 200px;
    margin-top: 40px;
    margin-bottom: 200px;
  }
  
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  }
  
  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }
  
  .flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  
  .flip-card-front {
    background-color: #bbb;
    color: black;
  }
  
  .flip-card-back {
    background-color: #2980b9;
    color: white;
    transform: rotateY(180deg);
  }
.sub-heading{
  color: #fff;
  font-family: 'Lobster', cursive;
}
</style>
