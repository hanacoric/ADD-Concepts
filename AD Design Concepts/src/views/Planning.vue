<template>
    
    <div>
        <MainNavbar />
        <logo />
        <Planning />
        <Footer />

    </div>
</template>

<script>
import MainNavbar from '../components/MainNavbar.vue';
import logo from '../components/logo.vue';
import Planning from '../components/planning.vue';
import Footer from '../components/MainFooter.vue';

export default {
    components: {
        MainNavbar,
        logo,
        Planning,
        Footer
    }
}

</script>

<style scoped>
</style>