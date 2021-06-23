import Vue from 'vue'
import SimpleMask from "vuetify-mask/SimpleMask";
import IntegerMask from "vuetify-mask/Integer";
import ConfirmDlg from '@/js/components/Support/ConfirmDialog'
import InputNumber from '@/js/components/Support/InputNumber'

Vue.component("v-text-field-simplemask", SimpleMask);
Vue.component("v-text-field-integer", IntegerMask);
Vue.component("v-config-dialog", ConfirmDlg);
Vue.component("v-input-number", InputNumber);

