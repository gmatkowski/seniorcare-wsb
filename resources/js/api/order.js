export default (axios) => ({
    my(page = 1, per_page = 100) {
        return axios.get('/order/my', {
            params: {
                page,
                per_page
            }
        });
    },
    free(page = 1, per_page = 100) {
        return axios.get('/order/free', {
            params: {
                page,
                per_page
            }
        });
    },
    create() {
        return axios.post('/order');
    },
    get(id) {
        return axios.get(`/order/${id}`);
    },
    cancel(id) {
        return axios.post(`/order/cancel/${id}`);
    },
    assign(id) {
        return axios.post(`/order/assign/${id}`);
    },
    inProgress(id) {
        return axios.post(`/order/in-progress/${id}`);
    },
    done(id) {
        return axios.post(`/order/done/${id}`);
    },
    confirm(id) {
        return axios.post(`/order/confirm/${id}`);
    }
})
