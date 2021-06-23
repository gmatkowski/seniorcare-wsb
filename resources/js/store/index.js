import Vuex from 'vuex'
import auth from './auth'
import snackbar from './snackbar'
import cart from './cart'

const store = new Vuex.Store({
    modules: {
        auth,
        snackbar,
        cart
    }
})

export default store;
