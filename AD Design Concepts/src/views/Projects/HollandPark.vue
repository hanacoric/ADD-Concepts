<template>
    <div>
        <Navbar />
        <Logo />
        <HollandPark />
        <Footer />
    </div>
</template>

<script>
import Navbar from '@/components/MainNavbar.vue';
import Logo from '@/components/logo.vue';
import HollandPark from '@/components/Projects/hollandpark.vue';
import Footer from '@/components/MainFooter.vue';

export default {
    components: {
        Navbar,
        Logo,
        HollandPark,
        Footer
    }
}
</script>

<style scoped>
</style>