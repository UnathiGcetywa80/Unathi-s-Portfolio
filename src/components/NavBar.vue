<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link to="/">
        <img class="navbar-brand" src="https://i.postimg.cc/nL1gr47y/u.png"  height="50px" alt="logo">
      </router-link>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link active">
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link active">
              About
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/resume" class="nav-link active">
              Resume
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/testimonials" class="nav-link active">
              Testimonials
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/project" class="nav-link active">
              Projects
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link active">
              Contact
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
.navbar-brand {
  margin-right: 20px; /* Adjust margin as needed */
}
.navbar{
  font-family: 'Lobster', cursive;
}
.nav-item:hover .nav-link,
  .nav-item:focus .nav-link,
  .nav-item:active .nav-link {
    color: #FFFFFF;
    background-color: #f82b95;
    border-radius: 30px;
  }
</style>
