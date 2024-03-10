<template>
    <div>
        <Navbar />
        <Logo />
        <HampsteadWay />
        <Footer />
    </div>
    
</template>

<script>
import Navbar from '@/components/MainNavbar.vue';
import Logo from '@/components/logo.vue';
import HampsteadWay from '@/components/Projects/hampsteadway.vue';
import Footer from '@/components/MainFooter.vue';

export default {
    components: {
        Navbar,
        Logo,
        HampsteadWay,
        Footer
    }
}
</script>

<style scoped>
</style>