import Vue from 'vue'
let store = {
  // 全局通用仓库
  state: Vue.observable({
    // 所有搜索框中的数据总条数
    sites: '达华测绘'

  }),
  setSites (user) {
    this.state.sites = user
  }
}

export default store
