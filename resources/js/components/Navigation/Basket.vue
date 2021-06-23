<template>
    <v-badge
        :value="cartTotalItems"
        :content="cartTotalItems"
        :offset-y="20"
        :offset-x="20"
        color="green"
    >
        <v-menu
            bottom
            v-model="show"
            left
            offset-y
            :close-on-content-click="false"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn icon
                       color="pink"
                       dark
                       class="ml-2"
                       v-bind="attrs"
                       v-on="on">
                    <v-icon dark>mdi-basket</v-icon>
                </v-btn>
            </template>

            <v-list>
                <v-list-item>
                    Razem:
                    <v-spacer></v-spacer>
                    <strong class="pink--text">{{ cartTotalPrice.toFixed(2) }} PLN</strong>
                </v-list-item>
                <v-divider v-if="cartTotalItems > 0"></v-divider>
                <template v-for="(item, index) in cartItems">
                    <v-list-item :key="index">
                        <v-list-item-avatar v-if="item.associatedModel.image_url">
                            <v-img height="40" aspect-ratio="1.7" :src="item.associatedModel.image_url"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-title class="d-flex text-caption">
                            {{ item.name }} ({{ item.quantity }} {{ item.associatedModel.symbol }})
                            <v-spacer></v-spacer>
                            <strong class="ml-4 pink--text">{{ item.price }} PLN</strong>
                        </v-list-item-title>
                        <v-list-item-action>
                            <v-btn :loading="isLoading" icon @click="remove(item)">
                                <v-icon dark>
                                    mdi-basket-remove
                                </v-icon>
                            </v-btn>
                        </v-list-item-action>
                    </v-list-item>
                    <v-divider></v-divider>
                </template>
                <v-list-item class="text-center" v-if="cartTotalItems === 0">
                    <div class="text-caption"><i>Nie masz dodanych żadnych produktów.</i></div>
                </v-list-item>
                <v-list-item class="text-center">
                    <v-btn @click="show = false" :to="{ name: 'basket' }" plain>Zobacz cały koszyk</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn class="pink" :disabled="cartTotalItems === 0" @click="createOrder" dark>Złóż zamówienie</v-btn>
                </v-list-item>
            </v-list>

        </v-menu>
        <v-config-dialog ref="confirm"/>
    </v-badge>
</template>
<script>
    import BasketMixin from "@/js/mixins/BasketMixin";

    export default {
        data() {
            return {
                show: false
            }
        },
        mixins: [BasketMixin],
        async beforeMount() {
            await this.refresh()
        }
    }
</script>
