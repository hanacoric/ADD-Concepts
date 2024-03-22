<template>
  <nav class="nav-links">
    <a href="/aboutus" class="aboutus">about us</a>
    <a href="/services" class="services">services</a>
    <a href="/peopleandcontact" class="people">people & contact</a>
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
}

// Call the function when the window loads
window.onload = modifyNavbar;
</script>

<style scoped>
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
</style>
