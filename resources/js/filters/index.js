import Vue from 'vue'
import moment from 'moment'
import {AWAITING, ASSIGNED, IN_PROGRESS, DONE, CONFIRMED, CANCELED} from "@/js/consts/Order";

Vue.filter('orderStatus', status => {
    switch (status) {
        case AWAITING:
            return 'Oczekujące'
            break;
        case ASSIGNED:
            return 'Przydzielone'
            break;
        case IN_PROGRESS:
            return 'W trakcie'
            break;
        case DONE:
            return 'Dostarczone'
            break;
        case CONFIRMED:
            return 'Potwierdzone'
            break;
        case CANCELED:
            return 'Anulowane'
            break;
    }
})

Vue.filter('humanDate', date => {
    return moment(date).format('MMMM Do YYYY, h:mm');
})
