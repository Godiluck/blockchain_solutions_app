<template>
  <div class="wrapper">
    <ChartElem :chart-data="chartData" :height="400" :width="500"
               :options="{responsive: true, maintainAspectRatio: true}"></ChartElem>
  </div>
</template>

<script>
import ChartElem from "@/components/ChartElem";
import {BtcToUsdChart, EthToUsdChart, UsdToRubChart} from '@/utils/consts'

export default {
  name: "ChartPage",
  components: {
    ChartElem,
  },
  props: {
    currency: String,
  },
  data() {
    return {
      btcMarketChart: Object,
      chartId: 'HistoryChart',
      data: [],
      chartData: {
        labels: [],
        datasets: [
          {
            label: '',
            backgroundColor: '#4E93FF',
            data: [],
          }
        ]
      }
    }
  },
  methods: {
    chartApi: async function () {
      this.chartData.labels = [];
      this.data = [];
      const response = await fetch(this.chooseCurrency());
      this.btcMarketChart = await response.json();

      this.btcMarketChart.prices.map((price) => {
        let date = new Date(price[0]).toLocaleDateString("en-US");
        let amount = price[1].toFixed(3).toString();
        this.chartData.labels.push(date)
        this.data.push(amount)
      })
      this.chartData.labels.pop()
      this.data.pop()
      this.chartData.datasets[0].data = this.data
    },
    chooseCurrency() {
      switch (this.currency) {
        case "BTC":
          this.chartData.datasets[0].label = 'Btc to Usd history'
          return BtcToUsdChart;
        case "ETH":
          this.chartData.datasets[0].label = 'Eth to Usd history'
          return EthToUsdChart;
        case "USD":
          this.chartData.datasets[0].label = 'Usd to Rub history'
          return UsdToRubChart;
      }
    }
  },
  watch: {
    currency: function () {
      this.chartApi()
    }
  },
}
</script>

<style scoped>
.wrapper {
  margin-top: 5%;
  display: flex;
  align-self: center;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  border-radius: 5px;
  background: white;
}
</style>