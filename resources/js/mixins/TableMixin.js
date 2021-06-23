export default {
    data() {
        return {
            isLoading: false,
            total: 0,
            options: {},
            items: [],
            calls: {
                listing: async () => new Promise
            },
        }
    },
    watch: {
        options: {
            async handler() {
                await this.getDataFromApi()
            },
            deep: true
        },
    },
    methods: {
        resetTable() {
            this.items = []
            this.total = 0
        },
        async refreshTable() {
            this.options.page = 1
            this.resetTable()
            await this.getDataFromApi()
        },
        async getDataFromApi() {
            try {
                this.resetTable()

                this.isLoading = true

                const {sortBy, sortDesc, page, itemsPerPage} = this.options

                const {data} = await this.calls.listing(page, itemsPerPage)

                this.isLoading = false

                this.items = await data.data
                this.total = data.meta.total
            } catch (e) {
                this.isLoading = false
            }
        }
    }
}
