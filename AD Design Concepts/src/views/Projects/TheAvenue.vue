<template>
    <div>
        <Navbar />
        <Logo />
        <TheAvenue />
        <Footer />
    </div>
</template>

<script>
import Navbar from '@/components/MainNavbar.vue';
import Logo from '@/components/logo.vue';
import TheAvenue from '@/components/Projects/theavenue.vue';
import Footer from '@/components/MainFooter.vue';

export default {
    components: {
        Navbar,
        Logo,
        TheAvenue,
        Footer
    }
}
</script>

<style scoped>
</style>