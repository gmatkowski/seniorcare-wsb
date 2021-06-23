<template>
    <v-container>
        <v-card
            class="mx-auto"
            max-width="700">
            <v-card-title dark>
                Seniorcare
                <v-spacer></v-spacer>
                <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>
            </v-card-title>
            <v-card-text>
                <component :is="component_name"/>
            </v-card-text>
        </v-card>
    </v-container>
</template>
<script>
    import GuestComponent from './Guest/Index'
    import AuthenticatedComponent from './Authenticated/Index'
    import {mapGetters} from "vuex";

    export default {
        components: {
            GuestComponent,
            AuthenticatedComponent
        },
        data() {
            return {
                breadcrumbs: [
                    {
                        text: 'Seniorcare',
                        disabled: false
                    }
                ]
            }
        },
        computed: {
            ...mapGetters({
                isLogged: 'auth/isSenior'
            }),
            component_name() {
                if (this.isLogged) {
                    return 'AuthenticatedComponent'
                }
                return 'GuestComponent'
            }
        }
    }
</script>
