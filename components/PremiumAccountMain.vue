<template>
  <div class="premium-account-wrapper">
    <HeaderPremium/>
    <NotificationBox/>
    <!--   Currency Type   -->
    <div class="currency-type-wrapper flex justify-center items-center">
      <div class="currency-type text-black py-1 px-2">
        <button class="active h-6">Forex Premium</button>
        <button class="h-full">Crypto Premium</button>
      </div>
    </div>

    <!--   Body   -->
    <div class="inner-content">
      <!--   Desktop   -->
      <div class="desktop hidden lg:flex justify-between items-center flex-wrap pt-4">
        <div class="section p-5 mb-3 small-box text-white" v-for="item in PremiumAccountList" :key="item.id">
          <div class="title pb-3 flex justify-between items-center">
            <div class="icon">
              <img class="w-10 h-10" :src="require(`~/assets/images/icons/${item.icon}`)" alt="">
            </div>
            <div class="title-text text-xl">
              <p>{{ item.title }}</p>
            </div>
            <div class="amount">
              <p>{{ item.amount }}</p>
            </div>
          </div>
          <div class="inner w-full">
            <ul>
              <li v-for="contentItem in item.content" :key="contentItem.id" class="flex justify-between items-center py-2">
                <p>{{ contentItem.title }}</p>
                <div class="flex justify-center items-center">
                  <p>{{ contentItem.amount }}</p>
                  <div v-if="contentItem.title==='Referral Join'" class="help ml-1 relative">
                    <img class="w-5 h-5" @mouseenter="help = true;id = item.id" @mouseleave="help=false;id=null"
                         :src="require(`~/assets/images/icons/${contentItem.icon}`)" alt="">
                    <p v-show="help===true && id === item.id" class="text-xs p-1 rounded w-20 absolute right-4 top-4">
                      {{ contentItem.helpText }}</p>
                  </div>
                </div>
              </li>
            </ul>
            <p class="text-xs mt-3">
              agar ye signal ro copy konin va dobare send konin dar
              lahze hesab ton ban mishe
            </p>
          </div>
          <div class="btn flex justify-center items-center mt-3">
            <button class="rounded text-black py-2 px-5 text-xs w-18">
              Buy Premium
            </button>
          </div>
        </div>
      </div>
      <!--   Mobile   -->
      <div class="mobile-view lg:hidden md:inline">
        <VueSlickCarousel class="mb-3 mt-4" v-bind="settings">
          <div class="slide section px-2 pt-2 mb-3 small-box text-white" v-for="item in PremiumAccountList" :key="item.id">
            <div class="title pb-3 flex justify-between items-center">
              <div class="icon">
                <img class="w-10 h-10" :src="require(`~/assets/images/icons/${item.icon}`)" alt="">
              </div>
              <div class="title-text text-xl">
                <p>{{ item.title }}</p>
              </div>
              <div class="amount">
                <p>{{ item.amount }}</p>
              </div>
            </div>
            <div class="inner w-full">
              <ul>
                <li v-for="contentItem in item.content" :key="contentItem.id" class="flex justify-between items-center py-2">
                  <p>{{ contentItem.title }}</p>
                  <div class="flex justify-center items-center">
                    <p>{{ contentItem.amount }}</p>
                    <div v-if="contentItem.title==='Referral Join'" class="help ml-1 relative">
                      <img class="w-5 h-5" @mouseenter="help = true;id = item.id" @mouseleave="help=false;id=null"
                           :src="require(`~/assets/images/icons/${contentItem.icon}`)" alt="">
                      <p v-show="help===true && id === item.id" class="text-xs p-1 rounded w-20 absolute right-4 top-4">
                        {{ contentItem.helpText }}</p>
                    </div>
                  </div>
                </li>
              </ul>
              <p class="text-xs mt-3">
                agar ye signal ro copy konin va dobare send konin dar
                lahze hesab ton ban mishe
              </p>
            </div>
            <div class="btn flex justify-center items-center mt-3">
              <button class="rounded text-black py-2 px-5 text-xs w-18">
                Buy Premium
              </button>
            </div>
          </div>
          <template #customPaging="page">
            <div class="custom-dot">
              <img class="w-3 h-3" :src="require(`~/assets/images/icons/blue-dot.png`)" alt="">
              <img class="w-4 h-4" :src="require(`~/assets/images/icons/black-dot.png`)" alt="">
            </div>
            <div class="slick-active">
            </div>
          </template>
        </VueSlickCarousel>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
