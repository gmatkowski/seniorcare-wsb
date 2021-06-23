<template>
    <v-text-field
        class="centered-input"
        prepend-icon="mdi-minus"
        append-outer-icon="mdi-plus"
        hide-details
        single-line
        :label="label"
        :mask="mask"
        :outline="outline"
        :rules="rules"
        :value="value"
        :suffix="suffix"
        @click:append-outer.stop="increase"
        @click:prepend.stop="decrease"
        @change="$emit('input', $event)"
    ></v-text-field>
</template>

<script>
    export default {
        name: 'VInputNumber',
        props: {
            label: {
                type: String,
                default: '',
            },
            min: {
                type: Number,
                default: 0,
            },
            max: {
                type: Number,
                default: 9999,
            },
            maxLength: {
                type: Number,
                default: 4,
            },
            outline: {
                type: Boolean,
                default: true,
            },
            rules: {
                type: Array,
                default: () => [],
            },
            step: {
                type: Number,
                default: 1,
            },
            suffix: {
                type: String,
                default: null
            },
            value: [String, Number],
        },
        computed: {
            mask() {
                let mask = '';
                for (let i = 0; i < this.maxLength; i++) mask = `${mask}#`;
                return mask;
            }
        },
        methods: {
            increase() {
                if (isNaN(parseInt(this.value)))
                    return this.$emit('input', this.step);
                if (this.value === this.max) return;
                this.$emit('input', parseInt(this.value) + this.step);
            },
            decrease() {
                if (isNaN(parseInt(this.value)))
                    return this.$emit('input', this.min);
                if (this.value === this.min) return;
                this.$emit('input', parseInt(this.value) - this.step);
            },
        },
    };
</script>
<style>
    .centered-input input {
        text-align: center
    }
</style>
