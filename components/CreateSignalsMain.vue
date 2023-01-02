<template>
  <div class="create-signals-wrapper">
    <HeaderMain/>
    <div class="inner-content flex justify-between items-start">
      <CreateSignalsSideBar/>
      <div class="main-content">
        <!--    Notification Bar    -->
        <div class="notification-wrapper w-full">
          <div class="inner-content relative flex justify-center items-center">
            <div class="close absolute top-1 right-1">
              <button>
                <img class="h-8 w-8" :src="require(`~/assets/images/icons/close-white.png`)" alt="close">
              </button>
            </div>
            <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda autem consectetur,
              cum cumque.</p>
          </div>
        </div>
        <!--    Brokers    -->
        <div class="brokers-wrapper bg-second rounded mt-2 p-3 text-white h-72">
          <div class="title flex justify-between border-b border-white pb-2 items-center">
            <div class="partition flex justify-start items-center">
              <h3 class="mr-10">Brokers</h3>
              <div class="currency-type-wrapper w-64 flex justify-center items-center">
                <div class="currency-type text-black py-1 px-2">
                  <button class="active h-6">Brokers</button>
                  <button class="h-full">Exchanges</button>
                </div>
              </div>
            </div>
            <div class="partition">
              <div class="currency-type-wrapper page-numbers w-64 flex justify-center items-center">
                <div class="currency-type text-black py-1 px-2">
                  <button class="h-full">1</button>
                  <button class="active h-6">2</button>
                  <button class="h-full">3</button>
                  <button class="h-full">4</button>
                </div>
              </div>
            </div>
          </div>
          <div class="content">
            <ul class="flex flex-wrap justify-between items-center">
              <li v-for="item in BrokersList" :key="item.id"
                  class="flex justify-between items-center border-b border-dashed border-white py-2">
                <div class="title flex justify-start items-center">
                  <img class="w-6 h-6 mr-2 border-circle border border-white"
                       :src="require(`~/assets/images/icons/${item.icon}`)" alt="">
                  <p class="text-xs">{{ item.name }}</p>
                </div>
                <div class="btn">
                  <button class="text-xs text-black bg-first w-24 py-1 rounded">Create Account</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!--    Position    -->
        <div class="position-wrapper flex justify-between items-center bg-second rounded mt-2 p-3 text-white">
          <h3 class="mr-10">Position</h3>
          <div class="currency-type-wrapper position flex justify-center items-center">
            <div class="currency-type text-black py-1 px-2">
              <button class="active h-6">SELL</button>
              <button class="h-full">SELL LIMIT</button>
              <button class="h-full">SELL STOP</button>
              <button class="h-full">BUY</button>
              <button class="h-full">BUY LIMIT</button>
              <button class="h-full">BUY STOP</button>
            </div>
          </div>
        </div>
        <!--    Position Data    -->
        <div class="position-wrapper flex justify-between items-center bg-second rounded mt-2 p-3 text-white">
          <h3 class="mr-10">Position Data</h3>
          <div class="currency-type-wrapper position-data flex justify-center items-center">
            <div class="currency-type text-black py-1 flex justify-between items-center">
              <button class="h-8">STOP LOSS</button>
              <button class="h-8">SELL STOP</button>
              <button class="h-8">...</button>
            </div>
          </div>
        </div>
        <!--    Time Frame    -->
        <div class="position-wrapper flex justify-between items-center bg-second rounded mt-2 p-3 text-white">
          <h3 class="mr-10">Time Frame</h3>
          <div class="currency-type-wrapper time-frame flex justify-center items-center">
            <div class="currency-type text-black py-1 px-2">
              <button class="active h-6">M1</button>
              <button class="h-full">M5</button>
              <button class="h-full">M15</button>
              <button class="h-full">M30</button>
              <button class="h-full">H1</button>
              <button class="h-full">H4</button>
              <button class="h-full">Daily</button>
            </div>
          </div>
        </div>
        <!--   Submit Button     -->
        <div class="submit-btn w-full mt-3 flex justify-center items-center">
          <button class="text-white rounded bg-second w-32 py-2 px-3 text-sm">Submit</button>
        </div>
        <!--   History Signals    -->
        <div class="brokers-wrapper history-signals-wrapper bg-second rounded mt-2 p-3 text-white h-96">
          <div class="title flex justify-between border-b border-white pb-2 items-center">
            <div class="partition flex justify-start items-center">
              <h3 class="mr-10">History Signals</h3>
              <div class="currency-type-wrapper w-64 flex justify-center items-center">
                <div class="currency-type text-black py-1 px-2">
                  <button class="active h-6">Brokers</button>
                  <button class="h-full">Exchanges</button>
                </div>
              </div>
            </div>
            <div class="partition">
              <div class="currency-type-wrapper page-numbers w-64 flex justify-center items-center">
                <div class="currency-type text-black py-1 px-2">
                  <button class="h-full">1</button>
                  <button class="active h-6">2</button>
                  <button class="h-full">3</button>
                  <button class="h-full">4</button>
                </div>
              </div>
            </div>
          </div>
          <div class="content mt-2">
            <ul class="flex justify-between items-center border-b border-white pb-2">
              <li v-for="titleItem in HistorySignalsListTitle" :key="index">
                <p>{{ titleItem.title }}</p>
              </li>
            </ul>
            <ul class="w-full value">
              <li class="w-full flex justify-between items-center border-b border-dashed border-white py-2"
                  v-for="item in HistorySignalsListAmount" :key="item.id">
                <p>{{ item.amount1 }}</p>
                <div class="country flex justify-center items-end">
                  <img class="w-5 h-5 border-circle border border-white" v-for="countryItem in item.amount2Array"
                       :key="index" :src="require(`~/assets/images/flags/${countryItem.url}`)" alt="">
                </div>
                <p>{{ item.amount3 }}</p>
                <p>{{ item.amount4 }}</p>
                <p>{{ item.amount5 }}</p>
                <p>{{ item.amount6 }}</p>
                <p>{{ item.amount7 }}</p>
                <p>{{ item.amount8 }}</p>
                <p>{{ item.amount9 }}</p>
                <p>{{ item.amount10 }}</p>
                <p>{{ item.amount11 }}</p>
                <p>{{ item.amount12 }}</p>
                <p>{{ item.amount13 }}</p>
                <p class="bg-first text-black px-3 py-1 rounded">{{ item.amount14 }}</p>
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
      BrokersList: [
        {
          id: 1,
          name: 'None',
          icon: 'iPad Pro 11in – 274.png',
        },
        {
          id: 2,
          name: 'Grand Capital',
          icon: 'iPad Pro 11in – 274.png',
        },
        {
          id: 3,
          name: 'Forex Time',
          icon: 'iPad Pro 11in – 274.png',
        },
        {
          id: 4,
          name: 'Windsor Brokers',
          icon: 'iPad Pro 11in – 274.png',
        },
        {
          id: 5,
          name: 'Amarkets',
          icon: 'iPad Pro 11in – 274.png',
        },
        {
          id: 6,
          name: 'Grand Capital',
          icon: 'iPad Pro 11in – 274.png',
        },
        {
          id: 7,
          name: 'None',
          icon: 'iPad Pro 11in – 274.png',
        },
        {
          id: 8,
          name: 'Grand Capital',
          icon: 'iPad Pro 11in – 274.png',
        },
        {
          id: 9,
          name: 'Forex Time',
          icon: 'iPad Pro 11in – 274.png',
        },
        {
          id: 10,
          name: 'Amarkets',
          icon: 'iPad Pro 11in – 274.png',
        },
        {
          id: 11,
          name: 'Grand Capital',
          icon: 'iPad Pro 11in – 274.png',
        },
        {
          id: 12,
          name: 'Forex Time',
          icon: 'iPad Pro 11in – 274.png',
        },
        {
          id: 13,
          name: 'None',
          icon: 'iPad Pro 11in – 274.png',
        },
        {
          id: 14,
          name: 'Amarkets',
          icon: 'iPad Pro 11in – 274.png',
        },
        {
          id: 15,
          name: 'None',
          icon: 'iPad Pro 11in – 274.png',
        },
        {
          id: 16,
          name: 'Forex Time',
          icon: 'iPad Pro 11in – 274.png',
        },
      ],
      HistorySignalsListAmount: [
        {
          id: 0,
          amount1: '#5D8W1F7X',
          amount2Array: [
            {
              url: 'NOK.png',
            },
            {
              url: 'JPY.png',
            },
          ],
          amount3: '4 December 2022',
          amount4: '18:42 AM',
          amount5: 'Buy Limit',
          amount6: '1.92187',
          amount7: '1.92814',
          amount8: '1.92814',
          amount9: 'H4',
          amount10: '+184 Pips',
          amount11: '-34 Pips',
          amount12: '+17 Pips',
          amount13: '40 Minute ago',
          amount14: 'Active',
        },
        {
          id: 1,
          amount1: '#5D8W1F7X',
          amount2Array: [
            {
              url: 'NOK.png',
            },
            {
              url: 'JPY.png',
            },
          ],
          amount3: '4 December 2022',
          amount4: '18:42 AM',
          amount5: 'Buy Limit',
          amount6: '1.92187',
          amount7: '1.92814',
          amount8: '1.92814',
          amount9: 'H4',
          amount10: '+184 Pips',
          amount11: '-34 Pips',
          amount12: '+17 Pips',
          amount13: '40 Minute ago',
          amount14: 'Active',
        },
        {
          id: 2,
          amount1: '#5D8W1F7X',
          amount2Array: [
            {
              url: 'NOK.png',
            },
            {
              url: 'JPY.png',
            },
          ],
          amount3: '4 December 2022',
          amount4: '18:42 AM',
          amount5: 'Buy Limit',
          amount6: '1.92187',
          amount7: '1.92814',
          amount8: '1.92814',
          amount9: 'H4',
          amount10: '+184 Pips',
          amount11: '-34 Pips',
          amount12: '+17 Pips',
          amount13: '40 Minute ago',
          amount14: 'Active',
        },
        {
          id: 3,
          amount1: '#5D8W1F7X',
          amount2Array: [
            {
              url: 'NOK.png',
            },
            {
              url: 'JPY.png',
            },
          ],
          amount3: '4 December 2022',
          amount4: '18:42 AM',
          amount5: 'Buy Limit',
          amount6: '1.92187',
          amount7: '1.92814',
          amount8: '1.92814',
          amount9: 'H4',
          amount10: '+184 Pips',
          amount11: '-34 Pips',
          amount12: '+17 Pips',
          amount13: '40 Minute ago',
          amount14: 'Active',
        },
        {
          id: 4,
          amount1: '#5D8W1F7X',
          amount2Array: [
            {
              url: 'NOK.png',
            },
            {
              url: 'JPY.png',
            },
          ],
          amount3: '4 December 2022',
          amount4: '18:42 AM',
          amount5: 'Buy Limit',
          amount6: '1.92187',
          amount7: '1.92814',
          amount8: '1.92814',
          amount9: 'H4',
          amount10: '+184 Pips',
          amount11: '-34 Pips',
          amount12: '+17 Pips',
          amount13: '40 Minute ago',
          amount14: 'Active',
        },
        {
          id: 5,
          amount1: '#5D8W1F7X',
          amount2Array: [
            {
              url: 'NOK.png',
            },
            {
              url: 'JPY.png',
            },
          ],
          amount3: '4 December 2022',
          amount4: '18:42 AM',
          amount5: 'Buy Limit',
          amount6: '1.92187',
          amount7: '1.92814',
          amount8: '1.92814',
          amount9: 'H4',
          amount10: '+184 Pips',
          amount11: '-34 Pips',
          amount12: '+17 Pips',
          amount13: '40 Minute ago',
          amount14: 'Active',
        },
      ],
      HistorySignalsListTitle: [
        {
          title: 'Number',
        },
        {
          title: 'Country',
        },
        {
          title: 'Date',
        },
        {
          title: 'Time',
        },
        {
          title: 'Order',
        },
        {
          title: 'Open Signal',
        },
        {
          title: 'Take profit',
        },
        {
          title: 'Stop Loss',
        },
        {
          title: 'Time Frame',
        },
        {
          title: 'Reward',
        },
        {
          title: 'Risk',
        },
        {
          title: 'Result',
        },
        {
          title: 'Time Send',
        },
        {
          title: 'Status',
        }
      ]
    }
  }
}
</script>

