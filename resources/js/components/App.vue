<template>
    <v-app>
        <navigation class="mb-3"></navigation>
        <v-main class="d-flex">
            <router-view></router-view>
        </v-main>
        <Snackbar></Snackbar>
    </v-app>
</template>
<script>
    import Navigation from '@/js/components/Navigation/Index'
    import Snackbar from "@/js/components/Support/Snackbar";
    export default {
        components: {
            Snackbar,
            Navigation
        }
    }
</script>
