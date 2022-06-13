<template>
<div @click="toggleMenu" :class="{active: isMenuOpen}" class="menu_container">
  <p class="menu">Menu</p>
</div>
</template>

<script>
export default {
  name: "MenuBtn",
  props: {
    isMenuOpen: Boolean,
  },
  watch: {
    isMenuOpen: function () {
      this.isActive = this.isMenuOpen
    }
  },
  data() {
    return {
      isActive: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isActive = !this.isActive
      this.$emit('toggle', this.isActive)
    }
  },
}
</script>

<style scoped>
html{
  height: 100%;
}

.menu_container{
  width: 50%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
}

.menu_container:hover{
  background: white;
  transition: all 0.5s ease;
}

.menu_container:hover .menu{
  color: black;
}

.menu{
  font-family: Montserrat, sans-serif;
  font-size: 20px;
  font-weight: 400;
  cursor: pointer;
  color: white;
  transition: all .5s ease;
}

.active {
  display: none;
  transition: all .5s ease;
}
</style>