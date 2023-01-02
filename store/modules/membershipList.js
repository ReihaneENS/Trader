import Vue from 'vue';

export default {
  namespaced: true,
  state: {
    membershipList: {
      data: []
    }
  },
  getters: {
    getmembershipList: (state) => {
      return state.membershipList;
    },
  },
  mutations: {
    SET_MEMBERSHIPLIST: (state, membershipListInfo) => {
      Vue.set(state, 'membershipList', membershipListInfo)
    }
  },
  actions: {
    SetMemberShipList: (context, membershipListInfo) => {
      context.commit('SET_MEMBERSHIPLIST', membershipListInfo);
    },
  },
}
