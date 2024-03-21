import { createRouter, createWebHistory } from "vue-router";
import MainPage from "./views/MainPage.vue";
import AboutUs from "./views/AboutUs.vue";
import Services from "./views/Services.vue";
import Planning from "./views/Planning.vue";
import ListedBuildings from "./views/Listed-Buildings.vue";
import Residential from "./views/Residential.vue";
import Interiors from "./views/Interiors.vue";
import PeopleContact from "./views/People&Contact.vue";
import Projects from "./views/Projects.vue";
import fortisgreen from "./views/Projects/FortisGreen.vue";
import atriumhouse from "./views/Projects/AtriumHouse.vue";
import darwen from "./views/Projects/Darwen.vue";
import princealbert from "./views/Projects/PrinceAlbert.vue";
import OakHillAvenue from "./views/Projects/OakhillAvenue.vue";
import ravenscroftavenue from "./views/Projects/RavenscroftAvenue.vue";
import bishopshouse from "./views/Projects/BishopsHouse.vue";
import stapeltonhall from "./views/Projects/Stapleton.vue";
import theavenue from "./views/Projects/TheAvenue.vue";
import hampsteadway from "./views/Projects/HampsteadWay.vue";
import hungerfordroad from "./views/Projects/HungerfordRoad.vue";
import hillviewroad from "./views/Projects/HillviewRoad.vue";
import finchleyroad from "./views/Projects/FinchleyRoad.vue";
import hollandpark from "./views/Projects/HollandPark.vue";
import cadogangardens from "./views/Projects/CadoganGardens.vue";
import portlandroad from "./views/Projects/PortlandRoad.vue";
import kensingtonchurch from "./views/Projects/KensingtonChurch.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: MainPage,
    },

    {
      path: "/aboutus",
      component: AboutUs,
    },
    {
      path: "/services",
      component: Services,
    },
    {
      path: "/planning",
      component: Planning,
    },
    {
      path: "/listedbuildings",
      component: ListedBuildings,
    },
    {
      path: "/residential",
      component: Residential,
    },
    {
      path: "/interiors",
      component: Interiors,
    },
    {
      path: "/peopleandcontact",
      component: PeopleContact,
    },
    {
      path: "/projects",
      component: Projects,
    },
    {
      path: "/projects/fortisgreen",
      component: fortisgreen,
    },
    {
      path: "/projects/atriumhouse",
      component: atriumhouse,
    },
    {
      path: "/projects/darwen",
      component: darwen,
    },
    {
      path: "/projects/princealbert",
      component: princealbert,
    },
    {
      path: "/projects/oakhillavenue",
      component: OakHillAvenue,
    },
    {
      path: "/projects/ravenscroftavenue",
      component: ravenscroftavenue,
    },
    {
      path: "/projects/bishopshouse",
      component: bishopshouse,
    },
    {
      path: "/projects/stapletonhall",
      component: stapeltonhall,
    },
    {
      path: "/projects/theavenue",
      component: theavenue,
    },
    {
      path: "/projects/hampsteadway",
      component: hampsteadway,
    },
    {
      path: "/projects/hungerfordroad",
      component: hungerfordroad,
    },
    {
      path: "/projects/hillviewroad",
      component: hillviewroad,
    },
    {
      path: "/projects/finchleyroad",
      component: finchleyroad,
    },
    {
      path: "/projects/ hollandpark",
      component: hollandpark,
    },
    {
      path: "/projects/cadogangardens",
      component: cadogangardens,
    },
    {
      path: "/projects/portlandroad",
      component: portlandroad,
    },
    {
      path: "/projects/kensingtonchurch",
      component: kensingtonchurch,
    },
  ],
});
