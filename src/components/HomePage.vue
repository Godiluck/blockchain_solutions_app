<template>
  <div class="wrapper">
    <div class="link_containers">
      <div class="link_container">
        <router-link class="link" to="/converter">Converter Page</router-link>
      </div>
      <div class="link_container">
        <router-link class="link" to="/profile">Profile Page</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      currentPage: 'Home'
    }
  },
  created: function () {
    this.$emit('page', this.currentPage)
  }
}
</script>

<style scoped>
.wrapper {
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}


.link_containers {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  z-index: 1;
}

.link_container {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  border: 2px solid white;
  border-radius: 5px;
  color: white;
  width: 20%;
  height: 10vh;
  transition: all .5s ease;
}

.link_container:hover {
  border: none;
  background-image: linear-gradient(to right, #667eea, #764ba2, #6B8DD6, #8E37D7);
  box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);
  transition: all .5s ease;
}


.link {
  all: unset;
  cursor: default;
  font-size: 20px;
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>