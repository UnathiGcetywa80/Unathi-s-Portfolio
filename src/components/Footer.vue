<template>
    <div class="container-fluid fixed-bottom">
        <div class="row">
            <p class="lead">
                Unathi's Portfolio &copy;
                <span>{{ currYear }}</span>
            </p>
            <!-- icons -->
            <div class="text-center ">
        <a href="https://www.linkedin.com/in/unathi-gcetywa-1406062ab/" class="text-white mx-2"><i class="bi bi-linkedin"></i> Linkedin </a>
        <a href="https://github.com/UnathiGcetywa80?tab=repositories" class="text-white mx-2"><i class="bi bi-github"></i> Github </a>
        <a href="#" class="text-white mx-2"><i class="bi bi-envelope-at-fill"></i> unathigcetywa80@gmail.com </a>
        <a href="#" class="text-white mx-2"><i class="bi bi-phone-fill"></i> 0698612356 </a>
    </div>
     </div>
       </div>
</template>
<script>
    export default {
        name:'FooterComp',
        data(){
            return{
                currYear: new Date().getFullYear()
            }
        }
    }
</script>
<style scoped>
.lead{
    font-family: 'Lobster', cursive;
}
.text-centre{
    color: rgb(255, 52, 160);
}
</style>




















