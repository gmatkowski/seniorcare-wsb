<template>
    <v-container>
        <v-card class="mx-auto" :loading="isLoading">
            <v-card-title>Weryfikacja rejestracji użytkownika</v-card-title>
            <v-card-text class="d-flex justify-center">
                <v-container style="height: 400px;">
                    <v-row
                        class="fill-height"
                        align-content="center"
                        justify="center"
                    >
                        <v-col
                            class="text-subtitle-1 text-center"
                            cols="12"
                        >
                            Trwa weryfikacja Twojego konta ...
                        </v-col>
                        <v-col cols="6">
                            <v-progress-linear
                                color="deep-purple accent-4"
                                indeterminate
                                rounded
                                height="6"
                            ></v-progress-linear>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
        </v-card>
    </v-container>
</template>
<script>
    export default {
        data() {
            return {
                timeout: 3000,
                isLoading: true,
                form: {
                    expires: null,
                    hash: null,
                    id: null,
                    signature: null
                }
            }
        },
        methods: {
            hasValidParams() {
                this.form.expires = this.$route.query.expires;
                this.form.hash = this.$route.query.hash;
                this.form.id = this.$route.query.id;
                this.form.signature = this.$route.query.signature;

                Object.keys(this.form).forEach(key => {
                    if (!this.form[key]) {
                        return false
                    }
                })

                return true
            },
            verified() {
                this.$notifier.showMessage({
                    content: 'Twoje konto zostało zweryfikowane, możesz się już zalogować.',
                    color: 'green'
                })
                this.$router.push({
                    name: 'auth.login'
                })
            },
            async verify() {
                this.isLoading = false
                setTimeout(async () => {
                    try {
                        await this.$apiAuth.verify(
                            this.form.expires,
                            this.form.hash,
                            this.form.id,
                            this.form.signature
                        )
                        this.verified()
                    } catch (e) {
                        console.log(e)
                    }
                }, this.timeout)
            }
        },
        beforeMount() {
            if (!this.hasValidParams()) {
                this.$notifier.showMessage({content: 'Weryfikacja nieudana, sprawdź link.', color: 'red'})
                this.$router.push({
                    name: 'welcome'
                })
            }

            this.verify()
        }
    }
</script>
