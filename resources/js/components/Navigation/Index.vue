<template>
    <div>
        <v-app-bar dark>
            <v-toolbar-title class="d-flex">
                <v-btn :to="{ name: isLogged ? 'dashboard' : 'welcome'}" plain>
                    <v-icon color="pink" dark class="mr-3">
                        mdi-hand-heart
                    </v-icon>
                    Seniorcare
                </v-btn>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <div class="align-center d-none d-sm-flex">
                <template v-if="isLogged">

                    <v-btn small v-if="isSenior" :to="{ name: 'product.list'}" color="purple" dark class="mr-2">
                        <v-icon class="mr-2" dark>mdi-heart</v-icon>
                        Produkty
                    </v-btn>
                    <v-btn small v-if="isSupporter" :to="{ name: 'dashboard'}" color="orange" dark class="mr-2">
                        <v-icon class="mr-2" dark>mdi-grease-pencil</v-icon>
                        Wolne zamówienia
                    </v-btn>

                    <BasketComponent dark class="mr-2" v-if="isSenior"/>

                    Zalogowany jako
                    <v-menu
                        bottom
                        offset-y
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn plain
                                   v-bind="attrs"
                                   v-on="on"
                                   class="text-decoration-underline"
                            >
                                <strong>{{ user.first_name }} {{ user.last_name }}</strong>
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item exact :to="{ name: 'user.data' }">
                                <v-list-item-icon>
                                    <v-icon color="green" class="mr-2">mdi-face</v-icon>
                                </v-list-item-icon>
                                <v-list-item-title class="text-caption">Moje dane</v-list-item-title>
                            </v-list-item>
                            <v-divider></v-divider>
                            <v-list-item exact :to="{ name: 'order.list' }">
                                <v-list-item-icon>
                                    <v-icon color="blue" class="mr-2">mdi-format-list-checks</v-icon>
                                </v-list-item-icon>
                                <v-list-item-title class="text-caption">Moje zamówienia</v-list-item-title>
                            </v-list-item>
                            <v-list-item @click="logout">
                                <v-list-item-icon>
                                    <v-icon color="grey" class="mr-2">mdi-logout</v-icon>
                                </v-list-item-icon>
                                <v-list-item-title class="text-caption">Wyloguj się</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </template>

                <template v-if="!isLogged">
                    <v-btn :to="{ name: 'auth.login' }" dark class="ml-2">Logowanie</v-btn>
                    <v-btn :to="{ name: 'auth.register' }" dark class="ml-2">Rejestracja</v-btn>
                </template>
            </div>

            <v-app-bar-nav-icon class="d-flex d-sm-none" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        </v-app-bar>

        <v-navigation-drawer
            v-model="drawer"
            fixed
            right
            temporary
        >
            <v-list>
                <template v-if="isLogged">
                    <v-subheader>Zalogowany jako</v-subheader>
                    <v-list-item>
                        <v-list-item-content class="text-decoration-underline text-uppercase">{{ user.first_name }} {{
                            user.last_name }}
                        </v-list-item-content>
                    </v-list-item>
                </template>

                <v-subheader>Nawigacja</v-subheader>

                <template v-if="isLogged">
                    <v-list-item exact :to="{ name: 'dashboard' }" v-if="isSupporter">
                        <v-list-item-title>
                            <v-icon color="orange" class="mr-2">mdi-grease-pencil</v-icon>
                            Wolne zamówienia
                        </v-list-item-title>
                    </v-list-item>

                    <v-list-item exact :to="{ name: 'product.list' }" v-if="isSenior">
                        <v-list-item-title>
                            <v-icon color="purple" class="mr-2">mdi-heart</v-icon>
                            Lista produktów
                        </v-list-item-title>
                    </v-list-item>

                    <v-list-item exact :to="{ name: 'basket' }" v-if="isSenior">
                        <v-list-item-title>
                            <v-icon color="pink" class="mr-2">mdi-basket</v-icon>
                            Koszyk
                        </v-list-item-title>
                    </v-list-item>

                    <v-list-item exact :to="{ name: 'order.list' }">
                        <v-list-item-title>
                            <v-icon color="blue" class="mr-2">mdi-format-list-checks</v-icon>
                            Moje zamówienia
                        </v-list-item-title>
                    </v-list-item>

                    <v-list-item exact :to="{ name: 'user.data' }">
                        <v-list-item-title>
                            <v-icon color="green" class="mr-2">mdi-face</v-icon>
                            Moje dane
                        </v-list-item-title>
                    </v-list-item>

                    <v-list-item @click="logout">
                        <v-list-item-title>
                            <v-icon class="mr-2">mdi-logout</v-icon>
                            Wyloguj się
                        </v-list-item-title>
                    </v-list-item>
                </template>
                <template v-if="!isLogged">
                    <v-list-item exact :to="{ name: 'welcome' }">
                        <v-list-item-title>Strona główna</v-list-item-title>
                    </v-list-item>
                    <v-list-item exact :to="{ name: 'auth.login' }">
                        <v-list-item-title>Logowanie</v-list-item-title>
                    </v-list-item>

                    <v-list-item exact :to="{ name: 'auth.register' }">
                        <v-list-item-title>Rejestracja</v-list-item-title>
                    </v-list-item>
                </template>
            </v-list>
        </v-navigation-drawer>

    </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    import BasketComponent from './Basket'

    export default {
        components: {
            BasketComponent
        },
        data() {
            return {
                drawer: false,
                isLoading: false
            }
        },
        computed: {
            ...mapGetters({
                user: 'auth/user',
                isLogged: 'auth/isLogged',
                isSenior: 'auth/isSenior',
                isSupporter: 'auth/isSupporter',
            })
        },
        methods: {
            async logout() {
                await this.$store.dispatch('auth/LOGOUT')
                await this.$router.push({
                    name: 'welcome'
                })
            }
        }
    }
</script>
