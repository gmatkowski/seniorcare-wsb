<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card :loading="isLoading" class="mx-auto">
                    <v-card-title>
                        Lista produktów do zamówienia
                        <v-spacer></v-spacer>
                        <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>
                    </v-card-title>
                    <v-card-text>

                        <v-row class="mb-5">
                            <v-col :key="`product-${product.id}`" v-for="product in products" cols="12" sm="6" md="4"
                                   lg="3" xl="2">
                                <v-card>
                                    <v-app-bar dark color="pink">
                                        {{ product.name }}
                                        <v-spacer></v-spacer>
                                        <v-btn @click="add(product)" small>Dodaj</v-btn>
                                    </v-app-bar>
                                    <v-img v-if="product.image_url" :src="product.image_url" aspect-ratio="1.7"></v-img>
                                    <v-card-text class="d-flex">
                                        <h3>Cena: <strong class="pink--text">{{ product.price }} PLN</strong></h3>
                                        <v-spacer></v-spacer>
                                        ({{ product.symbol }})
                                    </v-card-text>
                                </v-card>

                            </v-col>
                        </v-row>


                        <v-pagination
                            v-if="pages > 1"
                            :disabled="isLoading"
                            v-model="cpage"
                            :length="pages"
                            prev-icon="mdi-menu-left"
                            next-icon="mdi-menu-right"
                        ></v-pagination>

                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <AddDialog v-if="dialog.show" :dialog.sync="dialog.show" :product="dialog.product"/>
    </v-container>
</template>
<script>
    import AddDialog from "@/js/components/Product/List/AddDialog";

    export default {
        components: {
            AddDialog
        },
        computed: {
            current_page() {
                let page = parseInt(this.$route.params.page || 1);
                return page >= 1 ? page : 1;
            }
        },
        watch: {
            current_page() {
                this.fetchProducts()
            },
            cpage(page) {
                this.$router.push({
                    name: 'product.list',
                    params: {
                        page: page ? page : 1
                    }
                }).catch(() => {

                })
            }
        },
        methods: {
            add(product) {
                this.dialog = {
                    show: true,
                    product: product
                }
            },
            async fetchProducts() {
                this.isLoading = true
                const {data} = await this.$apiProduct.listing(this.current_page, this.per_page)

                this.products = data.data
                this.pages = data.meta.last_page

                this.isLoading = false
            }
        },
        data() {
            return {
                dialog: {
                    product: null,
                    show: false
                },
                cpage: 1,
                per_page: 48,
                pages: 0,
                isLoading: false,
                products: [],
                breadcrumbs: [
                    {
                        text: 'Seniorcare',
                        to: {
                            name: 'dashboard'
                        }
                    },
                    {
                        text: 'Produkty',
                        disabled: false
                    },
                ]
            }
        },
        async beforeMount() {
            this.cpage = this.current_page;
            await this.fetchProducts()
        }
    }
</script>

