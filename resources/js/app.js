import Vue from 'vue'

import '@/js/plugins/Vuex'

import vuetify from '@/js/plugins/Vuetify'
import router from '@/js/plugins/VueRouter'
import App from '@/js/components/App'
import '@/js/plugins/Axios'
import '@/js/plugins/Api'
import '@/js/plugins/Components'
import '@/js/plugins/Notifier'
import '@/js/plugins/Moment'
import '@/js/acl'
import '@/js/filters'

import store from '@/js/store'

new Vue({
    el: '#app',
    router,
    vuetify,
    store,
    render: h => h(App)
})
