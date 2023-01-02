<template>
  <div class="home-wrapper">
    <HeaderMain/>
    <div class="inner-content flex flex-wrap justify-between items-start">
      <div class="col text-white">
        <div class="section w-full p-5 mb-3 big-box">
          <div class="title pb-3">
            <h3>Last Income</h3>
          </div>
          <div class="inner w-full">
            <ul>
              <li v-for="item in lastIncomeList" :key="index" class="flex justify-between items-center text-sm py-2">
                <div class="user flex justify-center items-center">
                  <div class="user-info flex justify-center items-center mr-2">
                    <img class="w-8 h-8 mr-2" :src="require(`~/assets/images/${item.photo}`)" alt="">
                    <p>{{ item.fullName }}</p>
                  </div>
                  <div class="currency text-black text-xs text-center">
                    <p>{{ item.currency }}</p>
                  </div>
                </div>
                <div class="country flex items-end justify-center">
                  <img class="w-4 h-4" v-for="country in item.country"
                       :src="require(`~/assets/images/flags/${country.src}`)" alt="">
                </div>
                <div class="amount text-xs">
                  <p>{{ item.amount }}$</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="section w-full p-5 mb-3 small-box">
          <div class="title pb-3">
            <h3>Forex Premium</h3>
          </div>
          <div class="inner w-full">
            <ul>
              <li v-for="item in forexPremiumList" :key="index" class="flex justify-between items-center py-2">
                <p>{{ item.title }}</p>
                <p>{{ item.amount }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col text-white">
        <div class="section w-full p-5 mb-3 small-box insight-sec">
          <div class="title pb-3">
            <h3>Insight</h3>
          </div>
          <div class="inner w-full text-black mt-2">
            <ul class="grid grid-cols-2 gap-2.5 gap-x-5">
              <li v-for="item in insightList" :key="index" class="w-full flex justify-start items-center pr-2">
                <div class="icon flex justify-center items-center">
                  <img class="w-6 h-6" :src="require(`~/assets/images/icons/${item.icon}`)" alt="">
                </div>
                <div class="flex justify-between items-end">
                  <div class="info ml-2">
                    <p>{{ item.title }}</p>
                    <p class="font-bold">{{ item.amount }}</p>
                  </div>
                  <div class="detail font-bold">
                    <p>{{ item.detail }}</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="section w-full p-5 mb-3 big-box active-forex-sec">
          <div class="title pb-3">
            <h3>Active Forex Signals</h3>
          </div>
          <div class="inner w-full text-black">
            <ul>
              <li v-for="item in activeForexSignalsList" :key="index"
                  class="flex justify-between items-center text-sm py-2">
                <div class="country flex items-end justify-center">
                  <img class="w-4 h-4" v-for="country in item.country"
                       :src="require(`~/assets/images/flags/${country.src}`)" alt="">
                </div>
                <div class="middle text-center">
                  <div class="main w-24">
                    <p>{{ item.number }}</p>
                  </div>
                  <div class="sub flex justify-between items-center mt-1">
                    <p>{{ item.number }}</p>
                    <p>{{ item.number }}</p>
                  </div>
                </div>
                <div class="middle text-center">
                  <div class="main w-16">
                    <p>Sell</p>
                  </div>
                  <div class="sub flex justify-between items-center mt-1">
                    <p>{{ item.pip }}</p>
                    <p>{{ item.secondNumber }}</p>
                  </div>
                </div>
                <div class="btn w-16 text-center">
                  <nuxt-link to="/">
                    Show Signal
                  </nuxt-link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col text-white">
        <div class="section w-full p-5 mb-3 small-box monetization-sec">
          <div class="title pb-3 flex justify-between items-end">
            <div class="flex justify-center items-center">
              <h3>Monetization</h3>
              <div class="inactive bg-white px-2 py-1 ml-2">
                <p>Inactive</p>
              </div>
            </div>
            <div class="currency-type text-black py-1 px-2">
              <button class="w-14 active h-6">Forex</button>
              <button class="w-14 h-full">Crypto</button>
            </div>
          </div>
          <div class="inner w-full">
            <ul>
              <li v-for="item in monetizationList" :key="index" class="flex justify-between items-center py-2">
                <p>{{ item.title }}</p>
                <p>{{ item.amount }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="section w-full p-5 mb-3 big-box active-forex-sec">
          <div class="title pb-3">
            <h3>Active Forex Signals</h3>
          </div>
          <div class="inner w-full text-black">
            <ul>
              <li v-for="item in activeCryptoSignalsList" :key="index"
                  class="flex justify-between items-center text-sm py-2">
                <div class="country flex items-end justify-center">
                  <img class="w-4 h-4" :src="require(`~/assets/images/icons/${item.icon}`)" alt="">
                </div>
                <div class="middle text-center">
                  <div class="main w-24">
                    <p>{{ item.number }}</p>
                  </div>
                  <div class="sub flex justify-between items-center mt-1">
                    <p>{{ item.number }}</p>
                    <p>{{ item.number }}</p>
                  </div>
                </div>
                <div class="flex justify-center items-center text-center">
                  <div class="part mx-1 p-1">
                    <p>{{ item.amount1 }}</p>
                    <p>{{ item.amount2 }}</p>
                  </div>
                  <div class="part p-1">
                    <p>{{ item.amount3 }}</p>
                    <p>{{ item.amount4 }}</p>
                  </div>
                </div>
                <div class="btn w-16 text-center">
                  <nuxt-link to="/">
                    Show Signal
                  </nuxt-link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col text-white">
        <div class="section w-full p-5 mb-3 big-box suggestion-signals-sec">
          <div class="title pb-3 flex justify-between items-end">
            <h3>Suggestion Signals</h3>
            <div class="currency-type text-black py-1 px-2">
              <button class="w-14 active h-6">Forex</button>
              <button class="w-14 h-full">Crypto</button>
            </div>
          </div>
          <div class="inner w-full">
            <ul>
              <li v-for="item in suggestionSignalsList" :key="index"
                  class="flex justify-between items-center text-sm py-2">
                <div class="user flex justify-center items-center">
                  <div class="user-info flex justify-center items-center mr-2">
                    <img class="w-8 h-8 mr-2" :src="require(`~/assets/images/user.jpg`)" alt="">
                    <p>{{ item.name }}</p>
                  </div>
                </div>
                <div class="country flex items-end justify-center">
                  <img class="w-4 h-4" v-for="country in item.country"
                       :src="require(`~/assets/images/flags/${country.src}`)" alt="">
                </div>
                <div class="win-rate text-center">
                  <p>{{item.winRate}}</p>
                  <p class="text-xs">Winrate</p>
                </div>
                <div class="verified text-center">
                  <p v-if="item.verified===true">Verified</p>
                  <p>MQL5</p>
                </div>
                <div class="btn text-black py-1 px-2">
                  <nuxt-link to="/">Show Detail</nuxt-link>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="section w-full p-5 mb-3 small-box">
          <div class="title pb-3">
            <h3>Crypto Premium</h3>
          </div>
          <div class="inner w-full">
            <ul>
              <li v-for="item in forexPremiumList" :key="index" class="flex justify-between items-center py-2">
                <p>{{ item.title }}</p>
                <p>{{ item.amount }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lastIncomeList: [
        {
          fullName: 'Elham Talebianzade',
          photo: 'user.jpg',
          currency: 'Forex',
          country: [
            {
              src: 'CHF.png',
            },
            {
              src: 'USD.png',
            },
          ],
          amount: 0.03,
        },
        {
          fullName: 'Elham Talebianzade',
          photo: 'user.jpg',
          currency: 'Crypto',
          country: [
            {
              src: 'CHF.png',
            },
            {
              src: 'USD.png',
            },
          ],
          amount: 0.03,
        },
        {
          fullName: 'Elham Talebianzade',
          photo: 'user.jpg',
          currency: 'Forex',
          country: [
            {
              src: 'CHF.png',
            },
            {
              src: 'USD.png',
            },
          ],
          amount: 0.03,
        },
        {
          fullName: 'Elham Talebianzade',
          photo: 'user.jpg',
          currency: 'Crypto',
          country: [
            {
              src: 'CHF.png',
            },
            {
              src: 'USD.png',
            },
          ],
          amount: 0.03,
        },
        {
          fullName: 'Elham Talebianzade',
          photo: 'user.jpg',
          currency: 'Forex',
          country: [
            {
              src: 'CHF.png',
            },
            {
              src: 'USD.png',
            },
          ],
          amount: 0.03,
        },
        {
          fullName: 'Elham Talebianzade',
          photo: 'user.jpg',
          currency: 'Crypto',
          country: [
            {
              src: 'CHF.png',
            },
            {
              src: 'USD.png',
            },
          ],
          amount: 0.03,
        },
        {
          fullName: 'Elham Talebianzade',
          photo: 'user.jpg',
          currency: 'Forex',
          country: [
            {
              src: 'CHF.png',
            },
            {
              src: 'USD.png',
            },
          ],
          amount: 0.03,
        },
        {
          fullName: 'Elham Talebianzade',
          photo: 'user.jpg',
          currency: 'Crypto',
          country: [
            {
              src: 'CHF.png',
            },
            {
              src: 'USD.png',
            },
          ],
          amount: 0.03,
        },
        {
          fullName: 'Elham Talebianzade',
          photo: 'user.jpg',
          currency: 'Crypto',
          country: [
            {
              src: 'CHF.png',
            },
            {
              src: 'USD.png',
            },
          ],
          amount: 0.03,
        },
      ],
      forexPremiumList: [
        {
          title: 'Duration',
          amount: '00 - 00 - 00 00'
        },
        {
          title: 'Total Signals',
          amount: '487'
        },
        {
          title: 'Take Profit Signals',
          amount: '129'
        },
        {
          title: 'Stop Loss Signals',
          amount: '315'
        },
        {
          title: 'Result by Pips',
          amount: '5.42K'
        },
        {
          title: 'Minumum Profit',
          amount: '150$'
        },
      ],
      insightList: [
        {
          icon: 'iPad Pro 11in – 268.png',
          title: 'Shared Inventory',
          amount: '17,847.61$',
          detail: '0.00'
        },
        {
          icon: 'iPad Pro 11in – 268.png',
          title: 'Payment Timer',
          amount: '07 : 21 : 44 : 27 Days',
          detail: '00'
        },
        {
          icon: 'iPad Pro 11in – 268.png',
          title: 'Forex Monetization',
          amount: '20.00$',
          detail: '0.00'
        },
        {
          icon: 'iPad Pro 11in – 268.png',
          title: 'Forex Winrate',
          amount: '74.06%',
          detail: '0.00%'
        },
        {
          icon: 'iPad Pro 11in – 268.png',
          title: 'Forex Net Profit by Pips',
          amount: '261.612K',
          detail: '0'
        },
        {
          icon: 'iPad Pro 11in – 268.png',
          title: 'Forex Activity',
          amount: '7 Months 23 Days',
          detail: '0days'
        },
        {
          icon: 'iPad Pro 11in – 268.png',
          title: 'Financial Partners',
          amount: '648 Partners',
          detail: '0'
        },
        {
          icon: 'iPad Pro 11in – 268.png',
          title: 'Payment Amount',
          amount: '48.16$',
          detail: '0.00$'
        },
        {
          icon: 'iPad Pro 11in – 268.png',
          title: 'Crypto Monetization',
          amount: '28.16$',
          detail: '0.00$'
        },
        {
          icon: 'iPad Pro 11in – 268.png',
          title: 'Crypto Winrate',
          amount: '24.91%',
          detail: '0.00%'
        },
        {
          icon: 'iPad Pro 11in – 268.png',
          title: 'Crypto Net Profit by Percentage',
          amount: '4825.94%',
          detail: '0%'
        },
        {
          icon: 'iPad Pro 11in – 268.png',
          title: 'Crypto Activity',
          amount: '3 Years 6 Month 27 Days',
          detail: '0days'
        },
      ],
      activeForexSignalsList: [
        {
          number: 1.95297,
          pip: +51,
          secondNumber: 5.10,
          country: [
            {
              src: 'CHF.png',
            },
            {
              src: 'USD.png',
            },
          ],
        },
        {
          number: 1.95297,
          pip: +51,
          secondNumber: 5.10,
          country: [
            {
              src: 'CHF.png',
            },
            {
              src: 'USD.png',
            },
          ],
        },
        {
          number: 1.95297,
          pip: +51,
          secondNumber: 5.10,
          country: [
            {
              src: 'CHF.png',
            },
            {
              src: 'USD.png',
            },
          ],
        },
        {
          number: 1.95297,
          pip: +51,
          secondNumber: 5.10, country: [
            {
              src: 'CHF.png',
            },
            {
              src: 'USD.png',
            },
          ],
        },
        {
          number: 1.95297,
          pip: +51,
          secondNumber: 5.10, country: [
            {
              src: 'CHF.png',
            },
            {
              src: 'USD.png',
            },
          ],
        },
        {
          number: 1.95297,
          pip: +51,
          secondNumber: 5.10, country: [
            {
              src: 'CHF.png',
            },
            {
              src: 'USD.png',
            },
          ],
        },
        {
          number: 1.95297,
          pip: +51,
          secondNumber: 5.10, country: [
            {
              src: 'CHF.png',
            },
            {
              src: 'USD.png',
            },
          ],
        },
        {
          number: 1.95297,
          pip: +51,
          secondNumber: 5.10, country: [
            {
              src: 'CHF.png',
            },
            {
              src: 'USD.png',
            },
          ],
        },
        {
          number: 1.95297,
          pip: +51,
          secondNumber: 5.10, country: [
            {
              src: 'CHF.png',
            },
            {
              src: 'USD.png',
            },
          ],
        },
      ],
      monetizationList: [
        {
          title: 'Total Create Signals',
          amount: '514'
        },
        {
          title: 'Total Take Profit',
          amount: '256'
        },
        {
          title: 'Take Stop Loss',
          amount: '129'
        },
        {
          title: 'Total Income',
          amount: '5140.00$'
        },
        {
          title: 'Winrate Signals',
          amount: '48.92%'
        },
        {
          title: 'Use by User',
          amount: '147'
        },
      ],
      activeCryptoSignalsList: [
        {
          icon: 'iPad Pro 11in – 274.png',
          number: 1.95297,
          amount1: '24H%',
          amount2: '0.43%',
          amount3: '24H$',
          amount4: '324.11$',
        },
        {
          icon: 'iPad Pro 11in – 274.png',
          number: 1.95297,
          amount1: '24H%',
          amount2: '0.43%',
          amount3: '24H$',
          amount4: '324.11$',
        },
        {
          icon: 'iPad Pro 11in – 274.png',
          number: 1.95297,
          amount1: '24H%',
          amount2: '0.43%',
          amount3: '24H$',
          amount4: '324.11$',
        },
        {
          icon: 'iPad Pro 11in – 274.png',
          number: 1.95297,
          amount1: '24H%',
          amount2: '0.43%',
          amount3: '24H$',
          amount4: '324.11$',
        },
        {
          icon: 'iPad Pro 11in – 274.png',
          number: 1.95297,
          amount1: '24H%',
          amount2: '0.43%',
          amount3: '24H$',
          amount4: '324.11$',
        },
        {
          icon: 'iPad Pro 11in – 274.png',
          number: 1.95297,
          amount1: '24H%',
          amount2: '0.43%',
          amount3: '24H$',
          amount4: '324.11$',
        },
        {
          icon: 'iPad Pro 11in – 274.png',
          number: 1.95297,
          amount1: '24H%',
          amount2: '0.43%',
          amount3: '24H$',
          amount4: '324.11$',
        },
        {
          icon: 'iPad Pro 11in – 274.png',
          number: 1.95297,
          amount1: '24H%',
          amount2: '0.43%',
          amount3: '24H$',
          amount4: '324.11$',
        },
        {
          icon: 'iPad Pro 11in – 274.png',
          number: 1.95297,
          amount1: '24H%',
          amount2: '0.43%',
          amount3: '24H$',
          amount4: '324.11$',
        },
      ],
      suggestionSignalsList: [
        {
          name: 'Emadian',
          country: [
            {
              src: 'CHF.png',
            },
            {
              src: 'USD.png',
            },
          ],
          winRate: '76.32%',
          verified: true,
        },
        {
          name: 'Emadian',
          country: [
            {
              src: 'CHF.png',
            },
            {
              src: 'USD.png',
            },
          ],
          winRate: '76.32%',
          verified: true,
        },
        {
          name: 'Emadian',
          country: [
            {
              src: 'CHF.png',
            },
            {
              src: 'USD.png',
            },
          ],
          winRate: '76.32%',
          verified: true,
        },
        {
          name: 'Emadian',
          country: [
            {
              src: 'CHF.png',
            },
            {
              src: 'USD.png',
            },
          ],
          winRate: '76.32%',
          verified: true,
        },
        {
          name: 'Emadian',
          country: [
            {
              src: 'CHF.png',
            },
            {
              src: 'USD.png',
            },
          ],
          winRate: '76.32%',
          verified: true,
        },
        {
          name: 'Emadian',
          country: [
            {
              src: 'CHF.png',
            },
            {
              src: 'USD.png',
            },
          ],
          winRate: '76.32%',
          verified: true,
        },
        {
          name: 'Emadian',
          country: [
            {
              src: 'CHF.png',
            },
            {
              src: 'USD.png',
            },
          ],
          winRate: '76.32%',
          verified: true,
        },
        {
          name: 'Emadian',
          country: [
            {
              src: 'CHF.png',
            },
            {
              src: 'USD.png',
            },
          ],
          winRate: '76.32%',
          verified: true,
        },
        {
          name: 'Emadian',
          country: [
            {
              src: 'CHF.png',
            },
            {
              src: 'USD.png',
            },
          ],
          winRate: '76.32%',
          verified: true,
        },
      ]
    }
  }
}
</script>

