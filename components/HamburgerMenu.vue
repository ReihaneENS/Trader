<template>
  <div class="hamburger-menu-wrapper fixed h-screen w-72 bg-second top-0 left-0">
    <div class="inner bg-transparent p-2 pt-8 w-full h-full relative">
      <div class="close-icon absolute top-2 right-2" @click="$hamburgerMenuOpened=false">
        <img class="w-8 h-8 cursor-pointer" :src="require(`~/assets/images/icons/close-white.png`)" alt="close-menu">
      </div>
      <div class="account-mobile flex justify-start pl-3 items-center text-sm">
        <div class="user-img bg-white h-11 w-11 border-circle">
          <!--          <img src="" alt="">-->
        </div>
        <div class="user-name ml-2 text-white">
          <p>Alexandarian Bunnicci</p>
        </div>
      </div>
      <div class="content w-full mt-4 px-4">
        <div class="menu-options-mobile w-full flex justify-center items-center">
          <ul class="flex justify-center items-center h-full w-full bg-first rounded py-2">
            <li @click="$activeMenu1 = true; $activeMenu2 = false" :class="{'active' : $activeMenu1 === true}"
                class="text-center w-2/4 flex justify-center items-center">
              <nuxt-link to="/Home" class="text-xs flex justify-center items-center w-full">Home</nuxt-link>
            </li>
            <li @click="$activeMenu2 = true; $activeMenu1 = false" :class="{'active' : $activeMenu2 === true}"
                class="text-center w-2/4 flex justify-center items-center">
              <nuxt-link to="/CreateSignals" class="text-xs">Create Signal</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="navigation-mobile pt-4">
          <ul class="">
            <li v-for="item in navigationList" :key="index" class="my-4 text-sm text-white">
              <nuxt-link :to="item.url" class="flex items-center h-full">{{ item.title }}</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
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

