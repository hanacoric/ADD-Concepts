<template>
    <div>
        <Navbar />
        <Logo />
        <HungerfordRoad />
        <Footer />
    </div>
    
</template>

<script>
import Navbar from '@/components/MainNavbar.vue';
import Logo from '@/components/logo.vue';
import HungerfordRoad from '@/components/Projects/hungerfordroad.vue';
import Footer from '@/components/MainFooter.vue';

export default {
    components: {
        Navbar,
        Logo,
        HungerfordRoad,
        Footer
    }
}
</script>

<style scoped>
</style>