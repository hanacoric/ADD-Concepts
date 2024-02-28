<script setup>
import MainPage from './views/MainPage.vue';
import AboutUs from './views/AboutUs.vue';
import Projects from './views/Projects.vue';
import Services from './views/Services.vue';
import PeopleContact from './views/People&Contact.vue';
import Planning from './views/Planning.vue';
</script>

<template>
    <div id="app">
        <PeopleContact />
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




