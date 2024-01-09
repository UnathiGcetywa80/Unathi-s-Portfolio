<template>
  <main class="container-fluid">
    <NavBar></NavBar>
 <Footer></Footer>
  <router-view/>
  </main>

 
</template>
<script>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';


export default{
  components:{
    NavBar,
    Footer
  }
}

</script>

<style>
/* You can import the CSS file like this */
/* @import "@/assets/css/style.css"; */

/* Other CSS styles specific to this component */
/* ... */
</style>

 <style src="@/assets/css/style.css">

</style> 
