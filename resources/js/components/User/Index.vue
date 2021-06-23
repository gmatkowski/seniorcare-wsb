<template>
    <v-container>
        <v-card class="mx-auto" :loading="isLoading">
            <validation-observer
                ref="observer"
                v-slot="{ invalid, handleSubmit }"
                slim
            >
                <v-form ref="form" :disabled="isLoading" @submit.prevent="handleSubmit(handle)">
                    <v-card-title dark>Moje dane</v-card-title>
                    <v-card-text>
                        <v-row>
                            <v-col :cols="12">
                                <validation-provider
                                    v-slot="{ errors }"
                                    class="d-flex"
                                    tag="div"
                                    vid="email"
                                    name="adres email"
                                    rules="required|email"
                                >
                                    <v-text-field
                                        v-model="form.email"
                                        name="email"
                                        class="flex-grow-1 mr-md-2"
                                        label="Adres email"
                                        :error-messages="errors"
                                        persistent-hint
                                    ></v-text-field>
                                </validation-provider>

                                <validation-provider
                                    v-slot="{ errors }"
                                    class="d-flex"
                                    tag="div"
                                    vid="first_name"
                                    name="imię"
                                    rules="required"
                                >
                                    <v-text-field
                                        v-model="form.first_name"
                                        :error-messages="errors"
                                        label="Imię"
                                    ></v-text-field>
                                </validation-provider>

                                <validation-provider
                                    v-slot="{ errors }"
                                    class="d-flex"
                                    tag="div"
                                    vid="last_name"
                                    name="nazwisko"
                                    rules="required"
                                >
                                    <v-text-field
                                        v-model="form.last_name"
                                        :error-messages="errors"
                                        label="Nazwisko"
                                    ></v-text-field>
                                </validation-provider>

                                <validation-provider
                                    v-slot="{ errors }"
                                    class="d-flex"
                                    tag="div"
                                    vid="phone"
                                    name="telefon"
                                    rules="required"
                                >
                                    <v-text-field-simplemask
                                        v-model="form.phone"
                                        class="flex-grow-1 mr-md-2"
                                        :properties="PhoneMask.properties(errors)"
                                        :options="PhoneMask.options"
                                    />
                                </validation-provider>

                                <template v-if="isSenior">
                                    <validation-provider
                                        v-slot="{ errors }"
                                        class="d-flex"
                                        tag="div"
                                        vid="address"
                                        name="adres"
                                        rules="required"
                                    >
                                        <v-text-field
                                            v-model="form.address"
                                            :error-messages="errors"
                                            label="Adres"
                                        ></v-text-field>
                                    </validation-provider>

                                    <validation-provider
                                        v-slot="{ errors }"
                                        class="d-flex"
                                        tag="div"
                                        vid="city"
                                        name="miasto"
                                        rules="required"
                                    >
                                        <v-text-field
                                            v-model="form.city"
                                            :error-messages="errors"
                                            label="Miasto"
                                        ></v-text-field>
                                    </validation-provider>

                                    <validation-provider
                                        v-slot="{ errors }"
                                        class="d-flex"
                                        tag="div"
                                        vid="postcode"
                                        name="kod pocztowy"
                                        rules="required"
                                    >
                                        <v-text-field-integer
                                            v-model="form.postcode"
                                            class="flex-grow-1 mr-md-2"
                                            :properties="PostcodeMask.properties(errors)"
                                            :options="PostcodeMask.options"
                                        />
                                    </validation-provider>
                                </template>

                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn
                            type="submit"
                            color="primary px-5"
                            x-large
                            :loading="isLoading"
                            :disabled="isLoading"
                        >
                            Zapisz dane
                        </v-btn>
                    </v-card-actions>
                </v-form>
            </validation-observer>
        </v-card>
    </v-container>
</template>
<script>
    import FormMixin from "@/js/mixins/FormMixin"
    import {SENIOR, SUPPORTER} from "@/js/consts/Roles"
    import {PhoneMask, PostcodeMask} from "@/js/utils/Objects";
    import {mapGetters} from "vuex";

    export default {
        data() {
            return {
                PhoneMask,
                PostcodeMask,
                showPassword: false,
                form: {
                    first_name: '',
                    last_name: '',
                    email: '',
                    password: '',
                    password_confirmation: '',
                    role: SENIOR,
                    address: null,
                    city: null,
                    postcode: null,
                    phone: null
                }
            }
        },
        computed: {
            isSenior() {
                return this.$store.getters["auth/isSenior"]
            },
            ...mapGetters({
                user: 'auth/user'
            })
        },
        mixins: [FormMixin],
        beforeMount() {
            this.fillData()
        },
        methods: {
            fillData() {
                Object.keys(this.form).forEach(key => {
                    this.form[key] = this.user[key]
                })
            },
            async handle() {
                try {
                    this.isLoading = true

                    let form = new FormData
                    Object.keys(this.form).forEach(key => {
                        form.append(key, this.form[key])
                    })
                    await this.$apiUser.update(form)

                    this.$notifier.showMessage({content: 'Dane został zapisane', color: 'green'})

                    this.isLoading = false
                    this.done = true
                } catch (e) {
                    this.handleErrors(e)
                }
            }
        }
    }
</script>
