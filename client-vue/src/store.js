import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listGuest:[],
    firstName:'',
    lastName: '',
    address: ''
  },
  mutations: {
    setListGuest( state, payload ){
      state.listGuest = payload
    },
    setFirstName( state, payload ){
      state.firstName = payload
    },
    setLastName( state, payload ){
      state.lastName = payload
    },
    setAddress( state, payload ){
      state.address = payload
    }
  },
  actions: {
    getListGuest({ commit }, payload){
      axios.get('http://localhost:3001/guest-book')
      .then(result=>{
        commit('setListGuest', result.data)
      })
      .catch(err=>{
        console.log(err);
      })
    },
    addGuest( { dispatch }, payload ){
      console.log(this.state.firstName);
      
      axios.post('http://localhost:3001/guest-book/add',{
        firstName : this.state.firstName,
        lastName : this.state.lastName,
        address : this.state.address
      })
      .then(guest=>{
        console.log(guest);
        dispatch('getListGuest')
      })
      .catch(err=>{
        console.log(err);
      })
    }
  }
})
