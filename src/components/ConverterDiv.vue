<template>
  <div class="wrapper">
    <div class="input_field">
      <select @change="convertFormula" :class="{shadow: this.shadow}" v-model="leftSelector">
        <option value="BTC">BTC</option>
        <option value="ETH">ETH</option>
        <option value="USD">USD</option>
      </select>
      <input :class="{shadow: this.shadow}" @input="convertLeft" type="number" v-model="input.leftInput" placeholder="Type amount"/>
    </div>
    <div class="equally">
      <p> = </p>
    </div>
    <div class="input_field">
      <select :class="{shadow: this.shadow}" v-model="rightSelector">
        <option value="BTC">BTC</option>
        <option value="ETH">ETH</option>
        <option value="USD">USD</option>
      </select>
      <input :class="{shadow: this.shadow}" class="readonly" readonly="readonly" v-model="input.rightInput" placeholder="Get equality"/>
    </div>
  </div>
</template>

<script>
import {currenciesApi} from "@/utils/consts";

export default {
  name: "ConverterDiv",
  props: {
    shadow: Boolean,
  },
  data() {
    return {
      input: {
        rightInput: '',
        leftInput: '',
      },
      formula: this.convertFormula,
      leftSelector: 'BTC',
      rightSelector: 'USD',
      currencies: {
        btc: {
          usd: 0,
          eth: 0,
        },
        eth: {
          usd: 0,
          btc: 0,
        },
        usd: {
          btc: 0,
          eth: 0,
        },
      }
    }
  },
  methods: {
    convertFormula() {
      switch (this.leftSelector) {
        case 'BTC':
          if (this.rightSelector === 'ETH') {
            this.formula = this.currencies.btc.eth
          } else if (this.rightSelector === 'USD') {
            this.formula = this.currencies.btc.usd
          } else {
            this.formula = 1;
          }
          break
        case 'ETH':
          if (this.rightSelector === 'BTC') {
            this.formula = this.currencies.eth.btc
          } else if (this.rightSelector === 'USD') {
            this.formula = this.currencies.eth.usd
          } else {
            this.formula = 1;
          }
          break
        case 'USD':
          if (this.rightSelector === 'BTC') {
            this.formula = this.currencies.usd.btc
          } else if (this.rightSelector === 'ETH') {
            this.formula = this.currencies.usd.eth
          } else {
            this.formula = 1;
          }
          break
      }
      this.$emit('currency', this.leftSelector);
    },
    convertLeft() {
      if (this.input.leftInput === '') {
        this.input.rightInput = ''
      } else {
        this.input.rightInput = this.input.leftInput * this.formula
      }
    },
  },
  created: async function () {
    const response = await fetch(currenciesApi);
    const currencies = await response.json()
    this.currencies.btc.usd = currencies.bitcoin.usd
    this.currencies.btc.eth = currencies.bitcoin.eth
    this.currencies.eth.usd = currencies.ethereum.usd
    this.currencies.eth.btc = currencies.ethereum.btc
    this.currencies.usd.btc = currencies.usd.btc
    this.currencies.usd.eth = currencies.usd.eth
    this.convertFormula()
  },
  watch: {
    leftSelector: function () {
      this.convertFormula();
      this.convertLeft();
    },
    rightSelector : function () {
      this.convertFormula();
      this.convertLeft();
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-around;
  align-self: center;
  margin-top: 5%;
  border-radius: 5px;
  width: 60%;
  border: 1px solid cornflowerblue;
  background: white;
}

.input_field {
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: 25px 0 25px 0;
}

select {
  cursor: pointer;
  margin-bottom: 15px;
  border: 1px solid lightgray;
  background: cornflowerblue;
  border-radius: 6px;
  color: white;
  display: flex;
  width: 50%;
  justify-content: center;
  text-align: center;
}

select:focus {
  outline: none;
}

.shadow {
  background:rgba(0,0,0,0.4);
  color: rgba(0,0,0,0.4);
  border: rgba(0,0,0,0.4);
}

input {
  cursor: pointer;
  display: flex;
  justify-content: center;
  border: 1px solid lightgray;
  text-align: center;
  height: 4vh;
  transition: all .2s ease;
  margin-right: 15px;
}

.readonly {
  cursor: default;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input:focus {
  border: none;
  border-bottom: 2px solid coral;
  transition: all .2s ease;
  outline: none;
}

.equally {
  display: flex;
  align-items: center;
  padding-top: 4%;
  cursor: default;
}

p {
  font-size: 40px;
  color: cornflowerblue;
}
</style>