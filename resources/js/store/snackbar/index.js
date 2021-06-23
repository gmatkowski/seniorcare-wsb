export default {
    namespaced: true,
    state: () => ({
        content: '',
        color: '',
        timeout: 2000,
        centered: false
    }),
    mutations: {
        showMessage(state, payload) {
            state.content = payload.content
            state.color = payload.color ?? 'red'
            state.timeout = payload.timeout ?? 2000
            state.centered = payload.centered ?? false
        }
    }
}
