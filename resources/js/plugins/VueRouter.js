import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '@/js/routes'
import Guard from '@/js/guard'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach(async (to, from, next) => {
    if (to.meta && to.meta.guard) {
        const guard = new Guard(to.meta)
        if(guard.check()){
            next();
            return
        }

        await router.push(guard.redirect)
        return
    }

    next()
})

export default router;
