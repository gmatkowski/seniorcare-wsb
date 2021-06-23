import Auth from './auth'
import Guest from './guest'

const guards = [Auth, Guest]

class Guard {

    redirect = null

    constructor(meta) {
        this.meta = meta
    }

    check() {
        const guard = this.findGuard(this.meta.guard)
        if (!guard) {
            return false
        }

        if (guard.check(this.meta)) {
            return true
        }

        this.redirect = guard.redirect

        return false
    }

    findGuard = guard => {
        const found = guards.find(g => {
            return g.name === guard
        })

        if (!found) {
            return null
        }

        return found.guard
    }
}

export default Guard
