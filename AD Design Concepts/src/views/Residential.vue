<template>
    <div>
        <MainNavbar />
        <logo />
        <Residential />
        <Footer />
    </div>

</template>

<script>   
import MainNavbar from '../components/MainNavbar.vue';
import logo from '../components/logo.vue';
import Residential from '../components/residential.vue';
import Footer from '../components/MainFooter.vue';

export default {
    components: {
        MainNavbar,
        logo,
        Residential,
        Footer
    }
}
</script>

<style scoped>
</style>