<template>
    <div>
        <MainNavbar />
        <logo />
        <ListedBuildings />
        <Footer />
    </div>

</template>

<script>
import MainNavbar from '../components/MainNavbar.vue';
import logo from '../components/logo.vue';
import ListedBuildings from '../components/listed-buildings.vue';
import Footer from '../components/MainFooter.vue';

export default {
    components: {
        MainNavbar,
        logo,
        ListedBuildings,
        Footer
    }
}
</script>

<style scoped>
</style>