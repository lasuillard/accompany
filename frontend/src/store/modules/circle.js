import axios from 'axios'

const state = {
  id          : null,
  logo        : null,
  name        : null,
  date_created: null,
  count_member: null,
  boards      : []
}

const getters = {

}

const actions = {
  init(context, id) {
    return new Promise(function(resolve, reject) {
      axios.get(`/api/circle/${id}`)
      .then(res => {
        context.commit('set', res.data)
        resolve(res.data)
      })
      .catch(err => reject(err))
    })
  }
}

const mutations = {
  set(state, data) { Object.zip(state, data) }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}