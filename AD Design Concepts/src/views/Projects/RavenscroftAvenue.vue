<template>
    <div>
        <Navbar />
        <Logo />
        <RavenscroftAvenue />
        <Footer />
    </div>
</template>

<script>

import Navbar from '@/components/MainNavbar.vue';
import Logo from '@/components/logo.vue';
import RavenscroftAvenue from '@/components/Projects/ravenscroftavenue.vue';
import Footer from '@/components/MainFooter.vue';

export default {
    components: {
        Navbar,
        Logo,
        RavenscroftAvenue,
        Footer
    }
}
</script>

<style scoped>
</style>