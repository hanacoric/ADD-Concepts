<template>
    <div>
        <Navbar />
        <Logo />
        <BishopsHouse />
        <Footer />
    </div>
</template>

<script>

import Navbar from '@/components/MainNavbar.vue';
import Logo from '@/components/logo.vue';
import BishopsHouse from '@/components/Projects/bishopshouse.vue';
import Footer from '@/components/MainFooter.vue';

export default {
    components: {
        Navbar,
        Logo,
        BishopsHouse,
        Footer
    }
}
</script>

<style scoped>
</style>