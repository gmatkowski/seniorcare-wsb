import {mapGetters} from "vuex";
import ResponseErrorsMixins from "@/js/mixins/ResponseErrorsMixins"

export default {
    mixins: [ResponseErrorsMixins],
    data() {
        return {
            isLoading: false
        }
    },
    computed: {
        ...mapGetters({
            cartItems: 'cart/getItems',
            cartTotalItems: 'cart/getTotalItems',
            cartTotalPrice: 'cart/getTotalPrice'
        })
    },
    methods: {
        async createOrder() {
            if (this.cartItems.length === 0) {
                return false
            }

            if (
                await this.$refs.confirm.open(
                    'Potwierdź',
                   'Czy na pewno chcesz złożyć zamówienie?'
                )
            ) {
                try {
                    this.isLoading = true
                    await this.$apiOrder.create();
                    this.isLoading = false
                    this.$notifier.showMessage({
                        content: 'Zamówienie zostało złożone, gdy zostanie podjęte przez pomagającego otrzymasz stosnowną wiadomość email',
                        color: 'green',
                        timeout: 10000,
                        centered: true
                    })

                    await this.refresh();
                    await this.$router.push({name: 'dashboard'})
                } catch (e) {
                    this.handleErrors(e)
                }
            }
        },
        async refresh() {
            const {data} = await this.$apiBasket.get()
            this.$store.dispatch('cart/UPDATE', data)
        },
        async update(item, quantity) {
            if (quantity <= 0) {
                await this.remove(item)
                return
            }

            try {
                this.isLoading = true
                const {data} = await this.$apiBasket.update(item.id, quantity)
                this.$store.dispatch('cart/UPDATE', data)

                this.isLoading = false

            } catch (e) {
                this.isLoading = false
            }
        },
        async remove(item) {
            try {
                this.isLoading = true
                await this.$apiBasket.remove(item.id)
                this.$notifier.showMessage({content: 'Usunięto z koszyka', color: 'green'})
                await this.refresh()
                this.isLoading = false

            } catch (e) {
                this.isLoading = false
            }
        },
    }
}
