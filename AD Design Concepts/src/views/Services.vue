<template>
  <div>
    <Navbar />
    <Logo />
    <Services />
    <FooterComponent />
  </div>
</template>

<script>
import Navbar from "@/components/MainNavbar.vue";
import Logo from "@/components/logo.vue";
import Services from "@/components/services.vue";
import FooterComponent from "@/components/MainFooter.vue";
export default {
  components: {
    Navbar,
    Logo,
    Services,
    FooterComponent,
  },
};
</script>

<style scoped></style>
