<template>
  <div class="page">
    <div class="currencies">
      <div class="info"></div>
      <div class="currency" v-for="currency of currencies" :key="currency">
        <input class="currency_amount" v-model="currency.amount"/>
        <div class="currency_symbol">{{ currency.symbol }}</div>
        <div class="minus" @click="subtractAmount(currency.symbol)">-</div>
        <div class="plus" @click="addAmount(currency.symbol)">+</div>
      </div>
      <div class="total_amount">Total amount is: {{this.getTotalAmount()}} $</div>
    </div>
    <PieChart :chart-data="chartData"
              :options="{responsive: true, maintainAspectRatio: true}"/>
  </div>
</template>

<script>
import PieChart from "@/components/PieChart";
import {profileApi} from "@/utils/consts";

export default {
  name: "ProfilePage",
  components: {PieChart},
  data() {
    return {
      currencies: {
        USD: {
          amount: 492.976,
          symbol: '$',
        },
        BTC: {
          amount: 0.033,
          symbol: '₿',
          toUsd: 0,
        },
        ETH: {
          amount: 7.0045,
          symbol: 'Ξ',
          toUsd: 0,
        },
      },
      currentPage: 'Profile',
      chartData: {
        labels: [],
        datasets: [
          {
            backgroundColor: ['#43A0FF', '#FF8969', '#E954FF'],
            data: []
          }
        ]
      }
    }
  },
  methods: {
    updateProps() {
      this.chartData.labels = [this.currencies.USD.symbol, this.currencies.BTC.symbol, this.currencies.ETH.symbol];
      this.chartData.datasets[0].data = [this.currencies.USD.amount, this.currencies.BTC.amount * this.currencies.BTC.toUsd, this.currencies.ETH.amount * this.currencies.ETH.toUsd];
    },
    getTotalAmount() {
      const total = this.currencies.USD.amount + this.currencies.ETH.amount * this.currencies.ETH.toUsd + this.currencies.BTC.amount * this.currencies.BTC.toUsd
      return total.toFixed(5)
    },
    subtractAmount(symbol) {
      switch (symbol) {
        case '$':
          if (this.currencies.USD.amount > 1) {
            this.currencies.USD.amount -= 1
          }
              break
        case '₿':
          if (this.currencies.BTC.amount > 1) {
            this.currencies.BTC.amount -= 1
          }
              break
        case 'Ξ':
          if (this.currencies.ETH.amount > 1) {
            this.currencies.ETH.amount -= 1
          }
              break
      }
      this.updateProps()
    },
    addAmount(symbol) {
      switch (symbol) {
        case '$':
          this.currencies.USD.amount += 1
              break
        case '₿':
          this.currencies.BTC.amount += 1
              break
        case 'Ξ':
          this.currencies.ETH.amount += 1
              break
      }
      this.updateProps()
    }
  },
  created: async function() {
    const response = await fetch(profileApi);
    const data = await response.json();
    this.currencies.BTC.toUsd = data.bitcoin.usd
    this.currencies.ETH.toUsd = data.ethereum.usd
    this.updateProps()
    this.$emit('page', this.currentPage)
  },
}
</script>

<style scoped>
.page {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 10%;
}

.info {
  color: white;
}

.currencies {
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-left: 5%;
}

.currency {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 10vh;
  width: 100%;
  color: black;
  margin-top: 3%;
}

.currency_amount {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 30%;
  height: 6vh;
  border-radius: 15px;
  border: none;
  text-align: center;
  cursor: pointer;
}

.currency_amount:focus {
  border: none;
  outline: none;
}

.currency_symbol {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 20%;
  height: 6vh;
  border-radius: 15px;
  user-select: none;
}

.plus {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7%;
  height: 6vh;
  border-radius: 15px;
  background-color: white;
  color: black;
  font-size: 40px;
  cursor: pointer;
  user-select: none;
}

.minus {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7%;
  height: 6vh;
  padding-bottom: 1%;
  border-radius: 15px;
  background-color: white;
  color: black;
  font-size: 40px;
  cursor: pointer;
  user-select: none;
}

.minus:hover, .plus:hover{
  border: none;
  background-image: linear-gradient(to right, #667eea, #764ba2, #6B8DD6, #8E37D7);
  box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);
  transition: all .5s ease;
}

.total_amount {
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-top: 5%;
  width: 50%;
  height: 6vh;
  background: white;
  border-radius: 15px;
}
</style>