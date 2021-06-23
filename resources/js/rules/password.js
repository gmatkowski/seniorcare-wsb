import { extend } from 'vee-validate'
extend('password', {
  params: ['target'],
  validate(value, { target }) {
    return value === target
  },
  message: 'Hasła nie są takie  same'
})
