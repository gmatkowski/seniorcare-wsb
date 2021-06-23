export let PhoneMask = {
    properties: (errors) => {
        return {
            label: 'Telefon',
            prefix: '',
            suffix: '',
            name: 'phone',
            readonly: false,
            disabled: false,
            outlined: false,
            clearable: true,
            placeholder: 'Telefon',
            'error-messages': errors
        }
    },
    options: {
        inputMask: '(+##) ###-###-###',
        outputMask: '+###########',
        empty: null,
        applyAfter: false,
        alphanumeric: true,
        lowerCase: false
    }
}

export let PostcodeMask = {
    properties: (errors) => {
        return {
            label: 'Kod pocztowy',
            prefix: '',
            suffix: '',
            name: 'postcode',
            readonly: false,
            disabled: false,
            outlined: false,
            clearable: true,
            placeholder: 'Kod pocztowy',
            'error-messages': errors
        }
    },
    options: {
        inputMask: '##-###',
        outputMask: '##-###',
        empty: null,
        applyAfter: false,
        alphanumeric: true,
        lowerCase: false
    }
}
