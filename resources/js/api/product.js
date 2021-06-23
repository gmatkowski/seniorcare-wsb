export default (axios) => ({
    listing(page = 1, per_page = 100) {
        return axios.get('/product', {
            params: {
                page,
                per_page
            }
        });
    }
})
