<template>
  <section>
    <div class="background-picture">
      <img src="../assets/images/frontpage-nav.jpg" alt="Blurred-mainpage" />
    </div>
    <div class="nav-links">
      <router-link to="/aboutus">About Us</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/services">Services</router-link>
      <router-link to="/peopleandcontact">People & Contact</router-link>
    </div>
  </section>
</template>

<script></script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
}
.nav-links {
  display: flex;
  justify-content: space-around;
  align-items: right;
  flex-direction: column;
  z-index: 1;
}

.nav-links a {
  color: white;
  font-size: 30px;
  font-weight: bold;
}

.background-picture {
  z-index: -1;
}

.img {
  width: 100%;
  height: 100%;
}
</style>
