export default {
    namespaced: true,
    state: () => ({
        items: []
    }),
    getters: {
        getItems: state => state.items,
        getTotalItems: state => state.items.map(i => i.quantity).reduce( (p, c) => p + c, 0),
        getTotalPrice: state => state.items.map(i => i.price * i.quantity).reduce( (p, c) => p + c, 0)
    },
    mutations: {
        UPDATE: (state, items) => {
            state.items = items
        }
    },
    actions: {
        UPDATE: ({commit}, items) => {
            commit('UPDATE', items)
        }
    }
}
