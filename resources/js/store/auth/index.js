import Vue from 'vue'
import {isSenior, isSuporter} from "@/js/utils/User";

export default {
    namespaced: true,
    state: () => {
        return {
            user: window.app.user || null
        }
    },
    getters: {
        isLogged: state => {
            return state.user ? true : false
        },
        user: state => state.user,
        roles: state => state.user ? state.user.roles : [],
        isSenior: state => isSenior(state.user),
        isSupporter: state => isSuporter(state.user),
    },
    mutations: {
        LOGIN: (state, user) => {
            state.user = user
        }
    },
    actions: {
        LOGIN: ({commit}, user) => {
            commit('LOGIN', user)
        },
        LOGOUT: async ({commit}) => {
            await Vue.prototype.$apiAuth.logout()
            commit('LOGIN', null)
        }
    }
}
