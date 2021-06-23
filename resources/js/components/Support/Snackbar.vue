<template>
    <v-snackbar :centered="centered" v-model="show" :timeout="timeout" :color="color">
        {{ message }}
        <v-btn text @click="show = false">Zamknij</v-btn>
    </v-snackbar>
</template>

<script>
    export default {
        data() {
            return {
                show: false,
                message: '',
                color: '',
                timeout: 2000,
                centered: false
            }
        },
        created() {
            this.$store.subscribe((mutation, state) => {
                if (mutation.type === 'snackbar/showMessage') {
                    this.message = state.snackbar.content
                    this.color = state.snackbar.color
                    this.timeout = state.snackbar.timeout
                    this.centered = state.snackbar.centered
                    this.show = true
                }
            })
        }
    }
</script>
