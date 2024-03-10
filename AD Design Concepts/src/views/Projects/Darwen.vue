<template>
    <div>
        <Navbar />
        <Logo />
        <Darwen />
        <Footer />
    </div>

</template>

<script>

import Navbar from '@/components/MainNavbar.vue';
import Logo from '@/components/logo.vue';
import Darwen from '@/components/Projects/darwen.vue';
import Footer from '@/components/MainFooter.vue';

export default {
    components: {
        Navbar,
        Logo,
        Darwen,
        Footer
    }
}
</script>

<style scoped>  
</style>