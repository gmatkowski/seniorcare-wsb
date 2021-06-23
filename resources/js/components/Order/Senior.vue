<template>
    <div>

        <v-data-table
            :headers="headers"
            :items="items"
            :options.sync="options"
            :server-items-length="total"
            :loading="isLoading"
            item-key="id"
            class="elevation-1"show-expand
        >
            <template v-slot:expanded-item="{ headers, item }">
                <td :colspan="headers.length">
                    <ExpandedComponent :id="item.id"/>
                </td>
            </template>

            <template v-slot:item.price="{ item }">
                {{ item.price }} PLN
            </template>

            <template v-slot:item.supporter_id="{ item }">
                <template v-if="item.supporter">
                    {{ item.supporter.first_name }} {{ item.supporter.last_name }}
                </template>
                <template v-else>
                    <i class="text-caption">Nie wyznaczono</i>
                </template>
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

                <template v-if="$aclOrder.canCancel(item, user)">
                    <v-btn @click="cancel(item)" x-small color="error">Anuluj</v-btn>
                </template>

                <template v-if="$aclOrder.canConfirm(item, user)">
                    <v-btn @click="confirm(item)" x-small color="success">Potwierdzam dostarczenie</v-btn>
                </template>

            </template>

        </v-data-table>
        <v-config-dialog ref="confirm"/>
    </div>
</template>
<script>
    import TableMixin from "@/js/mixins/TableMixin";
    import {mapGetters} from "vuex";
    import ResponseErrorsMixins from "@/js/mixins/ResponseErrorsMixins";
    import ExpandedComponent from "@/js/components/Order/Expanded"

    export default {
        components: {
            ExpandedComponent
        },
        mixins: [TableMixin, ResponseErrorsMixins],
        computed: {
            ...mapGetters({
                user: 'auth/user',
            })
        },
        data() {
            return {
                options: {},
                headers: [
                    {text: 'Wartość zamówienia', value: 'price', sortable: false},
                    {text: 'Dostarczający', value: 'supporter_id', sortable: false},
                    {text: 'Status', value: 'status', sortable: false},
                    {text: 'Data złożenia zamówienia', value: 'created_at', sortable: false},
                    {text: 'Ostatnio zmieniono', value: 'updated_at', sortable: false},
                    {text: 'Akcje', value: 'actions', sortable: false},
                ],
                calls: {
                    listing: async (page, per_page) => {
                        return this.$apiOrder.my(
                            page,
                            per_page
                        )
                    }
                },
            }
        },
        methods: {
            async cancel(order) {
                if (
                    await this.$refs.confirm.open(
                        'Potwierdź',
                        'Czy na pewno chcesz anulować zamówienie?'
                    )
                ) {
                    try {
                        this.isLoading = true
                        await this.$apiOrder.cancel(order.id);

                        this.$notifier.showMessage({
                            content: 'Zamówienie zostało anulowane',
                            color: 'green'
                        })

                        await this.refreshTable()
                        this.isLoading = false
                    } catch (e) {
                        this.handleErrors(e)
                    }
                }
            },
            async confirm(order) {
                if (
                    await this.$refs.confirm.open(
                        'Potwierdź',
                        'Czy na pewno chcesz potwierdzić otrzymanie zamówienia?'
                    )
                ) {
                    try {
                        this.isLoading = true
                        await this.$apiOrder.confirm(order.id);

                        this.$notifier.showMessage({
                            content: 'Zamówienie zostało potwierdzone.',
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
