<template>
    <v-container>
        <v-card max-width="800" class="mx-auto" :loading="isLoading">
            <v-card-title dark>Zawartość Twojego koszyka</v-card-title>
            <v-card-text>
                <template v-for="(item, index) in cartItems">
                    <v-list-item :key="index">
                        <v-list-item-avatar v-if="item.associatedModel.image_url">
                            <v-img :src="item.associatedModel.image_url" height="80" aspect-ratio="1.7"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-title class="d-flex text-caption">
                            {{ item.name }}
                            <v-spacer></v-spacer>
                            <strong class="ml-4 pink--text">{{ item.price }} PLN</strong>
                        </v-list-item-title>
                        <v-list-item-action class="mx-4">
                            <v-input-number :suffix="item.associatedModel.symbol" v-model="item.quantity" @input="quantity => update(item, quantity)"/>
                        </v-list-item-action>
                        <v-list-item-action>
                            <v-btn icon @click="remove(item)">
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
                <v-list-item class="mt-5 justify-end">
                    <h2>Razem: <span class="pink--text">{{ cartTotalPrice.toFixed(2) }} PLN</span></h2>
                </v-list-item>
                <v-list-item class="mt-5 d-flex justify-end">
                    <v-btn class="pink" :disabled="cartTotalItems === 0" @click="createOrder" large dark>Złóż zamówienie</v-btn>
                </v-list-item>
            </v-card-text>
        </v-card>
        <v-config-dialog ref="confirm"/>
    </v-container>
</template>
<script>
    import BasketMixin from "@/js/mixins/BasketMixin";

    export default {
        mixins: [BasketMixin]
    }
</script>
