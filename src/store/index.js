import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    books: [
      {
        id: 1,
        text: 'Crime and Punishment',
        price: '160T',
        description: 'First book'
      },
      {
        id: 2,
        text: 'Peaks and Valleys',
        price: '30T',
        description: 'Second Book'
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  getters: {

  },
  modules: {
  }
})
