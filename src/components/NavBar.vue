<template>
  <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #ffdde1;">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">
        <img src="https://i.postimg.cc/nL1gr47y/u.png" height="50px" alt="logo">
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link" exact>
           Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">
              About Me
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/resume" class="nav-link">
              Education & Experience
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/testimonials" class="nav-link">
              References
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/project" class="nav-link">
               My Projects
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">
              Reach Me
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  // name: 'Navbar',
}
</script>

<style scoped>
/* .navbar {
  font-family: 'Lobster', cursive;
} */

.navbar-light .navbar-nav .nav-link {
  color: black;
}

.navbar-light .navbar-nav .nav-link:hover {
  color: #a30050; /* Dark pink hover color */
}
</style>
