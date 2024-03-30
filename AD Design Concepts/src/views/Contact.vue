<template>
  <div>
    <Navbar />
    <Logo />
    <Contact />
    <FooterComponent />
  </div>
</template>

<script>
import Navbar from "@/components/MainNavbar.vue";
import Logo from "@/components/logo.vue";
import Contact from "@/components/contact.vue";
import FooterComponent from "@/components/MainFooter.vue";
export default {
  components: {
    Navbar,
    Logo,
    Contact,
    FooterComponent,
  },
};
</script>

<style scoped></style>
