<template>
    <v-container>
        <v-card class="mx-auto" :loading="isLoading">
            <v-card-title dark>Moje zamówienia</v-card-title>
            <v-card-text>
                <component :is="component_name" @setLoading="setLoading"/>
            </v-card-text>
        </v-card>
    </v-container>
</template>
<script>
    import {mapGetters} from "vuex"
    import SeniorComponent from './Senior'
    import SupporterComponent from './Supporter'

    export default {
        components: {
            SeniorComponent,
            SupporterComponent
        },
        data() {
            return {
                isLoading: false
            }
        },
        computed: {
            ...mapGetters({
                isSenior: 'auth/isSenior',
                isSupporter: 'auth/isSupporter',
            }),
            component_name() {
                if (this.isSenior) {
                    return 'SeniorComponent'
                }

                return 'SupporterComponent'
            }
        },
        methods: {
            setLoading(status) {
                this.isLoading = status
            }
        }
    }
</script>
