<template>
    <v-container>
        <v-card class="mx-auto" :loading="isLoading">
            <validation-observer
                ref="observer"
                v-slot="{ invalid, handleSubmit }"
                slim
            >
                <v-form ref="form" :disabled="isLoading" @submit.prevent="handleSubmit(handle)">
                    <v-card-title dark>Logowanie</v-card-title>
                    <v-card-text>

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
                            tag="div"
                            vid="password"
                            name="nowe hasło"
                            rules="required|min:8"
                        >
                            <v-text-field
                                v-model="form.password"
                                :error-messages="errors"
                                name="password"
                                label="Nowe hasło"
                                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                :type="showPassword ? 'text' : 'password'"
                                @click:append="showPassword = !showPassword"
                            ></v-text-field>
                        </validation-provider>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn
                            type="submit"
                            color="primary px-5"
                            x-large
                            :loading="isLoading"
                            :disabled="isLoading"
                        >
                            Zaloguj się
                        </v-btn>
                    </v-card-actions>
                </v-form>
            </validation-observer>
        </v-card>
    </v-container>
</template>
<script>
    import FormMixin from "@/js/mixins/FormMixin"

    export default {
        mixins: [FormMixin],
        data() {
            return {
                showPassword: false,
                form: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            async handle() {
                try {
                    this.isLoading = true
                    const {data} = await this.$apiAuth.login(this.form.email, this.form.password)
                    this.isLoading = false

                    this.$store.dispatch(`auth/LOGIN`, data)
                    this.$router.push({
                        name: 'dashboard'
                    })

                    this.$notifier.showMessage({content: 'Zostałeś zalogowany', color: 'green'})
                } catch (e) {
                    this.handleErrors(e)
                }
            }
        }
    }
</script>
