<template>
  <div class="container">
    <!-- Education Section -->
    <div class="education-box">
      <section class="education">
        <h2>Education</h2>
        <div class="timeline">
          <div v-for="(Education, index) in education" :key="Education.id" class="timeline-item" :class="{ 'timeline-item-left': index % 2 === 0, 'timeline-item-right': index % 2 !== 0 }">
            <div class="timeline-content">
              <div class="content-left">
                <h3>{{ Education.degree }}</h3>
                <p>{{ Education.institution }}</p>
                <p>{{ Education.duration }}</p>
              </div>
              <div class="content-right">
                <p>{{ Education.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Skills Section -->
    <section class="skills">
      <h2 id="heading">Skills</h2>
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
    skills() {
      return this.$store.state.Skills;
    },
  },
  mounted() {
    this.$store.dispatch("fetchEducation");
    this.$store.dispatch("fetchSkills");
  },
};
</script>

<style scoped>
/* Your existing styles */

.education-box {
  margin-top: 40px; /* Add margin for separation from the top */
}

.education h2 {
  color: #f7f4f4;
  font-size: 30px;
  margin-bottom: 20px;
  font-weight: bold;
}

.timeline {
  display: flex;
  flex-direction: column;
}

.timeline-item {
  margin-bottom: 20px;
  position: relative;
}

.timeline-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-family: 'Lobster', cursive;
}

.content-left,
.content-right {
  flex-basis: 50%;
}

.timeline-item-left .content-left {
  order: 2; /* Change the order for left items */
}

.timeline-item-right .content-right {
  order: 1; /* Change the order for right items */
}

.timeline-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  width: 2px;
  height: 100%;
  background-color: #d6d3d3;
}
</style>
