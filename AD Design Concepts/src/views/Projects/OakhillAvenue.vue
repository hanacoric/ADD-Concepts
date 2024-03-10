<template>
    <div>
        <Navbar />
        <Logo />
        <OakhillAvenue />
        <Footer />
    </div>
    
</template>

<script>   

import Navbar from '@/components/MainNavbar.vue';
import Logo from '@/components/logo.vue';
import OakhillAvenue from '@/components/Projects/oakhillavenue.vue';
import Footer from '@/components/MainFooter.vue';
export default {
    components: {
        Navbar,
        Logo,
        OakhillAvenue,
        Footer
    }
}
</script>

<style scoped>
</style>