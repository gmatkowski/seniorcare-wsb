import Vue from 'vue'

export function inject(name, instance) {
    Vue.prototype[`\$${name}`] = instance
}
