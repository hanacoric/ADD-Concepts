<template>
    <div>
        <Navbar />
        <Logo />
        <KensingtonChurch />
        <Footer />
    </div>
</template>

<script>
import Navbar from '@/components/MainNavbar.vue';
import Logo from '@/components/logo.vue';
import KensingtonChurch from '@/components/Projects/kensingtonchurch.vue';
import Footer from '@/components/MainFooter.vue';

export default {
    components: {
        Navbar,
        Logo,
        KensingtonChurch,
        Footer
    }
}
</script>

<style scoped>
</style>