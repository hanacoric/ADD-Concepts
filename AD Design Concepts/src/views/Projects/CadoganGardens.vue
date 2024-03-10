<template>
    <div>
        <Navbar />
        <Logo />
        <CadoganGardens />
        <Footer />
    </div>
</template>

<script>
import Navbar from '@/components/MainNavbar.vue';
import Logo from '@/components/logo.vue';
import CadoganGardens from '@/components/Projects/cadogangardens.vue';
import Footer from '@/components/MainFooter.vue';

export default {
    components: {
        Navbar,
        Logo,
        CadoganGardens,
        Footer
    }
}

</script>

<style scoped>
</style>