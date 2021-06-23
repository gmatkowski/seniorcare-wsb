import {extend, ValidationObserver, ValidationProvider, setInteractionMode} from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import messages from 'vee-validate/dist/locale/pl.json'
import '@/js/rules/password'
import ResponseErrorsMixins from "@/js/mixins/ResponseErrorsMixins"

Object.keys(rules).forEach((rule) => {
    extend(rule, {
        ...rules[rule],
        message: messages.messages[rule]
    })
})

setInteractionMode('eager')

export default {
    components: {
        ValidationProvider,
        ValidationObserver
    },
    data() {
        return {
            isLoading: false
        }
    },
    mixins: [ResponseErrorsMixins]
}
