import {createStore} from 'vuex'

const store = createStore({
  state() {
    return {
      language: 'zh_CN'
    }
  },
  mutations: {
    setLanguage: (state, payload) => {
      state.language = payload
    }
  }
})

export default store
