<template>
  <div class="wrapper">
    <div class="body" :class="{shadow: isMenuOpen}">
      <NavBar
          class="navbar"
          v-bind:is-open="isMenuOpen"
          v-bind:current-page="currentPage"
          @toggle="toggleMenu"
      />
      <router-view @page="getPage" :shadow="isMenuOpen"></router-view>
    </div>
      <div class="nav_slider" :class="{nav_menu_toggle: isMenuOpen}">
        <div @click="closeMenu" class="cross">X</div>
        <ul class="nav_list">
          <li><router-link @click="closeMenu" class="nav_item" to="/">Main page</router-link></li>
          <li><router-link @click="closeMenu" class="nav_item" to="/converter">Currency converter</router-link></li>
          <li><router-link @click="closeMenu" class="nav_item" to="/profile">Profile</router-link></li>
        </ul>
      </div>
  </div>
  <div class="area">
    <ul class="floating">
      <li><img src="./assets/ETH.png" alt=""></li>
      <li><img src="./assets/BTC.png" alt=""></li>
      <li><img src="./assets/BTC.png" alt=""></li>
      <li><img src="./assets/USD.png" alt=""></li>
      <li><img src="./assets/ETH.png" alt=""></li>
      <li><img src="./assets/USD.png" alt=""></li>
      <li><img src='./assets/ETH.png' alt=""></li>
      <li><img src="./assets/BTC.png" alt=""></li>
      <li><img src="./assets/ETH.png" alt=""></li>
      <li><img src="./assets/BTC.png" alt=""></li>
    </ul>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  name: 'App',
  components: {
    NavBar,
  },
  data() {
    return {
      isMenuOpen: false,
      currentPage: '',
    }
  },
  methods: {
    toggleMenu(state) {
      this.isMenuOpen = state
    },
    closeMenu() {
      this.isMenuOpen = false
    },
    getPage(state) {
      this.currentPage = state
    },
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
}

html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.wrapper {
  width: 100%;
  display: flex;
  flex-direction: row;
  z-index: 1;
}

@keyframes gradient {
	0% {
		background-position: 0 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0 50%;
	}
}
@keyframes animate {
    0%{
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }

    100%{
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }

}

.body {
  width: 100%;
  transition: all .5s ease;
}

.shadow {
  background:rgba(0,0,0,0.4);
}

.nav_slider {
  background: #373a47;
  width: 0;
  transition: all .5s ease;
  height: 100vh;
  z-index: 2;
}

.nav_menu_toggle {
  width: 30%;
  transition: all .5s ease;
}

.cross {
  margin: 15px;
  display: flex;
  align-self: flex-start;
  font-size: 30px;
  cursor: pointer;
  color: white;
}

.nav_list {
  list-style-type: none;
}

li {
  margin-top: 30px;
}

.nav_item {
  margin-top: 30px;
  font-size: 20px;
  color: white;
  cursor: pointer;
  text-decoration: none;
}

.nav_item:hover{
  color: cornflowerblue;
  transition: all .2s ease;
}

.navbar {
  position: absolute;
  top: 0;
}

.area {
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: -1;
}

.floating {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

.floating li {
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  animation: animate 25s linear infinite;
  bottom: -150px;
}

.floating li:nth-child(1){
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
}


.floating li:nth-child(2){
    left: 10%;
    width: 40px;
    height: 40px;
    animation-delay: 2s;
    animation-duration: 12s;
}

.floating li:nth-child(3){
    left: 70%;
    width: 60px;
    height: 60px;
    animation-delay: 4s;
}

.floating li:nth-child(4){
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
}

.floating li:nth-child(5){
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
}

.floating li:nth-child(6){
    left: 75%;
    width: 90px;
    height: 90px;
    animation-delay: 3s;
}

.floating li:nth-child(7){
    left: 35%;
    width: 70px;
    height: 70px;
    animation-delay: 7s;
}

.floating li:nth-child(8){
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
}

.floating li:nth-child(9){
    left: 20%;
    width: 35px;
    height: 35px;
    animation-delay: 2s;
    animation-duration: 35s;
}

.floating li:nth-child(10){
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
}

img {
  width: 100%;
  height: 100%;
}
</style>
