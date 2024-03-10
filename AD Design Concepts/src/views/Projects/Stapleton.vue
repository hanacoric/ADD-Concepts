<template>
    <div>
        <Navbar />
        <Logo />
        <Stapleton />
        <Footer />
    </div>
</template>

<script>

import Navbar from '@/components/MainNavbar.vue';
import Logo from '@/components/logo.vue';
import Stapleton from '@/components/Projects/stapleton.vue';
import Footer from '@/components/MainFooter.vue';

export default {
    components: {
        Navbar,
        Logo,
        Stapleton,
        Footer
    }
}
</script>

<style scoped>
</style>