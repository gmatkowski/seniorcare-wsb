import {SENIOR} from "@/js/consts/Roles";

export default [
    {
        path: '/',
        name: 'welcome',
        component: () => import('@/js/components/Welcome/Index'),
        meta: {
            guard: 'guest'
        }
    },
    {
        path: '/logowanie',
        name: 'auth.login',
        component: () => import('@/js/components/Auth/Login/Index'),
        meta: {
            guard: 'guest'
        }
    },
    {
        path: '/rejestracja',
        name: 'auth.register',
        component: () => import('@/js/components/Auth/Register/Index'),
        meta: {
            guard: 'guest'
        }
    },
    {
        path: '/zamowienia',
        name: 'order.list',
        component: () => import('@/js/components/Order/Index'),
        meta: {
            guard: 'auth'
        }
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/js/components/Dashboard/Index'),
        meta: {
            guard: 'auth'
        }
    },
    {
        path: '/koszyk',
        name: 'basket',
        component: () => import('@/js/components/Basket/Index'),
        meta: {
            guard: 'auth'
        }
    },
    {
        path: '/moje-dane',
        name: 'user.data',
        component: () => import('@/js/components/User/Index'),
        meta: {
            guard: 'auth'
        }
    },
    {
        path: '/weryfikacja',
        name: 'auth.verify',
        component: () => import('@/js/components/Auth/Verify/Index'),
        meta: {
            guard: 'guest'
        }
    },
    {
        path: '/produkty/:page?',
        name: 'product.list',
        component: () => import('@/js/components/Product/List/Index'),
        meta: {
            guard: 'auth',
            roles: [SENIOR]
        }
    },
    {
        path: '*',
        name: 'error.404',
        component: () => import('@/js/components/Error/404')
    }
]
