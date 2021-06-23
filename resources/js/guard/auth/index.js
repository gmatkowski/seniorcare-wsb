import store from '@/js/store'

class Auth {
    redirect = {
        name: 'auth.login'
    }

    check(meta) {
        if (!store.getters["auth/isLogged"]) {
            return false
        }
        if (meta.roles && meta.roles.length > 0) {
            const roles = Array.isArray(meta.roles) ? meta.roles : [meta.roles]

            const found = store.getters["auth/roles"].filter(role => {
                return roles.find(r => r === role.name)
            })

            if (found.length > 0) {
                return true
            }

            this.redirect = {
                name: 'dashboard'
            }

            return false;
        }

        return true;
    }
}


export default {
    name: 'auth',
    guard: new Auth()
}
