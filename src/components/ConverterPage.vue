<template>
  <div class="page">
    <router-view></router-view>
    <ConverterDiv
        style="z-index: 1"
        @currency="getCurrency"
        :shadow="shadow"
    />
    <ChartPage
        style='z-index: 1'
        :currency="currency"
    />
  </div>
</template>

<script>
import ConverterDiv from "@/components/ConverterDiv";
import ChartPage from "@/components/ChartPage";

export default {
  name: "ConverterPage",
  components: {
    ChartPage,
    ConverterDiv,
  },
  props: {
    shadow: Boolean,
  },
  data() {
    return {
      isMenuOpen: false,
      currency: '',
      currentPage: 'Currency converter',
    }
  },
  methods: {
    getCurrency(state) {
      this.currency = state;
    }
  },
  created: function () {
    this.$emit('page', this.currentPage)
  }
}
</script>

<style scoped>
.page {
  width: 100%;
  display: flex;
  margin-top: 5%;
  justify-content: center;
  flex-direction: column;
}
</style>