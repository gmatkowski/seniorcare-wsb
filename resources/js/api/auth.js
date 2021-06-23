export default (axios) => ({
    login(email, password) {
        return axios.post('/auth/login', {
            email,
            password
        });
    },
    register(form) {
        return axios.post('/auth/register', form);
    },
    logout() {
        return axios.post('/auth/logout');
    },
    verify(expires, hash, id, signature) {
        return axios.post('/weryfikacja', {
            expires,
            hash,
            id,
            signature
        }, {
            params: {
                expires,
                hash,
                id,
                signature
            }
        });
    }
})
