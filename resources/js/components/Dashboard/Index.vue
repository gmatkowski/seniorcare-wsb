<template>
    <div>
        <OrderComponent v-if="isSenior"/>
        <FreeComponent v-if="isSupporter" />
    </div>

</template>
<script>
    import OrderComponent from '@/js/components/Order/Index'
    import FreeComponent from '@/js/components/Order/Free'
    import {mapGetters} from "vuex";

    export default {
        components: {
            OrderComponent,
            FreeComponent
        },
        computed: {
            ...mapGetters({
                isSenior: 'auth/isSenior',
                isSupporter: 'auth/isSupporter',
            }),
        },
        data() {
            return {
                breadcrumbs: [
                    {
                        text: 'Seniorcare',
                        disabled: false
                    }
                ]
            }
        }
    }
</script>
