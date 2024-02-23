<template>
    <div>
        <Navbar />
        <Logo />
        <Projects />
        <Footer />
    </div>
</template>

<script>
import Navbar from '@/components/MainNavbar.vue';
import Logo from '@/components/logo.vue';
import Projects from '@/components/projects.vue';
import Footer from '@/components/MainFooter.vue';
export default {
    components: {
        Navbar,
        Logo,
        Projects,
        Footer
    }
}

</script>

<style scoped></style>