export default {
  components: {VueSlickCarousel},
  data() {
    return {
      help: false,
      id: null,
      settings: {
        "dots": true,
        "dotsClass": "slick-dots custom-dot-class",
        "speed": 500,
        "slidesToShow": 4,
        "slidesToScroll": 4,
        "arrows": false,
        // "fade": true,
        "responsive": [
          {
            "breakpoint": 1250,
            "settings": {
              "slidesToShow": 3,
              "slidesToScroll": 3,
            }
          },
          {
            "breakpoint": 950,
            "settings": {
              "slidesToShow": 2,
              "slidesToScroll": 2,
            }
          },
          {
            "breakpoint": 750,
            "settings": {
              "slidesToShow": 1,
              "slidesToScroll": 1,
            }
          },
          {
            "breakpoint": 480,
            "settings": {
              "slidesToShow": 1,
              "slidesToScroll": 1
            }
          }
        ]
      },
      PremiumAccountList: [
        {
          title: 'Jupiter',
          id: 1,
          amount: '2147$',
          icon: 'iPad Pro 11in – 259.png',
          content: [
            {
              id:1,
              title: 'Duration',
              amount: '1Month + 1Week',
            },
            {
              id:2,
              title: 'Daily Signals',
              amount: 'Unlimited',
            },
            {
              id:3,
              title: 'Winrate by Letexia',
              amount: 'Up to 70%',
            },
            {
              id:4,
              title: 'Referral Join',
              amount: 'Yes',
              icon: 'help.png',
              helpText: 'lorem ipsum dollor sit guide text sample'
            },
            {
              id:5,
              title: 'Minimum Account',
              amount: '5.00$',
            },
            {
              id:6,
              title: 'MQL5 Check',
              amount: 'Yes, Verified',
            },
            {
              id:7,
              title: 'Active Market',
              amount: 'Forex',
            },
          ]
        },
        {
          title: 'Jupiter',
          id: 2,
          amount: '2147$',
          icon: 'iPad Pro 11in – 259.png',
          content: [
            {
              id:1,
              title: 'Duration',
              amount: '1Month + 1Week',
            },
            {
              id:2,
              title: 'Daily Signals',
              amount: 'Unlimited',
            },
            {
              id:3,
              title: 'Winrate by Letexia',
              amount: 'Up to 70%',
            },
            {
              id:4,
              title: 'Referral Join',
              amount: 'Yes',
              icon: 'help.png',
              helpText: 'lorem ipsum dollor sit guide text sample'
            },
            {
              id:5,
              title: 'Minimum Account',
              amount: '5.00$',
            },
            {
              id:6,
              title: 'MQL5 Check',
              amount: 'Yes, Verified',
            },
            {
              id:7,
              title: 'Active Market',
              amount: 'Forex',
            },
          ]
        },
        {
          title: 'Jupiter',
          id: 3,
          amount: '2147$',
          icon: 'iPad Pro 11in – 259.png',
          content: [
            {
              id:1,
              title: 'Duration',
              amount: '1Month + 1Week',
            },
            {
              id:2,
              title: 'Daily Signals',
              amount: 'Unlimited',
            },
            {
              id:3,
              title: 'Winrate by Letexia',
              amount: 'Up to 70%',
            },
            {
              id:4,
              title: 'Referral Join',
              amount: 'Yes',
              icon: 'help.png',
              helpText: 'lorem ipsum dollor sit guide text sample'
            },
            {
              id:5,
              title: 'Minimum Account',
              amount: '5.00$',
            },
            {
              id:6,
              title: 'MQL5 Check',
              amount: 'Yes, Verified',
            },
            {
              id:7,
              title: 'Active Market',
              amount: 'Forex',
            },
          ]
        },
        {
          title: 'Jupiter',
          id: 4,
          amount: '2147$',
          icon: 'iPad Pro 11in – 259.png',
          content: [
            {
              id:1,
              title: 'Duration',
              amount: '1Month + 1Week',
            },
            {
              id:2,
              title: 'Daily Signals',
              amount: 'Unlimited',
            },
            {
              id:3,
              title: 'Winrate by Letexia',
              amount: 'Up to 70%',
            },
            {
              id:4,
              title: 'Referral Join',
              amount: 'Yes',
              icon: 'help.png',
              helpText: 'lorem ipsum dollor sit guide text sample'
            },
            {
              id:5,
              title: 'Minimum Account',
              amount: '5.00$',
            },
            {
              id:6,
              title: 'MQL5 Check',
              amount: 'Yes, Verified',
            },
            {
              id:7,
              title: 'Active Market',
              amount: 'Forex',
            },
          ]
        },
        {
          title: 'Jupiter',
          id: 5,
          amount: '2147$',
          icon: 'iPad Pro 11in – 259.png',
          content: [
            {
              id:1,
              title: 'Duration',
              amount: '1Month + 1Week',
            },
            {
              id:2,
              title: 'Daily Signals',
              amount: 'Unlimited',
            },
            {
              id:3,
              title: 'Winrate by Letexia',
              amount: 'Up to 70%',
            },
            {
              id:4,
              title: 'Referral Join',
              amount: 'Yes',
              icon: 'help.png',
              helpText: 'lorem ipsum dollor sit guide text sample'
            },
            {
              id:5,
              title: 'Minimum Account',
              amount: '5.00$',
            },
            {
              id:6,
              title: 'MQL5 Check',
              amount: 'Yes, Verified',
            },
            {
              id:7,
              title: 'Active Market',
              amount: 'Forex',
            },
          ]
        },
        {
          title: 'Jupiter',
          id: 6,
          amount: '2147$',
          icon: 'iPad Pro 11in – 259.png',
          content: [
            {
              id:1,
              title: 'Duration',
              amount: '1Month + 1Week',
            },
            {
              id:2,
              title: 'Daily Signals',
              amount: 'Unlimited',
            },
            {
              id:3,
              title: 'Winrate by Letexia',
              amount: 'Up to 70%',
            },
            {
              id:4,
              title: 'Referral Join',
              amount: 'Yes',
              icon: 'help.png',
              helpText: 'lorem ipsum dollor sit guide text sample'
            },
            {
              id:5,
              title: 'Minimum Account',
              amount: '5.00$',
            },
            {
              id:6,
              title: 'MQL5 Check',
              amount: 'Yes, Verified',
            },
            {
              id:7,
              title: 'Active Market',
              amount: 'Forex',
            },
          ]
        },
        {
          title: 'Jupiter',
          id: 7,
          amount: '2147$',
          icon: 'iPad Pro 11in – 259.png',
          content: [
            {
              id:1,
              title: 'Duration',
              amount: '1Month + 1Week',
            },
            {
              id:2,
              title: 'Daily Signals',
              amount: 'Unlimited',
            },
            {
              id:3,
              title: 'Winrate by Letexia',
              amount: 'Up to 70%',
            },
            {
              id:4,
              title: 'Referral Join',
              amount: 'Yes',
              icon: 'help.png',
              helpText: 'lorem ipsum dollor sit guide text sample'
            },
            {
              id:5,
              title: 'Minimum Account',
              amount: '5.00$',
            },
            {
              id:6,
              title: 'MQL5 Check',
              amount: 'Yes, Verified',
            },
            {
              id:7,
              title: 'Active Market',
              amount: 'Forex',
            },
          ]
        },
        {
          title: 'Jupiter',
          id: 8,
          amount: '2147$',
          icon: 'iPad Pro 11in – 259.png',
          content: [
            {
              id:1,
              title: 'Duration',
              amount: '1Month + 1Week',
            },
            {
              id:2,
              title: 'Daily Signals',
              amount: 'Unlimited',
            },
            {
              id:3,
              title: 'Winrate by Letexia',
              amount: 'Up to 70%',
            },
            {
              id:4,
              title: 'Referral Join',
              amount: 'Yes',
              icon: 'help.png',
              helpText: 'lorem ipsum dollor sit guide text sample'
            },
            {
              id:5,
              title: 'Minimum Account',
              amount: '5.00$',
            },
            {
              id:6,
              title: 'MQL5 Check',
              amount: 'Yes, Verified',
            },
            {
              id:7,
              title: 'Active Market',
              amount: 'Forex',
            },
          ]
        },
        {
          title: 'Jupiter',
          id: 9,
          amount: '2147$',
          icon: 'iPad Pro 11in – 259.png',
          content: [
            {
              id:1,
              title: 'Duration',
              amount: '1Month + 1Week',
            },
            {
              id:2,
              title: 'Daily Signals',
              amount: 'Unlimited',
            },
            {
              id:3,
              title: 'Winrate by Letexia',
              amount: 'Up to 70%',
            },
            {
              id:4,
              title: 'Referral Join',
              amount: 'Yes',
              icon: 'help.png',
              helpText: 'lorem ipsum dollor sit guide text sample'
            },
            {
              id:5,
              title: 'Minimum Account',
              amount: '5.00$',
            },
            {
              id:6,
              title: 'MQL5 Check',
              amount: 'Yes, Verified',
            },
            {
              id:7,
              title: 'Active Market',
              amount: 'Forex',
            },
          ]
        },
        {
          title: 'Jupiter',
          id: 10,
          amount: '2147$',
          icon: 'iPad Pro 11in – 259.png',
          content: [
            {
              id:1,
              title: 'Duration',
              amount: '1Month + 1Week',
            },
            {
              id:2,
              title: 'Daily Signals',
              amount: 'Unlimited',
            },
            {
              id:3,
              title: 'Winrate by Letexia',
              amount: 'Up to 70%',
            },
            {
              id:4,
              title: 'Referral Join',
              amount: 'Yes',
              icon: 'help.png',
              helpText: 'lorem ipsum dollor sit guide text sample'
            },
            {
              id:5,
              title: 'Minimum Account',
              amount: '5.00$',
            },
            {
              id:6,
              title: 'MQL5 Check',
              amount: 'Yes, Verified',
            },
            {
              id:7,
              title: 'Active Market',
              amount: 'Forex',
            },
          ]
        },
        {
          title: 'Jupiter',
          id: 11,
          amount: '2147$',
          icon: 'iPad Pro 11in – 259.png',
          content: [
            {
              id:1,
              title: 'Duration',
              amount: '1Month + 1Week',
            },
            {
              id:2,
              title: 'Daily Signals',
              amount: 'Unlimited',
            },
            {
              id:3,
              title: 'Winrate by Letexia',
              amount: 'Up to 70%',
            },
            {
              id:4,
              title: 'Referral Join',
              amount: 'Yes',
              icon: 'help.png',
              helpText: 'lorem ipsum dollor sit guide text sample'
            },
            {
              id:5,
              title: 'Minimum Account',
              amount: '5.00$',
            },
            {
              id:6,
              title: 'MQL5 Check',
              amount: 'Yes, Verified',
            },
            {
              id:7,
              title: 'Active Market',
              amount: 'Forex',
            },
          ]
        },
        {
          title: 'Jupiter',
          id: 12,
          amount: '2147$',
          icon: 'iPad Pro 11in – 259.png',
          content: [
            {
              id:1,
              title: 'Duration',
              amount: '1Month + 1Week',
            },
            {
              id:2,
              title: 'Daily Signals',
              amount: 'Unlimited',
            },
            {
              id:3,
              title: 'Winrate by Letexia',
              amount: 'Up to 70%',
            },
            {
              id:4,
              title: 'Referral Join',
              amount: 'Yes',
              icon: 'help.png',
              helpText: 'lorem ipsum dollor sit guide text sample'
            },
            {
              id:5,
              title: 'Minimum Account',
              amount: '5.00$',
            },
            {
              id:6,
              title: 'MQL5 Check',
              amount: 'Yes, Verified',
            },
            {
              id:7,
              title: 'Active Market',
              amount: 'Forex',
            },
          ]
        },
      ],
    }
  }
}
</script>

