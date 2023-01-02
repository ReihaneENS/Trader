import Vue from 'vue';

let globalData = new Vue({
  data: {
    $activeMenu1: true,
    $activeMenu2: false,
    $hamburgerMenuOpened: false,
  }
});

export default {
  computed: {
    $activeMenu1: {
      get: function () {
        return globalData.$data.$activeMenu1
      },
      set: function (newActiveMenu1) {
        return globalData.$data.$activeMenu1 = newActiveMenu1
      }
    },
    $activeMenu2: {
      get: function () {
        return globalData.$data.$activeMenu2
      },
      set: function (newActiveMenu2) {
        return globalData.$data.$activeMenu2 = newActiveMenu2
      }
    },
    $hamburgerMenuOpened: {
      get: function () {
        return globalData.$data.$hamburgerMenuOpened
      },
      set: function (newHamburgerMenuOpened) {
        return globalData.$data.$hamburgerMenuOpened = newHamburgerMenuOpened
      }
    }
  },
}
