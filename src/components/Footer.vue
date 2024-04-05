<!-- <template>
  <div class="container-fluid fixed-bottom bg-dark text-white py-3 vh">
    <div class="row justify-content-center align-items-center">
      <p class="lead mb-0">
        Unathi's Portfolio &copy; <span>{{ currYear }}</span>
      </p>
      
      <div class="text-center mt-2">
        <a href="https://www.linkedin.com/in/unathi-gcetywa-1406062ab/" class="text-white mx-2" target="_blank">
          <i class="bi bi-linkedin"></i> Linkedin
        </a>
        <a href="https://github.com/UnathiGcetywa80?tab=repositories" class="text-white mx-2" target="_blank">
          <i class="bi bi-github"></i> Github
        </a>
        <a href="mailto:unathigcetywa80@gmail.com" class="text-white mx-2">
          <i class="bi bi-envelope-at-fill"></i> unathigcetywa80@gmail.com
        </a>
        <a href="tel:0698612356" class="text-white mx-2">
          <i class="bi bi-phone-fill"></i> 0698612356
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterComp',
  data() {
    return {
      currYear: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.lead {
  font-family: 'Lobster', cursive;
}

.text-center {
  color: #ff34a0;
}

.text-white a:hover {
  color: #ffc107; 
}

/* Additional styles for the footer */
/* .container-fluid {
  background-color: #343a40;
  padding-top: 5px; 
} */

.text-white {
  color: #fff; /* Text color */
}

.text-white a {
  text-decoration: none; /* Remove underline from links */
}

.text-white a:hover {
  text-decoration: underline; /* Add underline on hover */
}
</style> --> 
<template>
  <div class="container-fluid">
        <div class="row">
          <div class="col-12 text-center">
            <p class="lead">
              Unathi Gcetywa's Portfolio ©
              <span>{{ currYear }}</span>
            </p>
          </div>
        </div>
      </div>
  </template>
  <script>
  export default{
    name: "footerComp",
    data(){
      return{
        currYear: new Date().getFullYear()
      }
    }
  }
  </script>
  <style scoped>
  .container-fluid {
      position: fixed;
    bottom: 0;
    width: 100%;
    height: 30px;
    background-color: black;
    color: white;
    text-align: center;
    padding: 0;
    font-family: 'Lobster', cursive;
    }
  </style>
  
  
  
  
  
  
  
  


