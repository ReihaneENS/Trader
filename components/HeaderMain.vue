<template>
  <div class="header-wrapper w-full">
    <div class="inner-content grid grid-cols-10">
      <div class="account col-span-2 flex justify-start pl-3 items-center text-sm">
        <div class="user-img bg-white h-11 w-11">
          <!--          <img src="" alt="">-->
        </div>
        <div class="user-name ml-2 text-white">
          <p>Alexandarian Bunnicci</p>
        </div>
      </div>
      <div class="menu-options col-span-1 flex justify-center items-center">
        <ul class="flex justify-center items-center h-full text-white">
          <li @click="$activeMenu1 = true; $activeMenu2 = false" :class="{'active' : $activeMenu1 === true}"
              class="text-center w-full flex justify-center items-center mr-3">
            <nuxt-link to="/Home" class="text-xs flex justify-center items-center w-full">Home</nuxt-link>
          </li>
          <li @click="$activeMenu2 = true; $activeMenu1 = false" :class="{'active' : $activeMenu2 === true}"
              class="text-center w-full flex justify-center items-center">
            <nuxt-link to="/CreateSignals" class="text-xs">Create Signal</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="navigation col-span-5">
        <ul class="flex justify-center items-center h-full">
          <li v-for="item in navigationList" :key="index" class="mx-3 text-sm text-white h-full">
            <nuxt-link :to="item.url" class="flex items-center h-full">{{ item.title }}</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="menu-open hidden ml-3" @click="$hamburgerMenuOpened=true">
        <img class="h-8 w-8 cursor-pointer" :src="require(`~/assets/images/icons/menu-white.png`)" alt="menu">
      </div>
      <HamburgerMenu v-if="$hamburgerMenuOpened===true"/>
      <div class="right-menu text-white pr-3 col-span-2 flex justify-end items-center">
        <div class="icon mr-3">
          <p>0.0000 $</p>
        </div>
        <div class="flag">
          <nuxt-link to="/" class=" flex justify-center items-end">
            <img class="w-4 h-4" :src="require(`~/assets/images/icons/chevron-down.png`)" alt="">
            <img class="w-8 h-8 ml-2" :src="require(`~/assets/images/flags/NOK.png`)" alt="">
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navigationList: [
        {
          title: 'Explore Signal',
          id: 1,
          url: '/ExploreSignals'
        },
        {
          title: 'Brokers',
          id: 2,
          url: '/Brokers'
        },
        {
          title: 'Wallet',
          id: 3,
          url: '/Wallet'
        },
        {
          title: 'Monetization',
          id: 4,
          url: '/'
        },
        {
          title: 'Premium Account',
          id: 5,
          url: '/PremiumAccount'
        },
        {
          title: 'Support',
          id: 6,
          url: '/'
        },
      ]
    }
  }
}
</script>

