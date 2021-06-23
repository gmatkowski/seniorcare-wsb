import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import pl from 'vuetify/src/locale/pl.ts'

Vue.use(Vuetify)

const opts = {
    lang: {
        locales: {pl},
        current: 'pl',
    },
}

export default new Vuetify(opts)
