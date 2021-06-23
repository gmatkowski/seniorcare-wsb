import {AWAITING, ASSIGNED, IN_PROGRESS, DONE} from "@/js/consts/Order";
import {isSuporter} from "@/js/utils/User";

export default {
    canCancel: (order, user) => {
        if (!user) {
            return false
        }
        if (order.user_id !== user.id) {
            return false;
        }

        return [AWAITING, ASSIGNED].includes(order.status)
    },
    canAssign: (order, user) => {
        if (!user) {
            return false
        }
        if (order.supporter) {
            return false
        }

        if (![AWAITING].includes(order.status)) {
            return false
        }

        return isSuporter(user)
    },
    canInProgress: (order, user) => {
        if (!user) {
            return false
        }
        if (!order.supporter || order.supporter.id !== user.id) {
            return false
        }

        return [ASSIGNED].includes(order.status)
    },
    canDone: (order, user) => {
        if (!user) {
            return false
        }
        if (!order.supporter || order.supporter.id !== user.id) {
            return false
        }

        return [IN_PROGRESS].includes(order.status)
    },
    canConfirm: (order, user) => {
        if (!user) {
            return false
        }
        if (order.user_id !== user.id) {
            return false;
        }

        return [DONE].includes(order.status)
    }
}
