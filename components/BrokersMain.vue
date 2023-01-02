<template>
  <div class="brokers-wrapper">
    <HeaderBrokers/>
    <NotificationBox/>
    <!--  Body  -->
    <div class="inner-content pt-4 grid gap-2 grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2">
      <div class="section p-5 mb-3 small-box text-white" v-for="item in BrokersList" :key="item.id">
        <div class="title pb-3 flex justify-between items-center">
          <div class="market flex justify-start items-end">
            <img class="w-10 h-10 border border-white mr-2" :src="require(`~/assets/images/icons/${item.marketIcon}`)"
                 alt="">
            <div class="">
              <span class="text-xs rounded border border-white px-2">{{ item.years }}</span>
              <p>{{ item.marketNAme }}</p>
            </div>
          </div>
          <div class="country flex justify-start items-end">
            <img class="w-10 h-10 border border-white mr-2" :src="require(`~/assets/images/flags/${item.countryIcon}`)"
                 alt="">
            <div class="">
              <span class="text-xs rounded border border-white px-2">{{ item.countryType }}</span>
              <p>{{ item.countryName }}</p>
            </div>
          </div>
        </div>
        <div class="inner w-full">
          <ul>
            <li v-for="contentItem in item.content" :key="item.id" class="flex justify-between items-center py-2">
              <p>{{ contentItem.title }}</p>
              <div class="flex justify-center items-center">
                <p>{{ contentItem.amount }}</p>
                <p class="mx-1 bg-second rounded px-2 border border-white text-xs" v-if="contentItem.title === 'Regulated'"
                   v-for="contentAmount in contentItem.amountContent" :key="item.id">{{ contentAmount.value }}</p>
                <img class="w-6 h-6 border-circle mx-1 border border-white" v-if="contentItem.title === 'Payment Systems'" v-for="contentAmount in contentItem.amountContent"
                     :key="item.id" :src="require(`~/assets/images/icons/${contentAmount.system}`)" alt="">
              </div>
            </li>
          </ul>
        </div>
        <div class="btn flex justify-center items-center mt-3 w-full">
          <button class="rounded py-2 px-5 w-full border border-white">
            Create Account
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      help: false,
      id: null,
      BrokersList: [
        {
          id: 1,
          marketNAme: 'Roboforex',
          years: '12 Years',
          marketIcon: 'iPad Pro 11in – 277.png',
          countryName: 'Denmanrk',
          countryType: 'Headquarter',
          countryIcon: 'DKK.png',
          content: [
            {
              title: 'Regulated',
              amountContent: [
                {
                  value: 'ASIC',
                },
                {
                  value: 'CYSEC',
                },
              ],
            },
            {
              title: 'Platform',
              amount: 'MT4 - MT5 - Rtrader',
            },
            {
              title: 'Minimum Deposit',
              amount: '1.00 USD',
            },
            {
              title: 'Minimum Spread',
              amount: '0.00 Pips',
            },
            {
              title: 'Maximum Leverage',
              amount: '1:2000',
            },
            {
              title: 'Payment Systems',
              amountContent: [
                {
                  system: 'iPad Pro 11in – 275.png',
                },
                {
                  system: 'iPad Pro 11in – 275.png',
                },
                {
                  system: 'iPad Pro 11in – 275.png',
                },
                {
                  system: 'iPad Pro 11in – 275.png',
                },
                {
                  system: 'iPad Pro 11in – 275.png',
                },
              ],
            },
            {
              title: 'Accounts',
              amount: 'Standard - ECN - CopyFx',
            },
            {
              title: 'Referral - Affilate Code',
              amount: 'CMYT',
            },
          ]
        },
        {
          id: 2,
          marketNAme: 'Amarkets',
          years: '12 Years',
          marketIcon: 'iPad Pro 11in – 277.png',
          countryName: 'Denmanrk',
          countryType: 'Headquarter',
          countryIcon: 'DKK.png',
          content: [
            {
              title: 'Regulated',
              amountContent: [
                {
                  value: 'ASIC',
                },
                {
                  value: 'CYSEC',
                },
              ],
            },
            {
              title: 'Platform',
              amount: 'MT4 - MT5 - Rtrader',
            },
            {
              title: 'Minimum Deposit',
              amount: '1.00 USD',
            },
            {
              title: 'Minimum Spread',
              amount: '0.00 Pips',
            },
            {
              title: 'Maximum Leverage',
              amount: '1:2000',
            },
            {
              title: 'Payment Systems',
              amountContent: [
                {
                  system: 'iPad Pro 11in – 275.png',
                },
                {
                  system: 'iPad Pro 11in – 275.png',
                },
                {
                  system: 'iPad Pro 11in – 275.png',
                },
                {
                  system: 'iPad Pro 11in – 275.png',
                },
                {
                  system: 'iPad Pro 11in – 275.png',
                },
              ],
            },
            {
              title: 'Accounts',
              amount: 'Standard - ECN - CopyFx',
            },
            {
              title: 'Referral - Affilate Code',
              amount: 'CMYT',
            },
          ]
        },
        {
          id: 3,
          marketNAme: 'Grand Capital',
          years: '12 Years',
          marketIcon: 'iPad Pro 11in – 277.png',
          countryName: 'Denmanrk',
          countryType: 'Headquarter',
          countryIcon: 'DKK.png',
          content: [
            {
              title: 'Regulated',
              amountContent: [
                {
                  value: 'ASIC',
                },
                {
                  value: 'CYSEC',
                },
              ],
            },
            {
              title: 'Platform',
              amount: 'MT4 - MT5 - Rtrader',
            },
            {
              title: 'Minimum Deposit',
              amount: '1.00 USD',
            },
            {
              title: 'Minimum Spread',
              amount: '0.00 Pips',
            },
            {
              title: 'Maximum Leverage',
              amount: '1:2000',
            },
            {
              title: 'Payment Systems',
              amountContent: [
                {
                  system: 'iPad Pro 11in – 275.png',
                },
                {
                  system: 'iPad Pro 11in – 275.png',
                },
                {
                  system: 'iPad Pro 11in – 275.png',
                },
                {
                  system: 'iPad Pro 11in – 275.png',
                },
                {
                  system: 'iPad Pro 11in – 275.png',
                },
              ],
            },
            {
              title: 'Accounts',
              amount: 'Standard - ECN - CopyFx',
            },
            {
              title: 'Referral - Affilate Code',
              amount: 'CMYT',
            },
          ]
        },
        {
          id: 4,
          marketNAme: 'ForexTime',
          years: '12 Years',
          marketIcon: 'iPad Pro 11in – 277.png',
          countryName: 'Denmanrk',
          countryType: 'Headquarter',
          countryIcon: 'DKK.png',
          content: [
            {
              title: 'Regulated',
              amountContent: [
                {
                  value: 'ASIC',
                },
                {
                  value: 'CYSEC',
                },
              ],
            },
            {
              title: 'Platform',
              amount: 'MT4 - MT5 - Rtrader',
            },
            {
              title: 'Minimum Deposit',
              amount: '1.00 USD',
            },
            {
              title: 'Minimum Spread',
              amount: '0.00 Pips',
            },
            {
              title: 'Maximum Leverage',
              amount: '1:2000',
            },
            {
              title: 'Payment Systems',
              amountContent: [
                {
                  system: 'iPad Pro 11in – 275.png',
                },
                {
                  system: 'iPad Pro 11in – 275.png',
                },
                {
                  system: 'iPad Pro 11in – 275.png',
                },
                {
                  system: 'iPad Pro 11in – 275.png',
                },
                {
                  system: 'iPad Pro 11in – 275.png',
                },
              ],
            },
            {
              title: 'Accounts',
              amount: 'Standard - ECN - CopyFx',
            },
            {
              title: 'Referral - Affilate Code',
              amount: 'CMYT',
            },
          ]
        },
        {
          id: 5,
          marketNAme: 'Roboforex',
          years: '12 Years',
          marketIcon: 'iPad Pro 11in – 277.png',
          countryName: 'Denmanrk',
          countryType: 'Headquarter',
          countryIcon: 'DKK.png',
          content: [
            {
              title: 'Regulated',
              amountContent: [
                {
                  value: 'ASIC',
                },
                {
                  value: 'CYSEC',
                },
              ],
            },
            {
              title: 'Platform',
              amount: 'MT4 - MT5 - Rtrader',
            },
            {
              title: 'Minimum Deposit',
              amount: '1.00 USD',
            },
            {
              title: 'Minimum Spread',
              amount: '0.00 Pips',
            },
            {
              title: 'Maximum Leverage',
              amount: '1:2000',
            },
            {
              title: 'Payment Systems',
              amountContent: [
                {
                  system: 'iPad Pro 11in – 275.png',
                },
                {
                  system: 'iPad Pro 11in – 275.png',
                },
                {
                  system: 'iPad Pro 11in – 275.png',
                },
                {
                  system: 'iPad Pro 11in – 275.png',
                },
                {
                  system: 'iPad Pro 11in – 275.png',
                },
              ],
            },
            {
              title: 'Accounts',
              amount: 'Standard - ECN - CopyFx',
            },
            {
              title: 'Referral - Affilate Code',
              amount: 'CMYT',
            },
          ]
        },
        {
          id: 6,
          marketNAme: 'Alpari',
          years: '12 Years',
          marketIcon: 'iPad Pro 11in – 277.png',
          countryName: 'Denmanrk',
          countryType: 'Headquarter',
          countryIcon: 'DKK.png',
          content: [
            {
              title: 'Regulated',
              amountContent: [
                {
                  value: 'ASIC',
                },
                {
                  value: 'CYSEC',
                },
              ],
            },
            {
              title: 'Platform',
              amount: 'MT4 - MT5 - Rtrader',
            },
            {
              title: 'Minimum Deposit',
              amount: '1.00 USD',
            },
            {
              title: 'Minimum Spread',
              amount: '0.00 Pips',
            },
            {
              title: 'Maximum Leverage',
              amount: '1:2000',
            },
            {
              title: 'Payment Systems',
              amountContent: [
                {
                  system: 'iPad Pro 11in – 275.png',
                },
                {
                  system: 'iPad Pro 11in – 275.png',
                },
                {
                  system: 'iPad Pro 11in – 275.png',
                },
                {
                  system: 'iPad Pro 11in – 275.png',
                },
                {
                  system: 'iPad Pro 11in – 275.png',
                },
              ],
            },
            {
              title: 'Accounts',
              amount: 'Standard - ECN - CopyFx',
            },
            {
              title: 'Referral - Affilate Code',
              amount: 'CMYT',
            },
          ]
        },
        {
          id: 7,
          marketNAme: 'HYCM',
          years: '12 Years',
          marketIcon: 'iPad Pro 11in – 277.png',
          countryName: 'Denmanrk',
          countryType: 'Headquarter',
          countryIcon: 'DKK.png',
          content: [
            {
              title: 'Regulated',
              amountContent: [
                {
                  value: 'ASIC',
                },
                {
                  value: 'CYSEC',
                },
              ],
            },
            {
              title: 'Platform',
              amount: 'MT4 - MT5 - Rtrader',
            },
            {
              title: 'Minimum Deposit',
              amount: '1.00 USD',
            },
            {
              title: 'Minimum Spread',
              amount: '0.00 Pips',
            },
            {
              title: 'Maximum Leverage',
              amount: '1:2000',
            },
            {
              title: 'Payment Systems',
              amountContent: [
                {
                  system: 'iPad Pro 11in – 275.png',
                },
                {
                  system: 'iPad Pro 11in – 275.png',
                },
                {
                  system: 'iPad Pro 11in – 275.png',
                },
                {
                  system: 'iPad Pro 11in – 275.png',
                },
                {
                  system: 'iPad Pro 11in – 275.png',
                },
              ],
            },
            {
              title: 'Accounts',
              amount: 'Standard - ECN - CopyFx',
            },
            {
              title: 'Referral - Affilate Code',
              amount: 'CMYT',
            },
          ]
        },
        {
          id: 8,
          marketNAme: 'Broker name',
          years: '12 Years',
          marketIcon: 'iPad Pro 11in – 277.png',
          countryName: 'Denmanrk',
          countryType: 'Headquarter',
          countryIcon: 'DKK.png',
          content: [
            {
              title: 'Regulated',
              amountContent: [
                {
                  value: 'ASIC',
                },
                {
                  value: 'CYSEC',
                },
              ],
            },
            {
              title: 'Platform',
              amount: 'MT4 - MT5 - Rtrader',
            },
            {
              title: 'Minimum Deposit',
              amount: '1.00 USD',
            },
            {
              title: 'Minimum Spread',
              amount: '0.00 Pips',
            },
            {
              title: 'Maximum Leverage',
              amount: '1:2000',
            },
            {
              title: 'Payment Systems',
              amountContent: [
                {
                  system: 'iPad Pro 11in – 275.png',
                },
                {
                  system: 'iPad Pro 11in – 275.png',
                },
                {
                  system: 'iPad Pro 11in – 275.png',
                },
                {
                  system: 'iPad Pro 11in – 275.png',
                },
                {
                  system: 'iPad Pro 11in – 275.png',
                },
              ],
            },
            {
              title: 'Accounts',
              amount: 'Standard - ECN - CopyFx',
            },
            {
              title: 'Referral - Affilate Code',
              amount: 'CMYT',
            },
          ]
        },
      ],
    }
  }
}
</script>

