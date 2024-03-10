<template>
    <div>
        <Navbar />
        <Logo />
        <FinchleyRoad />
        <Footer />
    </div>
</template>

<script>
import Navbar from '@/components/MainNavbar.vue';
import Logo from '@/components/logo.vue';
import FinchleyRoad from '@/components/Projects/finchleyroad.vue';
import Footer from '@/components/MainFooter.vue';

export default {
    components: {
        Navbar,
        Logo,
        FinchleyRoad,
        Footer
    }
}
</script>

<style scoped>
</style>