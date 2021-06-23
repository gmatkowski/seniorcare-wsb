export default (axios) => ({
    update(form) {
        return axios.post('/user/update', form);
    }
})
