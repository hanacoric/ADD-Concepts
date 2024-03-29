<template>
  <nav class="nav-links">
    <div class="about-wrapper"><a href="/aboutus" class="aboutus">about us</a>
    <div class="underline"></div></div>
    <div class="services-wrapper"><a href="/services" class="services">services</a>
      <div class="underline"></div>
    </div>
    <div class="people-wrapper"><a href="/peopleandcontact" class="people">people & contact</a>
      <div class="underline"></div>
    </div>
  </nav>
</template>

<script>
function modifyNavbar() {
  // Define all possible links in an object with key-value pairs
  const allLinks = {
    "/aboutus": "about us",
    "/services": "services",
    "/peopleandcontact": "people & contact",
    "/projects": "projects",
  };

  // Get the current page's pathname
  const currentPage = window.location.pathname;

  // Get all the navbar links as an array
  const navLinks = Array.from(document.querySelectorAll(".nav-links a"));

  // Extract the hrefs from the navbar links
  const currentNavHrefs = navLinks.map((link) => link.getAttribute("href"));

  // Find the first link not present in the navbar
  const missingLinkKey = Object.keys(allLinks).find(
    (key) => !currentNavHrefs.includes(key)
  );

  // If there's a missing link, replace the current page's navbar link with it
  if (missingLinkKey) {
    navLinks.forEach((link) => {
      if (link.getAttribute("href") === currentPage) {
        link.href = missingLinkKey;
        link.textContent = allLinks[missingLinkKey];
        // Optionally, update the class to reflect the new link type
        link.className = missingLinkKey.substring(1); // Remove '/' and use the rest as class name
      }
    });
  }

animateNavbar();
}

function animateNavbar() {
  const navLinks = Array.from(document.querySelectorAll(".nav-links div"));
  navLinks.forEach((link) => {

    let underline = link.querySelector(`${link.className}, .underline`);

    link.addEventListener("mouseover", () => {
      if (underline.classList.contains("animate-underline-reverse")) {
        underline.classList.remove("animate-underline-reverse");
      }
      underline.classList.add("animate-underline");
    });

    link.addEventListener("mouseout", () => {
      underline.classList.remove("animate-underline");
      underline.classList.add("animate-underline-reverse");
    });

  });
}

// Call the function when the window loads
window.onload = modifyNavbar;
</script>

<style scoped>
@keyframes expandUnderline {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}

@keyframes closeUnderline {
  0% {
    width: 100%;
  }
  100% {
    width: 0%;
  }
}
nav {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
  height: 15vh;
}

nav a {
  color: black;
  text-decoration: none;
  font-size: 40px;
}

.nav-links div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.underline {
  height: 2px;
  background-color: black;
}

.animate-underline{
  animation: expandUnderline 0.5s forwards;
}

.animate-underline-reverse{
  animation: closeUnderline 0.5s forwards;
}


/*@media (max-width: 768px) {
  nav {
    
    flex-direction: column;
    justify-content: flex-start; 
    float:right;
    height: 100vh; 
    padding-top: 20px; 
  }

  nav a {
   
    font-size: 24px; 
    margin-bottom: 20px; 
    color: black;
    text-decoration: none;
    display: block; 
    justify-content: flex-start;
    text-align: left; 
    padding-left: 20px; 
  }
  
 
  nav a:not(:last-child):after {
    content: '';
    display: block;
    border-bottom: 2px solid black;
    margin: 8px 0; 
  }
}
*/

</style>
