<template>
    <div>
        <MainNavbar />
        <logo />
        <Interiors />
        <Footer />
    </div>
    
</template>

<script>
import MainNavbar from '../components/MainNavbar.vue';
import logo from '../components/logo.vue';
import Interiors from '../components/interiors.vue';
import Footer from '../components/MainFooter.vue';

export default {
    components: {
        MainNavbar,
        logo,
        Interiors,
        Footer
    }
}
</script>

<style scoped>
</style>