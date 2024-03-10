<template>
    <div>
        <Navbar />
        <Logo />
        <HillviewRoad />
        <Footer />
    </div>
</template>

<script>
import Navbar from '@/components/MainNavbar.vue';
import Logo from '@/components/logo.vue';
import HillviewRoad from '@/components/Projects/hillviewroad.vue';
import Footer from '@/components/MainFooter.vue';

export default {
    components: {
        Navbar,
        Logo,
        HillviewRoad,
        Footer
    }
}
</script>

<style scoped>
</style>