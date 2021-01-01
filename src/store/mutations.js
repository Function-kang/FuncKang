const mutations = {
  nowRoutePath(state, value) {
    if (value == "/" || value == "/cashFlowSheet/cashFlowSheetShow") {
      state.nowRoutePath = false;
    } else {
      state.nowRoutePath = true;
    }
  },
};

export default mutations;
