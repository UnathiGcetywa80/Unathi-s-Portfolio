<template>
  <main class="container-fluid">
    <NavBar></NavBar>
    <Footer></Footer>
    <Spinner></Spinner>
    <router-view/>
  </main>

 
</template>
<script>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
import Spinner from './components/Spinner';


export default{
  components:{
    NavBar,
    Footer,
    Spinner,
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
