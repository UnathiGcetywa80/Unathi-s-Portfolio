<template>
  <div class="container">
    <!-- Education Section -->
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
          </div>
        </div>
      </section>
    </div>

    <!-- Experience Section -->
    <section class="experience">
      <h2>Experience</h2>
      <div class="experience-list">
        <div v-for="experience in experiences" :key="experience.id" class="experience-item">
          <div class="experience-details">
            <h2>{{ Experience.place }}</h2>
              <p>{{ Experience.duration }}</p>
              <p>{{ Experience.profession }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="skills">
      <h2 class="display-1" id="heading">Skills</h2>
      <div class="container">
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
  </div>
</template>

<script>
export default {
  computed: {
    education() {
      return this.$store.state.Education;
    },
    experiences() {
      return this.$store.state.Experiences;
    },
    skills() {
      return this.$store.state.Skills;
    },
  },
  mounted() {
    this.$store.dispatch("fetchEducation");
    this.$store.dispatch("fetchExperiences");
    this.$store.dispatch("fetchSkills");
  },
};
</script>

<style scoped>
/* Your existing styles */

.experience {
  margin-top: 40px;
}

.experience h2 {
  color: #f7f4f4;
  font-size: 30px;
  margin-bottom: 20px;
  font-weight: bold;
}

.experience-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.experience-item {
  margin: 20px;
  text-align: center;
}

.experience-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}

.experience-name {
  margin-top: 10px;
  font-weight: bold;
}

.experience-description {
  margin-top: 10px;
}
</style>
