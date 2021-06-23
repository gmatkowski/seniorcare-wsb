import {inject} from "@/js/utils/Inject";
import store from "@/js/store";

inject('notifier', {
    showMessage ({ content = '', color = '' }) {
        store.commit('snackbar/showMessage', { content, color })
    }
})
