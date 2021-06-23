import store from '@/js/store'

class Guest {
    redirect = {
        name: 'dashboard'
    }

    check(guard) {
        if (store.getters["auth/isLogged"]) {
            return false
        }

        return true;
    }
}


export default {
    name: 'guest',
    guard: new Guest()
}
