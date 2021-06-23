import {SUPPORTER, SENIOR} from "@/js/consts/Roles";

export function isSuporter(user) {
    if (!user) {
        return false;
    }
    return user.roles.findIndex(r => r.name == SUPPORTER) > -1
}

export function isSenior(user) {
    if (!user) {
        return false;
    }
    return user.roles.findIndex(r => r.name == SENIOR) > -1
}
