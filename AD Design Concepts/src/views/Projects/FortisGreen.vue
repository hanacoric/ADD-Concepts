<template>
    <div>
        <Navbar />
        <Logo />
        <fortisgreen />
        <Footer />
    </div>
</template>

<script>

import Navbar from '@/components/MainNavbar.vue';
import Logo from '@/components/logo.vue';
import fortisgreen from '@/components/Projects/fortisgreen.vue';
import Footer from '@/components/MainFooter.vue';

export default {
    components: {
        Navbar,
        Logo,
        fortisgreen,
        Footer
    }
}

</script>

<style scoped>
</style>