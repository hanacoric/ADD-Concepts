<template>
  
  <div>
        <Navbar />
        <Logo />
        <aboutus />
        <Footer />

  </div>
  
</template>

          <script>
          import Navbar from '@/components/MainNavbar.vue';
          import Logo from '@/components/logo.vue';
          import aboutus from '@/components/aboutus.vue';
          import Footer from '@/components/MainFooter.vue';
export default {
  components: {
    Navbar,
    Logo,
    aboutus,
    Footer
  }
  }
</script>

<style scoped>

</style>