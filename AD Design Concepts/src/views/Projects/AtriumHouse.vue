<template>
    <div>
        <Navbar />
        <Logo />
        <AtriumHouse />
        <Footer />
    </div>
</template>

<script>

import Navbar from '@/components/MainNavbar.vue';
import Logo from '@/components/logo.vue';
import AtriumHouse from '@/components/Projects/atriumhouse.vue';
import Footer from '@/components/MainFooter.vue';

export default {
    components: {
        Navbar,
        Logo,
        AtriumHouse,
        Footer
    }
}
</script>

<style scoped>
</style>