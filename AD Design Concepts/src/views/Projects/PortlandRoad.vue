<template>
    <div>
        <Navbar />
        <Logo />
        <PortlandRoad />
        <Footer />
    </div>
    
</template>

<script>
import Navbar from '@/components/MainNavbar.vue';
import Logo from '@/components/logo.vue';
import PortlandRoad from '@/components/Projects/portlandroad.vue';
import Footer from '@/components/MainFooter.vue';

export default {
    components: {
        Navbar,
        Logo,
        PortlandRoad,
        Footer
    }
}
</script>

<style scoped>
</style>