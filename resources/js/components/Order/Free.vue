<template>
    <v-container>
        <v-card class="mx-auto" :loading="isLoading">
            <v-card-title dark>Wolne zamówienia</v-card-title>
            <v-card-text>
                <v-data-table
                    :headers="headers"
                    :items="items"
                    :options.sync="options"
                    :server-items-length="total"
                    :loading="isLoading"
                    item-key="id"
                    class="elevation-1"
                    show-expand
                >
                    <template v-slot:expanded-item="{ headers, item }">
                        <td :colspan="headers.length">
                            <ExpandedComponent :id="item.id"/>
                        </td>
                    </template>

                    <template v-slot:item.price="{ item }">
                        {{ item.price }} PLN
                    </template>

                    <template v-slot:item.user_id="{ item }">
                        {{ item.user.first_name }} {{ item.user.last_name }}
                    </template>

                    <template v-slot:item.status="{ item }">
                        {{ item.status | orderStatus }}
                    </template>

                    <template v-slot:item.created_at="{ item }">
                        {{ item.created_at | humanDate }}
                    </template>

                    <template v-slot:item.updated_at="{ item }">
                        {{ item.updated_at | humanDate }}
                    </template>

                    <template v-slot:item.actions="{ item }">
                        <template v-if="$aclOrder.canAssign(item, user)">
                            <v-btn @click="assign(item)" x-small color="success">Zaoferuj się</v-btn>
                        </template>
                    </template>

                </v-data-table>
            </v-card-text>
        </v-card>
        <v-config-dialog ref="confirm"/>
    </v-container>
</template>
<script>
    import TableMixin from "@/js/mixins/TableMixin"
    import {mapGetters} from "vuex"
    import ResponseErrorsMixins from "@/js/mixins/ResponseErrorsMixins"
    import ExpandedComponent from "@/js/components/Order/Expanded"

    export default {
        mixins: [TableMixin, ResponseErrorsMixins],
        computed: {
            ...mapGetters({
                user: 'auth/user',
            })
        },
        components: {
            ExpandedComponent
        },
        data() {
            return {
                options: {},
                headers: [
                    {text: 'Wartość zamówienia', value: 'price', sortable: false},
                    {text: 'Zamawiający', value: 'user_id', sortable: false},
                    {text: 'Status', value: 'status', sortable: false},
                    {text: 'Data złożenia zamówienia', value: 'created_at', sortable: false},
                    {text: 'Ostatnio zmieniono', value: 'updated_at', sortable: false},
                    {text: 'Akcje', value: 'actions', sortable: false},
                ],
                calls: {
                    listing: async (page, per_page) => {
                        return this.$apiOrder.free(
                            page,
                            per_page
                        )
                    }
                },
            }
        },
        methods: {
            async assign(order) {
                if (
                    await this.$refs.confirm.open(
                        'Potwierdź',
                        'Czy na pewno chcesz się zaoferować?'
                    )
                ) {
                    try {
                        this.isLoading = true
                        await this.$apiOrder.assign(order.id);

                        this.$notifier.showMessage({
                            content: 'Super, zostałeś przypisany do zamówienia!',
                            color: 'green'
                        })

                        await this.refreshTable()
                        this.isLoading = false
                    } catch (e) {
                        this.handleErrors(e)
                    }
                }
            }
        }
    }
</script>
