<template>
  <div class="home">
    <div class="header">
      <h1>Welcome to My Website</h1>
      <p>Discover amazing things</p>
      <img src="https://i.postimg.cc/fTPdz2Jy/un0.jpg" alt="">
    </div>

    <div class="main-content">
      <p>My name is Unathi Gcetywa and I'm an ASPIRING WEB DEVELOPER.</p>

      <button @click="showMore" v-show="!showAllContent" class="see-more-btn">See More</button>

      
      <div v-show="showAllContent" class="additional-content">
        
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showAllContent: false
    };
  },
  methods: {
    showMore() {
      this.showAllContent = true;
    }
  }
};
</script>

<style scoped>

.home {
  font-family: Arial, sans-serif;
  text-align: center;
}

.header {
  padding: 40px 20px;
  background-color: #f2f2f2;
}

.main-content {
  padding: 20px;
}

.see-more-btn {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 20px;
}

.additional-content {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px; 
  background-color: #f9f9f9;
  border-radius: 8px;
}
</style>


