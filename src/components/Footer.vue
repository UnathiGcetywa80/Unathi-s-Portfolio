<template>
  <div class="container-fixed-bottom footer">
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
export default {
  name: "footerComp",
  data() {
    return {
      currYear: new Date().getFullYear()
    };
  }
};
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: pink; /* Add pink background color */
  color: black; /* Set text color to black */
  text-align: center;
  /* font-family: 'Lobster', cursive; */
}
</style>
