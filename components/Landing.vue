<template>
  <div class="landing-wrapper pt-4">
    <div class="title h-16 bg-second rounded px-6 text-white flex justify-start items-center">
      <div class="logo">Logo</div>
      <p>Risk Warning text</p>
    </div>
    <div class="inner-content">
      <div class="text flex justify-center items-center flex-col w-11/12 lg:w-3/5 md:w-3/5 sm:w-4/5 text-center">
        <h1 class="text-5xl mb-3">EXPLORE AND DETAILS MORE</h1>
        <p class="text-lg">EXPLORE AND DETAILS MOREEXPLORE AND DETAILS MOREEXPLORE AND
          EXPLORE AND DETAILS MOREEXPLORE AND DETAILS MOREEXPLO
          EXPLORE AND DETAILS MOREEXPLORE AND DETAILS MOREEXPLORE AND DETAILS MORERE AND DETAILS M
          OREDETAILS MORE</p>
      </div>
      <div class="btn-group w-full lg:w-1/4 md:w-2/4 sm:w-3/4 flex justify-between text-center items-center">
        <nuxt-link to="/Login" class="bg-second font-bold w-40 py-2 mx-2 text-white rounded">Login</nuxt-link>
        <nuxt-link to="/Register" class="bg-second font-bold w-40 py-2 mx-2 text-white rounded">Register</nuxt-link>
      </div>
      <div class="box-wrapper flex justify-between items-center flex-wrap">
        <div class="box px-1 mb-3" v-for="(item,index) in SignalsList" :key="index">
          <div class="inner-slide text-white p-3 w-full">
            <div class="title pb-2 flex justify-between items-center">
              <div class="user flex justify-start items-center">
                <img class="w-10 h-10 mr-2" :src="require(`~/assets/images/${item.userPhoto}`)" alt="">
                <p>{{ item.fullName }}</p>
              </div>
              <div class="country-market">
                <div class="post text-black bg-first flex justify-start items-center py-1 px-2 rounded mb-1">
                  <img class="w-6 h-6 mr-2 border-circle" :src="require(`~/assets/images/flags/${item.countryIcon}`)"
                       alt="">
                  <p class="text-xs">{{ item.countryName }}</p>
                </div>
                <div class="post text-black bg-first flex justify-start items-center py-1 px-2 rounded">
                  <img class="w-6 h-6 mr-2 border-circle" :src="require(`~/assets/images/icons/${item.marketIcon}`)"
                       alt="">
                  <p class="text-xs">{{ item.market }}</p>
                </div>
              </div>
            </div>
            <div class="info mt-2 pb-2 flex justify-between items-center">
              <div class="part text-xs" v-for="infoItem in item.info" :key="index">
                <div class="circle-title w-16 h-16 flex justify-center items-center">
                  <p>{{ infoItem.title }}</p>
                </div>
                <p class="text-center mt-1">{{ infoItem.amount }}</p>
              </div>
            </div>
            <div class="countries mt-2 pb-2 flex justify-between items-center">
              <div class="country-item flex justify-start items-center">
                <img class="w-8 h-8 mr-2" :src="require(`~/assets/images/flags/${item.firstCountryIcon}`)" alt="">
                <div class="country-info text-xs">
                  <p>{{ item.firstCountry }}</p>
                  <p>{{ item.firstCountryCurrency }}</p>
                </div>
              </div>
              <div class="trade text-center text-black w-32 text-xs flex justify-start items-center flex-wrap">
                <div class="bg-first main w-full mb-1">
                  <p class="flex justify-center items-start">{{ item.tradeNumber }}
                    <span>{{ item.tradeLittleNumber }}</span></p>
                </div>
                <div class="bg-first mr-1 px-1 sub1 flex justify-start items-center">
                  <img class="w-3 h-3 mr-1" :src="require(`~/assets/images/flags/${item.tradeFlag}`)" alt="">
                  <p>{{ item.tradeText }}</p>
                </div>
                <div class="bg-first sub2">
                  <p>{{ item.tradeNum }}</p>
                </div>
              </div>
              <div class="country-item flex justify-start text-right items-center">
                <div class="country-info text-xs">
                  <p>{{ item.secondCountry }}</p>
                  <p>{{ item.secondCountryCurrency }}</p>
                </div>
                <img class="w-8 h-8 ml-2" :src="require(`~/assets/images/flags/${item.secondCountryIcon}`)" alt="">
              </div>
            </div>
            <div class="trade-info mt-2 pb-2 flex justify-between items-center flex-wrap">
              <div class="box text-black rounded p-1 h-7 mb-1 flex justify-between items-center"
                   v-for="tradeItem in item.tradeInfo" :key="index">
                <div class="title border-0 flex justify-start items-center">
                  <img class="w-5 h-5 mr-2" :src="require(`~/assets/images/flags/${tradeItem.icon}`)" alt="">
                  <p>{{ tradeItem.title }}</p>
                </div>
                <div class="amount">
                  <p>{{ tradeItem.amount }}</p>
                </div>
              </div>
            </div>
            <div class="trade-detail mt-2 pb-2">
              <ul class="grid grid-cols-3 gap-2.5 gap-x-5 pl-4">
                <li v-for="tradeDetail in item.tradeDetail" :key="index"
                    class="w-full flex justify-start items-center pr-2">
                  <div class="icon flex justify-center items-center">
                    <img class="w-6 h-6" :src="require(`~/assets/images/icons/${tradeDetail.tradeIcon}`)" alt="">
                  </div>
                  <div class="flex justify-between items-start flex-col w-full px-1">
                    <div class="info w-full info1 flex justify-between items-center">
                      <p>{{ tradeDetail.title1 }}</p>
                      <p>{{ tradeDetail.amount1 }}</p>
                    </div>
                    <div class="info w-full info2 flex justify-between items-center">
                      <p>{{ tradeDetail.title2 }}</p>
                      <p>{{ tradeDetail.amount2 }}</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="btn flex justify-center items-center">
              <button class="text-center rounded py-2 px-5 text-xs mt-2">
                Show Details
              </button>
            </div>
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
      SignalsList: [
        {
          fullName: 'Helsinky Zhaprozhia',
          userPhoto: 'user.jpg',
          countryName: 'Norway',
          countryIcon: 'NOK.png',
          market: 'Amarkets',
          marketIcon: 'iPad Pro 11in – 271.png',
          info: [
            {
              title: 'MQL5',
              amount: 'Not Verified',
            },
            {
              title: 'Winrate',
              amount: '72.14%',
            },
            {
              title: 'Profits',
              amount: '5.59K',
            }
            ,
            {
              title: 'Signals',
              amount: '18.14K'
            }
          ],
          firstCountry: 'GBP',
          firstCountryCurrency: 'British Pound',
          firstCountryIcon: 'CHF.png',
          secondCountry: 'CHF',
          secondCountryCurrency: 'Swiss Franc',
          secondCountryIcon: 'switzerland-flag-round-medium.png',
          tradeNumber: '1.9847',
          tradeLittleNumber: '4',
          tradeText: 'ECB President United',
          tradeFlag: 'CHF.png',
          tradeNum: '3x',
          tradeInfo: [
            {
              title: 'Take Profit',
              amount: '1.92817',
              icon: 'NOK.png'
            },
            {
              title: 'Reward',
              amount: '+189',
              icon: 'NOK.png'
            },
            {
              title: 'Sell at',
              amount: '1.92817',
              icon: 'NOK.png'
            },
            {
              title: 'Stop Loss',
              amount: '1.92817',
              icon: 'NOK.png'
            },
            {
              title: 'Risk',
              amount: '-54',
              icon: 'NOK.png'
            },
            {
              title: 'Live Result',
              amount: '+86 Pips',
              icon: 'NOK.png'
            },
          ],
          tradeDetail: [
            {
              tradeIcon: 'iPad Pro 11in – 313.png',
              title1: 'Reward',
              amount1: '18.90$',
              title2: 'Risk',
              amount2: '5.40$'
            },
            {
              tradeIcon: 'iPad Pro 11in – 315.png',
              title1: 'Reward',
              amount1: '94.50$',
              title2: 'Risk',
              amount2: '27.00$'
            },
            {
              tradeIcon: 'iPad Pro 11in – 316.png',
              title1: 'Reward',
              amount1: '189.00$',
              title2: 'Risk',
              amount2: '54.00$'
            },
            {
              tradeIcon: 'iPad Pro 11in – 318.png',
              title1: 'Reward',
              amount1: '18.90$',
              title2: 'Risk',
              amount2: '5.40$'
            },
            {
              tradeIcon: 'iPad Pro 11in – 317.png',
              title1: 'Reward',
              amount1: '18.90$',
              title2: 'Risk',
              amount2: '5.40$'
            },
            {
              tradeIcon: 'iPad Pro 11in – 319.png',
              title1: 'Reward',
              amount1: '18.90$',
              title2: 'Risk',
              amount2: '5.40$'
            },
          ]
        },
        {
          fullName: 'Helsinky Zhaprozhia',
          userPhoto: 'user.jpg',
          countryName: 'Norway',
          countryIcon: 'NOK.png',
          market: 'Amarkets',
          marketIcon: 'iPad Pro 11in – 271.png',
          info: [
            {
              title: 'MQL5',
              amount: 'Not Verified',
            },
            {
              title: 'Winrate',
              amount: '72.14%',
            },
            {
              title: 'Profits',
              amount: '5.59K',
            }
            ,
            {
              title: 'Signals',
              amount: '18.14K'
            }
          ],
          firstCountry: 'GBP',
          firstCountryCurrency: 'British Pound',
          firstCountryIcon: 'CHF.png',
          secondCountry: 'CHF',
          secondCountryCurrency: 'Swiss Franc',
          secondCountryIcon: 'switzerland-flag-round-medium.png',
          tradeNumber: '1.9847',
          tradeLittleNumber: '4',
          tradeText: 'ECB President United',
          tradeFlag: 'CHF.png',
          tradeNum: '3x',
          tradeInfo: [
            {
              title: 'Take Profit',
              amount: '1.92817',
              icon: 'NOK.png'
            },
            {
              title: 'Reward',
              amount: '+189',
              icon: 'NOK.png'
            },
            {
              title: 'Sell at',
              amount: '1.92817',
              icon: 'NOK.png'
            },
            {
              title: 'Stop Loss',
              amount: '1.92817',
              icon: 'NOK.png'
            },
            {
              title: 'Risk',
              amount: '-54',
              icon: 'NOK.png'
            },
            {
              title: 'Live Result',
              amount: '+86 Pips',
              icon: 'NOK.png'
            },
          ],
          tradeDetail: [
            {
              tradeIcon: 'iPad Pro 11in – 313.png',
              title1: 'Reward',
              amount1: '18.90$',
              title2: 'Risk',
              amount2: '5.40$'
            },
            {
              tradeIcon: 'iPad Pro 11in – 315.png',
              title1: 'Reward',
              amount1: '94.50$',
              title2: 'Risk',
              amount2: '27.00$'
            },
            {
              tradeIcon: 'iPad Pro 11in – 316.png',
              title1: 'Reward',
              amount1: '189.00$',
              title2: 'Risk',
              amount2: '54.00$'
            },
            {
              tradeIcon: 'iPad Pro 11in – 318.png',
              title1: 'Reward',
              amount1: '18.90$',
              title2: 'Risk',
              amount2: '5.40$'
            },
            {
              tradeIcon: 'iPad Pro 11in – 317.png',
              title1: 'Reward',
              amount1: '18.90$',
              title2: 'Risk',
              amount2: '5.40$'
            },
            {
              tradeIcon: 'iPad Pro 11in – 319.png',
              title1: 'Reward',
              amount1: '18.90$',
              title2: 'Risk',
              amount2: '5.40$'
            },
          ]
        },
        {
          fullName: 'Helsinky Zhaprozhia',
          userPhoto: 'user.jpg',
          countryName: 'Norway',
          countryIcon: 'NOK.png',
          market: 'Amarkets',
          marketIcon: 'iPad Pro 11in – 271.png',
          info: [
            {
              title: 'MQL5',
              amount: 'Not Verified',
            },
            {
              title: 'Winrate',
              amount: '72.14%',
            },
            {
              title: 'Profits',
              amount: '5.59K',
            }
            ,
            {
              title: 'Signals',
              amount: '18.14K'
            }
          ],
          firstCountry: 'GBP',
          firstCountryCurrency: 'British Pound',
          firstCountryIcon: 'CHF.png',
          secondCountry: 'CHF',
          secondCountryCurrency: 'Swiss Franc',
          secondCountryIcon: 'switzerland-flag-round-medium.png',
          tradeNumber: '1.9847',
          tradeLittleNumber: '4',
          tradeText: 'ECB President United',
          tradeFlag: 'CHF.png',
          tradeNum: '3x',
          tradeInfo: [
            {
              title: 'Take Profit',
              amount: '1.92817',
              icon: 'NOK.png'
            },
            {
              title: 'Reward',
              amount: '+189',
              icon: 'NOK.png'
            },
            {
              title: 'Sell at',
              amount: '1.92817',
              icon: 'NOK.png'
            },
            {
              title: 'Stop Loss',
              amount: '1.92817',
              icon: 'NOK.png'
            },
            {
              title: 'Risk',
              amount: '-54',
              icon: 'NOK.png'
            },
            {
              title: 'Live Result',
              amount: '+86 Pips',
              icon: 'NOK.png'
            },
          ],
          tradeDetail: [
            {
              tradeIcon: 'iPad Pro 11in – 313.png',
              title1: 'Reward',
              amount1: '18.90$',
              title2: 'Risk',
              amount2: '5.40$'
            },
            {
              tradeIcon: 'iPad Pro 11in – 315.png',
              title1: 'Reward',
              amount1: '94.50$',
              title2: 'Risk',
              amount2: '27.00$'
            },
            {
              tradeIcon: 'iPad Pro 11in – 316.png',
              title1: 'Reward',
              amount1: '189.00$',
              title2: 'Risk',
              amount2: '54.00$'
            },
            {
              tradeIcon: 'iPad Pro 11in – 318.png',
              title1: 'Reward',
              amount1: '18.90$',
              title2: 'Risk',
              amount2: '5.40$'
            },
            {
              tradeIcon: 'iPad Pro 11in – 317.png',
              title1: 'Reward',
              amount1: '18.90$',
              title2: 'Risk',
              amount2: '5.40$'
            },
            {
              tradeIcon: 'iPad Pro 11in – 319.png',
              title1: 'Reward',
              amount1: '18.90$',
              title2: 'Risk',
              amount2: '5.40$'
            },
          ]
        },
        {
          fullName: 'Helsinky Zhaprozhia',
          userPhoto: 'user.jpg',
          countryName: 'Norway',
          countryIcon: 'NOK.png',
          market: 'Amarkets',
          marketIcon: 'iPad Pro 11in – 271.png',
          info: [
            {
              title: 'MQL5',
              amount: 'Not Verified',
            },
            {
              title: 'Winrate',
              amount: '72.14%',
            },
            {
              title: 'Profits',
              amount: '5.59K',
            }
            ,
            {
              title: 'Signals',
              amount: '18.14K'
            }
          ],
          firstCountry: 'GBP',
          firstCountryCurrency: 'British Pound',
          firstCountryIcon: 'CHF.png',
          secondCountry: 'CHF',
          secondCountryCurrency: 'Swiss Franc',
          secondCountryIcon: 'switzerland-flag-round-medium.png',
          tradeNumber: '1.9847',
          tradeLittleNumber: '4',
          tradeText: 'ECB President United',
          tradeFlag: 'CHF.png',
          tradeNum: '3x',
          tradeInfo: [
            {
              title: 'Take Profit',
              amount: '1.92817',
              icon: 'NOK.png'
            },
            {
              title: 'Reward',
              amount: '+189',
              icon: 'NOK.png'
            },
            {
              title: 'Sell at',
              amount: '1.92817',
              icon: 'NOK.png'
            },
            {
              title: 'Stop Loss',
              amount: '1.92817',
              icon: 'NOK.png'
            },
            {
              title: 'Risk',
              amount: '-54',
              icon: 'NOK.png'
            },
            {
              title: 'Live Result',
              amount: '+86 Pips',
              icon: 'NOK.png'
            },
          ],
          tradeDetail: [
            {
              tradeIcon: 'iPad Pro 11in – 313.png',
              title1: 'Reward',
              amount1: '18.90$',
              title2: 'Risk',
              amount2: '5.40$'
            },
            {
              tradeIcon: 'iPad Pro 11in – 315.png',
              title1: 'Reward',
              amount1: '94.50$',
              title2: 'Risk',
              amount2: '27.00$'
            },
            {
              tradeIcon: 'iPad Pro 11in – 316.png',
              title1: 'Reward',
              amount1: '189.00$',
              title2: 'Risk',
              amount2: '54.00$'
            },
            {
              tradeIcon: 'iPad Pro 11in – 318.png',
              title1: 'Reward',
              amount1: '18.90$',
              title2: 'Risk',
              amount2: '5.40$'
            },
            {
              tradeIcon: 'iPad Pro 11in – 317.png',
              title1: 'Reward',
              amount1: '18.90$',
              title2: 'Risk',
              amount2: '5.40$'
            },
            {
              tradeIcon: 'iPad Pro 11in – 319.png',
              title1: 'Reward',
              amount1: '18.90$',
              title2: 'Risk',
              amount2: '5.40$'
            },
          ]
        },
        {
          fullName: 'Helsinky Zhaprozhia',
          userPhoto: 'user.jpg',
          countryName: 'Norway',
          countryIcon: 'NOK.png',
          market: 'Amarkets',
          marketIcon: 'iPad Pro 11in – 271.png',
          info: [
            {
              title: 'MQL5',
              amount: 'Not Verified',
            },
            {
              title: 'Winrate',
              amount: '72.14%',
            },
            {
              title: 'Profits',
              amount: '5.59K',
            }
            ,
            {
              title: 'Signals',
              amount: '18.14K'
            }
          ],
          firstCountry: 'GBP',
          firstCountryCurrency: 'British Pound',
          firstCountryIcon: 'CHF.png',
          secondCountry: 'CHF',
          secondCountryCurrency: 'Swiss Franc',
          secondCountryIcon: 'switzerland-flag-round-medium.png',
          tradeNumber: '1.9847',
          tradeLittleNumber: '4',
          tradeText: 'ECB President United',
          tradeFlag: 'CHF.png',
          tradeNum: '3x',
          tradeInfo: [
            {
              title: 'Take Profit',
              amount: '1.92817',
              icon: 'NOK.png'
            },
            {
              title: 'Reward',
              amount: '+189',
              icon: 'NOK.png'
            },
            {
              title: 'Sell at',
              amount: '1.92817',
              icon: 'NOK.png'
            },
            {
              title: 'Stop Loss',
              amount: '1.92817',
              icon: 'NOK.png'
            },
            {
              title: 'Risk',
              amount: '-54',
              icon: 'NOK.png'
            },
            {
              title: 'Live Result',
              amount: '+86 Pips',
              icon: 'NOK.png'
            },
          ],
          tradeDetail: [
            {
              tradeIcon: 'iPad Pro 11in – 313.png',
              title1: 'Reward',
              amount1: '18.90$',
              title2: 'Risk',
              amount2: '5.40$'
            },
            {
              tradeIcon: 'iPad Pro 11in – 315.png',
              title1: 'Reward',
              amount1: '94.50$',
              title2: 'Risk',
              amount2: '27.00$'
            },
            {
              tradeIcon: 'iPad Pro 11in – 316.png',
              title1: 'Reward',
              amount1: '189.00$',
              title2: 'Risk',
              amount2: '54.00$'
            },
            {
              tradeIcon: 'iPad Pro 11in – 318.png',
              title1: 'Reward',
              amount1: '18.90$',
              title2: 'Risk',
              amount2: '5.40$'
            },
            {
              tradeIcon: 'iPad Pro 11in – 317.png',
              title1: 'Reward',
              amount1: '18.90$',
              title2: 'Risk',
              amount2: '5.40$'
            },
            {
              tradeIcon: 'iPad Pro 11in – 319.png',
              title1: 'Reward',
              amount1: '18.90$',
              title2: 'Risk',
              amount2: '5.40$'
            },
          ]
        },
        {
          fullName: 'Helsinky Zhaprozhia',
          userPhoto: 'user.jpg',
          countryName: 'Norway',
          countryIcon: 'NOK.png',
          market: 'Amarkets',
          marketIcon: 'iPad Pro 11in – 271.png',
          info: [
            {
              title: 'MQL5',
              amount: 'Not Verified',
            },
            {
              title: 'Winrate',
              amount: '72.14%',
            },
            {
              title: 'Profits',
              amount: '5.59K',
            }
            ,
            {
              title: 'Signals',
              amount: '18.14K'
            }
          ],
          firstCountry: 'GBP',
          firstCountryCurrency: 'British Pound',
          firstCountryIcon: 'CHF.png',
          secondCountry: 'CHF',
          secondCountryCurrency: 'Swiss Franc',
          secondCountryIcon: 'switzerland-flag-round-medium.png',
          tradeNumber: '1.9847',
          tradeLittleNumber: '4',
          tradeText: 'ECB President United',
          tradeFlag: 'CHF.png',
          tradeNum: '3x',
          tradeInfo: [
            {
              title: 'Take Profit',
              amount: '1.92817',
              icon: 'NOK.png'
            },
            {
              title: 'Reward',
              amount: '+189',
              icon: 'NOK.png'
            },
            {
              title: 'Sell at',
              amount: '1.92817',
              icon: 'NOK.png'
            },
            {
              title: 'Stop Loss',
              amount: '1.92817',
              icon: 'NOK.png'
            },
            {
              title: 'Risk',
              amount: '-54',
              icon: 'NOK.png'
            },
            {
              title: 'Live Result',
              amount: '+86 Pips',
              icon: 'NOK.png'
            },
          ],
          tradeDetail: [
            {
              tradeIcon: 'iPad Pro 11in – 313.png',
              title1: 'Reward',
              amount1: '18.90$',
              title2: 'Risk',
              amount2: '5.40$'
            },
            {
              tradeIcon: 'iPad Pro 11in – 315.png',
              title1: 'Reward',
              amount1: '94.50$',
              title2: 'Risk',
              amount2: '27.00$'
            },
            {
              tradeIcon: 'iPad Pro 11in – 316.png',
              title1: 'Reward',
              amount1: '189.00$',
              title2: 'Risk',
              amount2: '54.00$'
            },
            {
              tradeIcon: 'iPad Pro 11in – 318.png',
              title1: 'Reward',
              amount1: '18.90$',
              title2: 'Risk',
              amount2: '5.40$'
            },
            {
              tradeIcon: 'iPad Pro 11in – 317.png',
              title1: 'Reward',
              amount1: '18.90$',
              title2: 'Risk',
              amount2: '5.40$'
            },
            {
              tradeIcon: 'iPad Pro 11in – 319.png',
              title1: 'Reward',
              amount1: '18.90$',
              title2: 'Risk',
              amount2: '5.40$'
            },
          ]
        },
        {
          fullName: 'Helsinky Zhaprozhia',
          userPhoto: 'user.jpg',
          countryName: 'Norway',
          countryIcon: 'NOK.png',
          market: 'Amarkets',
          marketIcon: 'iPad Pro 11in – 271.png',
          info: [
            {
              title: 'MQL5',
              amount: 'Not Verified',
            },
            {
              title: 'Winrate',
              amount: '72.14%',
            },
            {
              title: 'Profits',
              amount: '5.59K',
            }
            ,
            {
              title: 'Signals',
              amount: '18.14K'
            }
          ],
          firstCountry: 'GBP',
          firstCountryCurrency: 'British Pound',
          firstCountryIcon: 'CHF.png',
          secondCountry: 'CHF',
          secondCountryCurrency: 'Swiss Franc',
          secondCountryIcon: 'switzerland-flag-round-medium.png',
          tradeNumber: '1.9847',
          tradeLittleNumber: '4',
          tradeText: 'ECB President United',
          tradeFlag: 'CHF.png',
          tradeNum: '3x',
          tradeInfo: [
            {
              title: 'Take Profit',
              amount: '1.92817',
              icon: 'NOK.png'
            },
            {
              title: 'Reward',
              amount: '+189',
              icon: 'NOK.png'
            },
            {
              title: 'Sell at',
              amount: '1.92817',
              icon: 'NOK.png'
            },
            {
              title: 'Stop Loss',
              amount: '1.92817',
              icon: 'NOK.png'
            },
            {
              title: 'Risk',
              amount: '-54',
              icon: 'NOK.png'
            },
            {
              title: 'Live Result',
              amount: '+86 Pips',
              icon: 'NOK.png'
            },
          ],
          tradeDetail: [
            {
              tradeIcon: 'iPad Pro 11in – 313.png',
              title1: 'Reward',
              amount1: '18.90$',
              title2: 'Risk',
              amount2: '5.40$'
            },
            {
              tradeIcon: 'iPad Pro 11in – 315.png',
              title1: 'Reward',
              amount1: '94.50$',
              title2: 'Risk',
              amount2: '27.00$'
            },
            {
              tradeIcon: 'iPad Pro 11in – 316.png',
              title1: 'Reward',
              amount1: '189.00$',
              title2: 'Risk',
              amount2: '54.00$'
            },
            {
              tradeIcon: 'iPad Pro 11in – 318.png',
              title1: 'Reward',
              amount1: '18.90$',
              title2: 'Risk',
              amount2: '5.40$'
            },
            {
              tradeIcon: 'iPad Pro 11in – 317.png',
              title1: 'Reward',
              amount1: '18.90$',
              title2: 'Risk',
              amount2: '5.40$'
            },
            {
              tradeIcon: 'iPad Pro 11in – 319.png',
              title1: 'Reward',
              amount1: '18.90$',
              title2: 'Risk',
              amount2: '5.40$'
            },
          ]
        },
        {
          fullName: 'Helsinky Zhaprozhia',
          userPhoto: 'user.jpg',
          countryName: 'Norway',
          countryIcon: 'NOK.png',
          market: 'Amarkets',
          marketIcon: 'iPad Pro 11in – 271.png',
          info: [
            {
              title: 'MQL5',
              amount: 'Not Verified',
            },
            {
              title: 'Winrate',
              amount: '72.14%',
            },
            {
              title: 'Profits',
              amount: '5.59K',
            }
            ,
            {
              title: 'Signals',
              amount: '18.14K'
            }
          ],
          firstCountry: 'GBP',
          firstCountryCurrency: 'British Pound',
          firstCountryIcon: 'CHF.png',
          secondCountry: 'CHF',
          secondCountryCurrency: 'Swiss Franc',
          secondCountryIcon: 'switzerland-flag-round-medium.png',
          tradeNumber: '1.9847',
          tradeLittleNumber: '4',
          tradeText: 'ECB President United',
          tradeFlag: 'CHF.png',
          tradeNum: '3x',
          tradeInfo: [
            {
              title: 'Take Profit',
              amount: '1.92817',
              icon: 'NOK.png'
            },
            {
              title: 'Reward',
              amount: '+189',
              icon: 'NOK.png'
            },
            {
              title: 'Sell at',
              amount: '1.92817',
              icon: 'NOK.png'
            },
            {
              title: 'Stop Loss',
              amount: '1.92817',
              icon: 'NOK.png'
            },
            {
              title: 'Risk',
              amount: '-54',
              icon: 'NOK.png'
            },
            {
              title: 'Live Result',
              amount: '+86 Pips',
              icon: 'NOK.png'
            },
          ],
          tradeDetail: [
            {
              tradeIcon: 'iPad Pro 11in – 313.png',
              title1: 'Reward',
              amount1: '18.90$',
              title2: 'Risk',
              amount2: '5.40$'
            },
            {
              tradeIcon: 'iPad Pro 11in – 315.png',
              title1: 'Reward',
              amount1: '94.50$',
              title2: 'Risk',
              amount2: '27.00$'
            },
            {
              tradeIcon: 'iPad Pro 11in – 316.png',
              title1: 'Reward',
              amount1: '189.00$',
              title2: 'Risk',
              amount2: '54.00$'
            },
            {
              tradeIcon: 'iPad Pro 11in – 318.png',
              title1: 'Reward',
              amount1: '18.90$',
              title2: 'Risk',
              amount2: '5.40$'
            },
            {
              tradeIcon: 'iPad Pro 11in – 317.png',
              title1: 'Reward',
              amount1: '18.90$',
              title2: 'Risk',
              amount2: '5.40$'
            },
            {
              tradeIcon: 'iPad Pro 11in – 319.png',
              title1: 'Reward',
              amount1: '18.90$',
              title2: 'Risk',
              amount2: '5.40$'
            },
          ]
        },
      ],
      page:1,
    }
  },
  async fetchMemberShipList() {
      await this.$axios.get('/membership/')
        .then((res)=>{
          console.log(res);
        }).catch((err)=>{
          console.log(err);
        })
  },
  created() {
    // this.fetchMemberShipList();
  },

  methods: {
    /*async fetchMemberShipList() {
      try{
        let response = await this.$axios.$get('/membership/',this.page);
        alert(response);
      }
      catch (err){
        console.log(err);
      }
    }*/
  }
}
</script>

