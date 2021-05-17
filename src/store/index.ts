import {createStore} from 'vuex'

const store = createStore({
  state() {
    return {
      language: 'zh_CN'
    }
  },
  mutations: {
    setLanguage: (state: any, payload: any): void => {
      state.language = payload
    }
  }
})

export default store
