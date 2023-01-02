<template>
  <div class="wallet-side-bar">
    <div class="inner-content w-full h-full p-2">
      <div class="currency-type-wrapper flex justify-between pb-2 border-b border-white items-center">
        <p class="text-white">Payment</p>
        <div class="currency-type text-black py-1 px-2">
          <button @submit.prevent @click="chosenPayment = 'Withdraw'" :class="{'active': chosenPayment === 'Withdraw'}" class="h-6">Withdraw</button>
          <button @submit.prevent @click="chosenPayment = 'Deposit'" :class="{'active': chosenPayment === 'Deposit'}" class="h-6">Deposit</button>
        </div>
      </div>
      <div class="main pt-4">
        <Deposit v-if="chosenPayment === 'Deposit'"/>
        <Withdraw v-if="chosenPayment === 'Withdraw'"/>
        <ul class="flex justify-between items-center flex-wrap pt-4">
          <li class="flex justify-between items-center py-2 text-white" v-for="item in CreateSignalSideBarList"
              :key="item.id">
            <div class="country flex justify-start items-center">
              <img class="w-8 h-8 border-circle mr-2" :src="require(`~/assets/images/flags/${item.firstCountryFlag}`)"
                   alt="">
              <div>
                <p>{{ item.firstCountryName }}</p>
                <p class="text-xs">{{ item.firstCountryCurrency }}</p>
              </div>
            </div>
            <div class="detail bg-first w-16 rounded h-7">
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chosenPayment:"Deposit",
      CreateSignalSideBarList: [
        {
          id: '1',
          firstCountryName: 'GBP',
          firstCountryCurrency: 'British Pound',
          firstCountryFlag: 'CHF.png',
          pip: '+86 Pips',
          number: '1.98482',
          text: 'ECB President United',
          littleNum: '3x',
          secondCountryName: 'CHF',
          secondCountryCurrency: 'Swiss Franc',
          secondCountryFlag: 'switzerland-flag-round-medium.png',
        },
        {
          id: '2',
          firstCountryName: 'GBP',
          firstCountryCurrency: 'British Pound',
          firstCountryFlag: 'CHF.png',
          pip: '+86 Pips',
          number: '1.98482',
          text: 'ECB President United',
          littleNum: '3x',
          secondCountryName: 'CHF',
          secondCountryCurrency: 'Swiss Franc',
          secondCountryFlag: 'switzerland-flag-round-medium.png',
        },
        {
          id: '3',
          firstCountryName: 'GBP',
          firstCountryCurrency: 'British Pound',
          firstCountryFlag: 'CHF.png',
          pip: '+86 Pips',
          number: '1.98482',
          text: 'ECB President United',
          littleNum: '3x',
          secondCountryName: 'CHF',
          secondCountryCurrency: 'Swiss Franc',
          secondCountryFlag: 'switzerland-flag-round-medium.png',
        },
        {
          id: '4',
          firstCountryName: 'GBP',
          firstCountryCurrency: 'British Pound',
          firstCountryFlag: 'CHF.png',
          pip: '+86 Pips',
          number: '1.98482',
          text: 'ECB President United',
          littleNum: '3x',
          secondCountryName: 'CHF',
          secondCountryCurrency: 'Swiss Franc',
          secondCountryFlag: 'switzerland-flag-round-medium.png',
        },
        {
          id: '5',
          firstCountryName: 'GBP',
          firstCountryCurrency: 'British Pound',
          firstCountryFlag: 'CHF.png',
          pip: '+86 Pips',
          number: '1.98482',
          text: 'ECB President United',
          littleNum: '3x',
          secondCountryName: 'CHF',
          secondCountryCurrency: 'Swiss Franc',
          secondCountryFlag: 'switzerland-flag-round-medium.png',
        },
        {
          id: '6',
          firstCountryName: 'GBP',
          firstCountryCurrency: 'British Pound',
          firstCountryFlag: 'CHF.png',
          pip: '+86 Pips',
          number: '1.98482',
          text: 'ECB President United',
          littleNum: '3x',
          secondCountryName: 'CHF',
          secondCountryCurrency: 'Swiss Franc',
          secondCountryFlag: 'switzerland-flag-round-medium.png',
        },
        {
          id: '7',
          firstCountryName: 'GBP',
          firstCountryCurrency: 'British Pound',
          firstCountryFlag: 'CHF.png',
          pip: '+86 Pips',
          number: '1.98482',
          text: 'ECB President United',
          littleNum: '3x',
          secondCountryName: 'CHF',
          secondCountryCurrency: 'Swiss Franc',
          secondCountryFlag: 'switzerland-flag-round-medium.png',
        },
        {
          id: '8',
          firstCountryName: 'GBP',
          firstCountryCurrency: 'British Pound',
          firstCountryFlag: 'CHF.png',
          pip: '+86 Pips',
          number: '1.98482',
          text: 'ECB President United',
          littleNum: '3x',
          secondCountryName: 'CHF',
          secondCountryCurrency: 'Swiss Franc',
          secondCountryFlag: 'switzerland-flag-round-medium.png',
        },
        {
          id: '9',
          firstCountryName: 'GBP',
          firstCountryCurrency: 'British Pound',
          firstCountryFlag: 'CHF.png',
          pip: '+86 Pips',
          number: '1.98482',
          text: 'ECB President United',
          littleNum: '3x',
          secondCountryName: 'CHF',
          secondCountryCurrency: 'Swiss Franc',
          secondCountryFlag: 'switzerland-flag-round-medium.png',
        },
        {
          id: '10',
          firstCountryName: 'GBP',
          firstCountryCurrency: 'British Pound',
          firstCountryFlag: 'CHF.png',
          pip: '+86 Pips',
          number: '1.98482',
          text: 'ECB President United',
          littleNum: '3x',
          secondCountryName: 'CHF',
          secondCountryCurrency: 'Swiss Franc',
          secondCountryFlag: 'switzerland-flag-round-medium.png',
        },
        {
          id: '11',
          firstCountryName: 'GBP',
          firstCountryCurrency: 'British Pound',
          firstCountryFlag: 'CHF.png',
          pip: '+86 Pips',
          number: '1.98482',
          text: 'ECB President United',
          littleNum: '3x',
          secondCountryName: 'CHF',
          secondCountryCurrency: 'Swiss Franc',
          secondCountryFlag: 'switzerland-flag-round-medium.png',
        },
        {
          id: '12',
          firstCountryName: 'GBP',
          firstCountryCurrency: 'British Pound',
          firstCountryFlag: 'CHF.png',
          pip: '+86 Pips',
          number: '1.98482',
          text: 'ECB President United',
          littleNum: '3x',
          secondCountryName: 'CHF',
          secondCountryCurrency: 'Swiss Franc',
          secondCountryFlag: 'switzerland-flag-round-medium.png',
        },
        {
          id: '13',
          firstCountryName: 'GBP',
          firstCountryCurrency: 'British Pound',
          firstCountryFlag: 'CHF.png',
          pip: '+86 Pips',
          number: '1.98482',
          text: 'ECB President United',
          littleNum: '3x',
          secondCountryName: 'CHF',
          secondCountryCurrency: 'Swiss Franc',
          secondCountryFlag: 'switzerland-flag-round-medium.png',
        },
        {
          id: '14',
          firstCountryName: 'GBP',
          firstCountryCurrency: 'British Pound',
          firstCountryFlag: 'CHF.png',
          pip: '+86 Pips',
          number: '1.98482',
          text: 'ECB President United',
          littleNum: '3x',
          secondCountryName: 'CHF',
          secondCountryCurrency: 'Swiss Franc',
          secondCountryFlag: 'switzerland-flag-round-medium.png',
        },
        {
          id: '15',
          firstCountryName: 'GBP',
          firstCountryCurrency: 'British Pound',
          firstCountryFlag: 'CHF.png',
          pip: '+86 Pips',
          number: '1.98482',
          text: 'ECB President United',
          littleNum: '3x',
          secondCountryName: 'CHF',
          secondCountryCurrency: 'Swiss Franc',
          secondCountryFlag: 'switzerland-flag-round-medium.png',
        },
        {
          id: '16',
          firstCountryName: 'GBP',
          firstCountryCurrency: 'British Pound',
          firstCountryFlag: 'CHF.png',
          pip: '+86 Pips',
          number: '1.98482',
          text: 'ECB President United',
          littleNum: '3x',
          secondCountryName: 'CHF',
          secondCountryCurrency: 'Swiss Franc',
          secondCountryFlag: 'switzerland-flag-round-medium.png',
        },
        {
          id: '17',
          firstCountryName: 'GBP',
          firstCountryCurrency: 'British Pound',
          firstCountryFlag: 'CHF.png',
          pip: '+86 Pips',
          number: '1.98482',
          text: 'ECB President United',
          littleNum: '3x',
          secondCountryName: 'CHF',
          secondCountryCurrency: 'Swiss Franc',
          secondCountryFlag: 'switzerland-flag-round-medium.png',
        },
        {
          id: '18',
          firstCountryName: 'GBP',
          firstCountryCurrency: 'British Pound',
          firstCountryFlag: 'CHF.png',
          pip: '+86 Pips',
          number: '1.98482',
          text: 'ECB President United',
          littleNum: '3x',
          secondCountryName: 'CHF',
          secondCountryCurrency: 'Swiss Franc',
          secondCountryFlag: 'switzerland-flag-round-medium.png',
        },
      ]
    }
  }
}
</script>

