<template>
    
    <div>
        <MainNavbar />
        <logo />
        <Planning />

    </div>
</template>

<script>
import MainNavbar from '../components/MainNavbar.vue';
import logo from '../components/logo.vue';
import Planning from '../components/planning.vue';

export default {
    components: {
        MainNavbar,
        logo,
        Planning
    }
}

</script>

<style scoped>
</style>