<script setup>
import MainPage from './views/MainPage.vue';
import AboutUs from './views/AboutUs.vue';
import Projects from './views/Projects.vue';
import Services from './views/Services.vue';
import PeopleContact from './views/People&Contact.vue';
import Planning from './views/Planning.vue';
import ListedBuildings from './views/Listed-Buildings.vue';
import Residential from './views/Residential.vue';
import Interiors from './views/Interiors.vue';
import FortisGreen from './views/FortisGreen.vue';
</script>

<template>
    <div id="app">
        <FortisGreen />
    </div>
</template>

<style scoped>
#app > div:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

</style>




