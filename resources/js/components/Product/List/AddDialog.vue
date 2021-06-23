<template>
    <v-dialog
        v-model="dialog"
        persistent
        max-width="400px"
    >
        <v-card>
            <validation-observer
                ref="observer"
                v-slot="{ invalid, handleSubmit }"
                slim
            >
                <v-form ref="form" :disabled="isLoading" @submit.prevent="handleSubmit(handle)">
                    <v-card-title>
                        <span class="text-h5">Dodaj do koszyka</span>
                    </v-card-title>
                    <v-card-subtitle>{{ product.name }} {{ product.price }} PLN</v-card-subtitle>
                    <v-card-text>
                        <validation-provider
                            v-slot="{ errors }"
                            class="d-flex"
                            tag="div"
                            vid="quantity"
                            name="ilość"
                            rules="required|integer|min:1"
                        >
                            <v-text-field
                                v-model="form.quantity"
                                hide-details
                                single-line
                                type="number"
                                :min="1"
                                :step="1"
                                :suffix="product.symbol"
                                :error-messages="errors"
                                label="Ilość"
                            ></v-text-field>
                        </validation-provider>
                    </v-card-text>
                    <v-card-actions class="d-flex justify-center align-center">
                        <v-btn
                            color="grey"
                            text
                            class="body-2 font-weight-bold"
                            @click.native="close"
                        >Anuluj
                        </v-btn>
                        <v-btn
                            type="submit"
                            color="pink"
                            dark
                            class="body-2 font-weight-bold"
                        >
                            Dodaj do koszyka
                        </v-btn>
                    </v-card-actions>
                </v-form>
            </validation-observer>
        </v-card>

    </v-dialog>
</template>
<script>
    import FormMixin from "@/js/mixins/FormMixin"

    export default {
        props: {
            dialog: {
                default: false
            },
            product: {
                required: true,
                type: Object
            }
        },
        data() {
            return {
                form: {
                    quantity: 1
                }
            }
        },
        mixins: [FormMixin],
        methods: {
            async handle() {
                try {
                    const {data} = await this.$apiBasket.add(this.product.id, this.form.quantity)
                    this.$store.dispatch('cart/UPDATE', data)

                    this.$notifier.showMessage({content: 'Dodano do koszyka', color: 'green'})

                    this.close()
                } catch (e) {
                    this.handleErrors(e)
                }
            },
            close() {
                this.$emit('update:dialog', false)
            }
        }
    }
</script>
