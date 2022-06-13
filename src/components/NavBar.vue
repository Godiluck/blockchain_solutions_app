<template>
  <div class="wrapper">
    <div class="navbar_container">
      <router-link class="redirect" to="/"><p class="logo">BlockChain Solution</p></router-link>
    </div>
    <div class="navbar_container">
      <p class="current_page">{{currentPage}}</p>
    </div>
    <div class="navbar_container">
      <MenuBtn
          @toggle="toggleMenu"
          v-bind:is-menu-open="isOpen"
      />
    </div>
  </div>
</template>

<script>
import MenuBtn from "@/components/MenuBtn";

export default {
  name: "NavBar",
  components: {
    MenuBtn,
  },
  props: {
    currentPage: String,
    isOpen: Boolean,
  },
  methods: {
    toggleMenu(state) {
      this.$emit('toggle', state)
    }
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: none;
  color: white;
  border-bottom: 1px solid white;
  height: 10vh;
  z-index: 1;
}

.navbar_container {
  width: 25%;
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
}

.logo {
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 20px;
  cursor: default;
  border-bottom: 1px solid white;
}

p{
  font-size: 20px;
  color: white;
}

.current_page {
  cursor: default;
}

.redirect {
  all: unset;
}
</style>