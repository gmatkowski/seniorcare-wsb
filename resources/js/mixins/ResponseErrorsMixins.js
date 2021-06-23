export default {
    data() {
        return {
            observerRef: 'observer'
        }
    },
    methods: {
        handleErrors(e) {
            this.isLoading = false
            const {response} = e

            if (response) {
                switch (response.status) {
                    case 422:
                        if (this.$refs[this.observerRef]) {
                            this.$refs[this.observerRef].setErrors(response.data.errors)
                        }
                        break;
                    case 429:
                        this.$notifier.showMessage({content: response.data.message, color: 'orange'})
                        break;
                }
                return
            }

        }
    }
}
