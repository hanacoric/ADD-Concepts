<template>
    <div>
        <Navbar />
        <Logo />
        <PrinceAlbert />
        <Footer />

    </div>
</template>


<script>   

import Navbar from '@/components/MainNavbar.vue';
import Logo from '@/components/logo.vue';
import PrinceAlbert from '@/components/Projects/princealbert.vue';
import Footer from '@/components/MainFooter.vue';

export default {
    components: {
        Navbar,
        Logo,
        PrinceAlbert,
        Footer
    }
}
</script>


<style scoped>
</style>