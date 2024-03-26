<template>
  <div class="container">
    <div class="education-box">
      <section class="education">
        <h2>Education</h2>
        <div class="timeline">
          <div v-for="Education in education" :key="Education.id" class="timeline-item">
            <div class="timeline-content">
              <h3>{{ Education.degree }}</h3>
              <p>{{ Education.institution }}</p>
              <p>{{ Education.description }}</p>
              <p>{{ Education.duration }}</p>
            </div>
          </div>        </div>
      </section>
    </div>
  </div>
  <section class="skills">
    <h2 class="display-1" id="heading">Skills</h2>
    <div class="containerr">
      <div v-for="Skill in skills" :key="Skill.id" class="card">
        <div class="card-inner">
          <div class="card-front">
            <img :src="Skill.imgUrl" class="card-img-top" :alt="Skill.name" />
            <h1 class="card-text">{{ Skill.name }}</h1>
          </div>
          <div class="card-back">
            <p>{{ Skill.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    education() {
      return this.$store.state.Education;
    },
    skills() {
      return this.$store.state.skills;
    },
  },
  mounted() {
    this.$store.dispatch("fetchEducation");
    this.$store.dispatch("fetchSkills");
  },
};
</script>

<style scoped>
.skills{
  background: none;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

#heading {
  font-size: 20vh;
  color: white;
  margin-bottom: 20px;
  font-weight: bold;
  font-family: 'Lobster', cursive;
}

.education-box {
  width: 80%;
  padding: 20px;
  font-size: 20vh;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(245, 24, 134, 0.942);
}

.education {
  margin-bottom: 40px;
}

.education h2 {
  color: white;
  font-size: 30px;
  margin-bottom: 20px;
  font-weight: bold;
  font-family: 'Lobster', cursive;
}

.timeline-item {
  position: relative;
  padding-bottom: 40px;
  margin-bottom: 30px;
}

.timeline-content {
  width: 600px;
  margin: 0 0 0 20%;
  padding: 20px;
}

.timeline-content h3 {
  color: #f9f7f7;
  font-size: 18px;
  margin-bottom: 20px;
}

.timeline-content p {
  color: #f5f2f2;
  font-size: 16px;
  margin-bottom: 10px;
}

.timeline-item:first-child .timeline-content {
  margin-top: 0;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.timeline-item:last-child .timeline-content {
  margin-bottom: 0;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.skills {
  margin-bottom: 40px;
}

.skills h2 {
  color: #f9f9f9;
  font-size: 30px;
  margin-bottom: 20px;
  font-weight: bold;
}

.containerr {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;
}

.card {
  perspective: 1000px;
  position: relative;
  margin: 10px;
}

.card-inner {
  width: 300px;
  height: 400px;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.card:hover .card-inner {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
}

.card-front {
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.card-back {
  color: white; /* Changed background color to transparent */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: rotateY(180deg);
  font-family: 'Lobster', cursive;
}

.card-img-top {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 10px;
}

.card-text {
  font-size: 16px;
  font-weight: bold;
  color: #f1f1f1;
  font-family: 'Lobster', cursive;
}

.card-link {
  display: flex;
  margin-left: 18rem;
  margin-right: 18rem;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  color: #ffffff;
  text-decoration: none;
  border-radius: 0.25rem;
}

.card-link:hover {
  background-color: #f51ea6;
}
</style>
