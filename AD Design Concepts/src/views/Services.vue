<template>
  
  <div>
        <Navbar />
        <Logo />
        <Services />
        <Footer />

  </div>
  
</template>

          <script>
          import Navbar from '@/components/MainNavbar.vue';
          import Logo from '@/components/logo.vue';
          import Services from '@/components/services.vue';
          import Footer from '@/components/MainFooter.vue';
export default {
  components: {
    Navbar,
    Logo,
    Services,
    Footer
  }
  }
</script>

<style scoped>

</style>