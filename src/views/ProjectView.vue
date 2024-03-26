<template>
  <h1>My Projects</h1>
  <div class="projects">
    <div v-for="Project in Projects" :key="Project.id" class="card" style="width: 27rem; margin-bottom: 20px;">
      <img :src="Project.imgURL" class="card-img-top" :alt="Project.name">
      <div class="card-body">
        <h5 class="card-title">{{Project.name}}</h5>
        <a :href="Project.github" target="_blank" class="btn btn-source">Source code</a>
        <a :href="Project.netlify" target="_blank" class="btn btn-live">Go Live</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    Projects() {
      return this.$store.state.Projects
    },
  },
  mounted() {
    this.$store.dispatch('fetchProjects');
  },
};
</script>

<style scoped>
.projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  margin-right: 20px;
}

.card-img-top {
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.card-body {
  padding: 1rem;
}

.card-title {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.btn {
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  text-decoration: none;
}

.btn-source {
  background-color: #fb25c9; /* Blue color for Source Code button */
  color: #fff; /* White text color */
  margin-right: 10px;
}

.btn-live {
  background-color: #f733ac; /* Green color for Go Live button */
  color: #fff; /* White text color */
}
</style>
