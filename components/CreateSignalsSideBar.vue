<template>
  <div class="create-signals-side-bar">
    <div class="inner-content w-full h-full p-2">
      <div class="currency-type-wrapper flex justify-center pb-2 border-b border-white items-center">
        <div class="currency-type text-black py-1 px-2">
          <button class="h-full">Crypto</button>
          <button class="active h-6">Forex</button>
          <button class="h-full">Stock Market</button>
        </div>
      </div>
      <div class="main">
        <ul>
          <li class="flex justify-between items-center py-2 text-white" v-for="item in CreateSignalSideBarList" :key="item.id">
            <div class="country flex justify-start items-center">
              <img class="w-8 h-8 border-circle mr-2" :src="require(`~/assets/images/flags/${item.firstCountryFlag}`)" alt="">
              <div>
                <p>{{item.firstCountryName}}</p>
                <p class="text-xs">{{item.firstCountryCurrency}}</p>
              </div>
            </div>
            <div class="info text-center w-40">
              <div class="top mb-1 flex justify-center items-center">
                <p class="mr-1 bg-first flex justify-between items-center">
                  <img class="w-3 h-3 border-circle ml-2" :src="require(`~/assets/images/flags/${item.secondCountryFlag}`)" alt="">
                  {{item.pip}}
                </p>
                <p class="bg-first"> {{item.number}}</p>
              </div>
              <div class="sub text-black flex justify-center items-center">
                <p class="mr-1 bg-first">{{item.text}}</p>
                <p class="bg-first">{{item.littleNum}}</p>
              </div>
            </div>
            <div class="country flex justify-end items-center">
              <div class="text-right">
                <p>{{item.secondCountryName}}</p>
                <p class="text-xs">{{item.secondCountryCurrency}}</p>
              </div>
              <img class="w-8 h-8 border-circle ml-2" :src="require(`~/assets/images/flags/${item.secondCountryFlag}`)" alt="">
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      CreateSignalSideBarList:[
        {
          id:'1',
          firstCountryName:'GBP',
          firstCountryCurrency:'British Pound',
          firstCountryFlag:'CHF.png',
          pip:'+86 Pips',
          number:'1.98482',
          text:'ECB President United',
          littleNum:'3x',
          secondCountryName:'CHF',
          secondCountryCurrency:'Swiss Franc',
          secondCountryFlag:'switzerland-flag-round-medium.png',
        },
        {
          id:'2',
          firstCountryName:'GBP',
          firstCountryCurrency:'British Pound',
          firstCountryFlag:'CHF.png',
          pip:'+86 Pips',
          number:'1.98482',
          text:'ECB President United',
          littleNum:'3x',
          secondCountryName:'CHF',
          secondCountryCurrency:'Swiss Franc',
          secondCountryFlag:'switzerland-flag-round-medium.png',
        },
        {
          id:'3',
          firstCountryName:'GBP',
          firstCountryCurrency:'British Pound',
          firstCountryFlag:'CHF.png',
          pip:'+86 Pips',
          number:'1.98482',
          text:'ECB President United',
          littleNum:'3x',
          secondCountryName:'CHF',
          secondCountryCurrency:'Swiss Franc',
          secondCountryFlag:'switzerland-flag-round-medium.png',
        },
        {
          id:'4',
          firstCountryName:'GBP',
          firstCountryCurrency:'British Pound',
          firstCountryFlag:'CHF.png',
          pip:'+86 Pips',
          number:'1.98482',
          text:'ECB President United',
          littleNum:'3x',
          secondCountryName:'CHF',
          secondCountryCurrency:'Swiss Franc',
          secondCountryFlag:'switzerland-flag-round-medium.png',
        },
        {
          id:'5',
          firstCountryName:'GBP',
          firstCountryCurrency:'British Pound',
          firstCountryFlag:'CHF.png',
          pip:'+86 Pips',
          number:'1.98482',
          text:'ECB President United',
          littleNum:'3x',
          secondCountryName:'CHF',
          secondCountryCurrency:'Swiss Franc',
          secondCountryFlag:'switzerland-flag-round-medium.png',
        },
        {
          id:'6',
          firstCountryName:'GBP',
          firstCountryCurrency:'British Pound',
          firstCountryFlag:'CHF.png',
          pip:'+86 Pips',
          number:'1.98482',
          text:'ECB President United',
          littleNum:'3x',
          secondCountryName:'CHF',
          secondCountryCurrency:'Swiss Franc',
          secondCountryFlag:'switzerland-flag-round-medium.png',
        },
        {
          id:'7',
          firstCountryName:'GBP',
          firstCountryCurrency:'British Pound',
          firstCountryFlag:'CHF.png',
          pip:'+86 Pips',
          number:'1.98482',
          text:'ECB President United',
          littleNum:'3x',
          secondCountryName:'CHF',
          secondCountryCurrency:'Swiss Franc',
          secondCountryFlag:'switzerland-flag-round-medium.png',
        },
        {
          id:'8',
          firstCountryName:'GBP',
          firstCountryCurrency:'British Pound',
          firstCountryFlag:'CHF.png',
          pip:'+86 Pips',
          number:'1.98482',
          text:'ECB President United',
          littleNum:'3x',
          secondCountryName:'CHF',
          secondCountryCurrency:'Swiss Franc',
          secondCountryFlag:'switzerland-flag-round-medium.png',
        },
        {
          id:'9',
          firstCountryName:'GBP',
          firstCountryCurrency:'British Pound',
          firstCountryFlag:'CHF.png',
          pip:'+86 Pips',
          number:'1.98482',
          text:'ECB President United',
          littleNum:'3x',
          secondCountryName:'CHF',
          secondCountryCurrency:'Swiss Franc',
          secondCountryFlag:'switzerland-flag-round-medium.png',
        },
        {
          id:'10',
          firstCountryName:'GBP',
          firstCountryCurrency:'British Pound',
          firstCountryFlag:'CHF.png',
          pip:'+86 Pips',
          number:'1.98482',
          text:'ECB President United',
          littleNum:'3x',
          secondCountryName:'CHF',
          secondCountryCurrency:'Swiss Franc',
          secondCountryFlag:'switzerland-flag-round-medium.png',
        },
        {
          id:'11',
          firstCountryName:'GBP',
          firstCountryCurrency:'British Pound',
          firstCountryFlag:'CHF.png',
          pip:'+86 Pips',
          number:'1.98482',
          text:'ECB President United',
          littleNum:'3x',
          secondCountryName:'CHF',
          secondCountryCurrency:'Swiss Franc',
          secondCountryFlag:'switzerland-flag-round-medium.png',
        },
        {
          id:'12',
          firstCountryName:'GBP',
          firstCountryCurrency:'British Pound',
          firstCountryFlag:'CHF.png',
          pip:'+86 Pips',
          number:'1.98482',
          text:'ECB President United',
          littleNum:'3x',
          secondCountryName:'CHF',
          secondCountryCurrency:'Swiss Franc',
          secondCountryFlag:'switzerland-flag-round-medium.png',
        },
        {
          id:'13',
          firstCountryName:'GBP',
          firstCountryCurrency:'British Pound',
          firstCountryFlag:'CHF.png',
          pip:'+86 Pips',
          number:'1.98482',
          text:'ECB President United',
          littleNum:'3x',
          secondCountryName:'CHF',
          secondCountryCurrency:'Swiss Franc',
          secondCountryFlag:'switzerland-flag-round-medium.png',
        },
        {
          id:'14',
          firstCountryName:'GBP',
          firstCountryCurrency:'British Pound',
          firstCountryFlag:'CHF.png',
          pip:'+86 Pips',
          number:'1.98482',
          text:'ECB President United',
          littleNum:'3x',
          secondCountryName:'CHF',
          secondCountryCurrency:'Swiss Franc',
          secondCountryFlag:'switzerland-flag-round-medium.png',
        },
        {
          id:'15',
          firstCountryName:'GBP',
          firstCountryCurrency:'British Pound',
          firstCountryFlag:'CHF.png',
          pip:'+86 Pips',
          number:'1.98482',
          text:'ECB President United',
          littleNum:'3x',
          secondCountryName:'CHF',
          secondCountryCurrency:'Swiss Franc',
          secondCountryFlag:'switzerland-flag-round-medium.png',
        },
        {
          id:'16',
          firstCountryName:'GBP',
          firstCountryCurrency:'British Pound',
          firstCountryFlag:'CHF.png',
          pip:'+86 Pips',
          number:'1.98482',
          text:'ECB President United',
          littleNum:'3x',
          secondCountryName:'CHF',
          secondCountryCurrency:'Swiss Franc',
          secondCountryFlag:'switzerland-flag-round-medium.png',
        },
        {
          id:'17',
          firstCountryName:'GBP',
          firstCountryCurrency:'British Pound',
          firstCountryFlag:'CHF.png',
          pip:'+86 Pips',
          number:'1.98482',
          text:'ECB President United',
          littleNum:'3x',
          secondCountryName:'CHF',
          secondCountryCurrency:'Swiss Franc',
          secondCountryFlag:'switzerland-flag-round-medium.png',
        },
        {
          id:'18',
          firstCountryName:'GBP',
          firstCountryCurrency:'British Pound',
          firstCountryFlag:'CHF.png',
          pip:'+86 Pips',
          number:'1.98482',
          text:'ECB President United',
          littleNum:'3x',
          secondCountryName:'CHF',
          secondCountryCurrency:'Swiss Franc',
          secondCountryFlag:'switzerland-flag-round-medium.png',
        },
      ]
    }
  }
}
</script>

