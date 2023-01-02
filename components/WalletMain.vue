<template>
  <div class="create-signals-wrapper wallet-wrapper">
    <HeaderMain/>
    <div class="inner-content flex justify-between items-start">
      <WalletSideBar/>
      <div class="main-content">
        <!--    Brokers    -->
        <div class="box-wrapper w-full flex justify-between items-center">
          <div class="box-item bg-second rounded p-4">
            <div class="inner bg-first w-full h-full rounded p-3">
              <div class="title border-b border-black pb-3 flex justify-between items-center">
                <p class="text-xs">Internal Transfer</p>
                <p>Commision per Trasnfer 0.3%</p>
              </div>
              <div class="content">
                <ul class="text-xs">
                  <li class="border-b border-dashed border-black pt-3 pb-1 flex justify-between items-center">
                    <p>Transfer Amount</p>
                    <p>2681.00$</p>
                  </li>
                  <li class="border-b border-dashed border-black pt-3 pb-1 flex justify-between items-center">
                    <p>Commission Transfer</p>
                    <p>26.14$</p>
                  </li>
                  <li class="bg-second w-full h-8 px-2 flex justify-between items-center mt-2 py-1 rounded">
                    <input type="text" name="WalletNumber" placeholder="Wallet Number"
                           class="bg-transparent h-full w-4/5 focus:outline-none text-white">
                    <button class="bg-first w-20 py-1 rounded">Paste</button>
                  </li>
                </ul>
                <div class="submission mt-3">
                  <div class="user flex justify-start items-center">
                    <img class="w-10 h-10 border-circle border border-white mr-2"
                         :src="require(`~/assets/images/user.jpg`)" alt="">
                    <p class="text-sm">Helsinky Zhaprozhia</p>
                  </div>
                  <div class="form mt-3 flex justify-center items-center flex-col">
                    <textarea class="bg-second text-white w-full rounded p-2 text-xs">Discription</textarea>
                    <button class="bg-second text-white w-32 text-xs py-2 rounded mt-3">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="box-item bg-second rounded p-4">
            <div class="inner bg-first w-full h-full rounded p-3">
              <div class="title border-b border-black pb-3">
                <p class="text-xs">Fast Withdrawal</p>
                <p></p>
              </div>
              <div class="content">
                <ul>
                  <li v-for="item in FastWithdrawal" :key="item.id" class="border-b border-dashed border-black py-1">
                    <div class="row flex justify-between items-center">
                      <div class="currency flex justify-start items-end">
                        <img class="w-8 h-8 border-circle mr-2" :src="require(`~/assets/images/icons/${item.icon}`)"
                             alt="">
                        <div class="text">
                          <p class="text-xs">{{ item.currency }}</p>
                          <span
                            class="bg-second w-10 text-center inline-block rounded py-1 text-white">{{ item.currencyDetail }}</span>
                        </div>
                      </div>
                      <div class="amount flex justify-center items-center">
                        <div class="bg-second rounded p-1 w-20 text-white flex justify-between items-center">
                          <p>Amount</p>
                          <p>{{ item.amount1 }}</p>
                        </div>
                        <div class="bg-second rounded p-1 text-white ml-1">
                          <p>{{ item.amount2 }}</p>
                        </div>
                      </div>
                      <div class="btn">
                        <button class=" bg-second w-12 text-center py-1 text-white rounded">Submit</button>
                      </div>
                    </div>
                    <div class="row flex justify-between items-center account-num mt-2">
                      <p>Account Number</p>
                      <p class="break-words w-2/3">{{ item.accountNum }}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="box-item bg-second rounded p-4">
            <div class="inner bg-first w-full h-full rounded">

            </div>
          </div>
        </div>
        <!--   History Signals    -->
        <div class="brokers-wrapper history-signals-wrapper bg-second rounded mt-2 p-3 text-white h-96">
          <div class="title flex justify-between border-b border-white pb-2 items-center">
            <div class="partition flex justify-start items-center">
              <h3 class="mr-10">History Wallet</h3>
              <div class="currency-type-wrapper w-72 flex justify-center items-center">
                <div class="currency-type text-black py-1 px-2">
                  <button class="h-6">Deposit</button>
                  <button class="h-6 active">Internal Transfer</button>
                  <button class="h-6">Withdrawal</button>
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
              <li v-for="titleItem in WalletSignalsListTitle" :key="index">
                <p>{{ titleItem.title }}</p>
              </li>
            </ul>
            <ul class="w-full value">
              <li class="w-full flex justify-between items-center border-b border-dashed border-white py-2"
                  v-for="item in WalletSignalsListAmount" :key="item.id">
                <div class="col">
                  <p>{{ item.amount1 }}</p>
                </div>
                <div class="col">
                  <div class="country flex justify-start items-end" v-for="(paymentItem,index) in item.amount2">
                    <img class="w-5 h-5 mr-1 border-circle border border-white"
                         :key="index" :src="require(`~/assets/images/icons/${paymentItem.icon}`)" alt="">
                    <p>{{paymentItem.title}}</p>
                  </div>
                </div>
                <div class="col">
                  <p>{{ item.amount3 }}</p>
                </div>
                <div class="col">
                  <p>{{ item.amount4 }}</p>
                </div>
                <div class="col">
                  <p>{{ item.amount5 }}</p>
                </div>
                <div class="col">
                  <p>{{ item.amount6 }}</p>
                </div>
                <div class="col">
                  <p>{{ item.amount7 }}</p>
                </div>
                <div class="col">
                  <p>{{ item.amount8 }}</p>
                </div>
                <div class="col">
                  <p class="bg-first text-black px-3 py-1 w-16 text-center rounded">{{ item.amount9 }}</p>
                </div>
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
      FastWithdrawal: [
        {
          id: 1,
          icon: 'iPad Pro 11in – 277.png',
          currency: 'USDT',
          currencyDetail: 'Trc20',
          amount1: '28.47$',
          amount2: '59.17',
          accountNum: 'asdsad81AS8D1SA78D1d9D1SA98D17ADASFsdGgf8JHG1J4H5G',
        },
        {
          id: 2,
          icon: 'iPad Pro 11in – 277.png',
          currency: 'Ethereum',
          currencyDetail: 'Trc20',
          amount1: '28.47$',
          amount2: '59.17',
          accountNum: 'asdsad81AS8D1SA78D1d9D1SA98D17ADASFsdGgf8JHG1J4H5G',
        },
        {
          id: 3,
          icon: 'iPad Pro 11in – 277.png',
          currency: 'USDT',
          currencyDetail: 'Trc20',
          amount1: '28.47$',
          amount2: '59.17',
          accountNum: 'asdsad81AS8D1SA78D1d9D1SA98D17ADASFsdGgf8JHG1J4H5G',
        },
        {
          id: 4,
          icon: 'iPad Pro 11in – 277.png',
          currency: 'USDT',
          currencyDetail: 'Trc20',
          amount1: '28.47$',
          amount2: '59.17',
          accountNum: 'asdsad81AS8D1SA78D1d9D1SA98D17ADASFsdGgf8JHG1J4H5G',
        },
        {
          id: 5,
          icon: 'iPad Pro 11in – 277.png',
          currency: 'USDT',
          currencyDetail: 'Trc20',
          amount1: '28.47$',
          amount2: '59.17',
          accountNum: 'asdsad81AS8D1SA78D1d9D1SA98D17ADASFsdGgf8JHG1J4H5G',
        },
      ],
      WalletSignalsListAmount: [
        {
          id: 0,
          amount1: '621729',
          amount2:[
            {
              icon:'iPad Pro 11in – 277.png',
              title:'Tether trc20',
            }
          ],
          amount3: '28/07/2023',
          amount4: '16:27 PM',
          amount5: 'asdsad81AS8D1SA78D1d9D1SA98D\n' +
            '17ADASFsdGgf8JHG1J4H5G',
          amount6: '62.81$',
          amount7: 'asdsad81AS8D1SA78D1d9D1SA98D\n' +
            '17ADASFsdGgf8JHG1J4H5G',
          amount8: '42 Minutes Ago',
          amount9: 'Active',
        },
      ],
      WalletSignalsListTitle: [
        {
          title: 'Number',
        },
        {
          title: 'Payment System',
        },
        {
          title: 'Date',
        },
        {
          title: 'Time',
        },
        {
          title: 'Account Number',
        },
        {
          title: 'Amount',
        },
        {
          title: 'Hash',
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

