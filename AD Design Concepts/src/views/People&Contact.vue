<template>
  <div>
    <Navbar />
    <Logo />
    <PeopleContact />
    <FooterComponent />
  </div>
</template>

<script>
import Navbar from "@/components/MainNavbar.vue";
import Logo from "@/components/logo.vue";
import PeopleContact from "@/components/people&contact.vue";
import FooterComponent from "@/components/MainFooter.vue";
export default {
  components: {
    Navbar,
    Logo,
    PeopleContact,
    FooterComponent,
  },
};
</script>

<style scoped></style>
