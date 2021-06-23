import auth from '@/js/api/auth'
import product from '@/js/api/product'
import user from '@/js/api/user'
import basket from '@/js/api/basket'
import order from '@/js/api/order'

import {inject} from '@/js/utils/Inject'
import Vue from 'vue'

inject('apiAuth', auth(Vue.axios))
inject('apiProduct', product(Vue.axios))
inject('apiUser', user(Vue.axios))
inject('apiBasket', basket(Vue.axios))
inject('apiOrder', order(Vue.axios))
