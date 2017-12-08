/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const http = axios.create(({
  baseURL: 'http://api.smartshopp.ga'
}))

Vue.use(Vuex)

const state = {
  products: [],
  login: ''
}

const mutations = {
  setProducts (state, allProducts) {
    state.products = allProducts
  },
  setDeleteProduct (state, id) {
    let idx = state.Products.findIndex(product => product._id == id)
    state.products.splice(idx, 1)
  },
  setNewProducts (state, newData) {
    state.products.unshift(newData)
  },
  setLogin (state, data) {
    state.login = data
  },
  clearLogin (state) {
    state.login = false
  }
}

const actions = {
  saveProducts ({commit}, newBlog) {
    console.log('MAUK DI BWA KES DALAM', newBlog)
    http.post('/', newBlog)
    .then(({data}) => {
      console.log('ini data yang akan di push', data.data)
      commit('setNewProducts', data.data)
    })
    .catch(err => {
      console.log(err)
    })
  },
  allProducts ({ commit }) {
    http.get('/products')
    .then(({data}) => {
      console.log('ini data', data)
      commit('setProducts', data)
    })
    .catch(err => {
      console.log(err)
    })
  },
  deleteProduct ({commit}, id) {
    http.delete(`/${id}`)
    .then(() => {
      commit('setDeleteProduct', id)
    })
    .catch(err => {
      console.log(err)
    })
  },
  checkLogin ({commit},data) {
   http.post('/login', data)
    .then(function ({data}) {
      if(data.token) {
        console.log('DATA SIAPA', data)
        localStorage.setItem('token', data.token)
        localStorage.setItem('user_id', data.user_id)
        localStorage.setItem('name', data.name)
        commit('setLogin', data)
      } else {
        alert('Username atau Password Salah')
      }
    })
    .catch(function (error) {
      console.log(error)
    })
  },
  clearSession ({ commit }) {
    commit('clearLogin')
  },
}

const store = new Vuex.Store({
  state,
  actions,
  mutations
})

export default store