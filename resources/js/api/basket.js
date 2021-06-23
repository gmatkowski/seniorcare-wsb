export default (axios) => ({
    get() {
        return axios.get('/basket');
    },
    add(id, quantity) {
        return axios.post(`/basket/${id}`, {
            quantity
        });
    },
    update(id, quantity = 1) {
        return axios.patch(`/basket/${id}`, {
            quantity
        });
    },
    remove(id) {
        return axios.delete(`/basket/${id}`);
    },
    flush() {
        return axios.delete('/basket');
    },
})
