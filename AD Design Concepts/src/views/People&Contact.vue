<template>
    <div>
        <Navbar />
        <Logo />
        <PeopleContact />
        
    </div>
</template>

<script>
import Navbar from '@/components/MainNavbar.vue';  
import Logo from '@/components/logo.vue';
import PeopleContact from '@/components/people&contact.vue';
import Footer from '@/components/MainFooter.vue';
export default {
  components: {
    Navbar,
    Logo,
    PeopleContact,
    Footer
  }
}

</script>

<style scoped></style>
