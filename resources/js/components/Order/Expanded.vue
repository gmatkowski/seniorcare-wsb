<template>
    <v-row class="pa-10" v-if="order">
        <v-col v-if="isSupporter || order.supporter">
            <template v-if="isSupporter">
                <h3>Adres zamawiającego:</h3>
                {{ order.user.first_name }} {{ order.user.last_name }} <br/>
                {{ order.user.address }} <br/>
                {{ order.user.city }} {{ order.user.postcode }} <br/>
                <div class="text-overline">Telefon:</div>
                {{ order.user.phone }}
            </template>
            <template v-if="isSenior && order.supporter">
                <h3>Dostarczający:</h3>
                {{ order.supporter.first_name }} {{ order.supporter.last_name }} <br/>
                <div class="text-overline">Telefon:</div>
                {{ order.supporter.phone }}
            </template>
        </v-col>
        <v-col>
            <h3>Zamówione produkty:</h3>

            <v-simple-table>
                <template v-slot:default>
                    <thead>
                    <tr>
                        <th class="text-left">

                        </th>
                        <th class="text-left">
                            Produkt
                        </th>
                        <th class="text-left">
                            Cena
                        </th>
                        <th class="text-left">
                            Ilość
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="pa-2" :key="index" v-for="(product, index) in order.products">
                        <td>
                            <v-img :src="product.image_url" height="30" aspect-ratio="1.7"></v-img>
                        </td>
                        <td>{{ product.name }}</td>
                        <td>{{ product.price }} PLN</td>
                        <td> {{ product.pivot.quantity }} {{ product.symbol }}</td>
                    </tr>
                    </tbody>
                </template>
            </v-simple-table>

        </v-col>
    </v-row>
</template>
<script>
    import ResponseErrorsMixins from "@/js/mixins/ResponseErrorsMixins";
    import {mapGetters} from "vuex";

    export default {
        mixins: [ResponseErrorsMixins],
        props: {
            id: {
                required: true,
                type: String
            }
        },
        computed: {
            ...mapGetters({
                isSenior: 'auth/isSenior',
                isSupporter: 'auth/isSupporter',
            }),
        },
        data() {
            return {
                order: null
            }
        },
        async beforeMount() {
            try {
                const {data} = await this.$apiOrder.get(this.id)
                this.order = data.data
            } catch (e) {
                this.handleErrors(e)
            }

        }
    }
</script>
