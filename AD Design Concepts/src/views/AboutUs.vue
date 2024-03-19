
<script>
import Navbar from '@/components/MainNavbar.vue';
import Logo from '@/components/logo.vue';
import aboutus from '@/components/aboutus.vue';
import FooterComponent from '@/components/MainFooter.vue';
export default {
  components: {
    Navbar,
    Logo,
    aboutus,
    FooterComponent
  }
  }
</script>

<template>
  
  <div>
        <Navbar />
        <Logo />
        <aboutus />
        <FooterComponent />

  </div>
  
</template>


<style scoped>

</style>