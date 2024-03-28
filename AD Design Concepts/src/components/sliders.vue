<template>
  <section class="main-section">
    <div class="nav-content disabled">
      <div class="wrapper">
        <a href="aboutus">about us</a>
        <div class="line"></div>
      </div>
      <div class="wrapper">
        <a href="/projects">projects</a>
        <div class="line"></div>
      </div>
      <div class="wrapper">
        <a href="/services">services</a>
        <div class="line"></div>
      </div>
      <div class="wrapper">
        <a href="peopleandcontact">people & contact</a>
        <div class="line"></div>
      </div>
    </div>

    <div class="hamburger-menu hamburger-menu-open" id="hamburger-id">
      <!-- Hamburger Icon -->
      <svg
        class="icon-hamburger"
        xmlns="http://www.w3.org/2000/svg"
        width="70"
        height="70"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M4 5H20M4 12H20M4 19H20"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <!-- Close Icon, initially hidden -->
      <svg
        class="icon-close"
        xmlns="http://www.w3.org/2000/svg"
        width="70"
        height="70"
        viewBox="0 0 24 24"
        fill="none"
        style="display: none"
      >
        <path
          d="M6 6L18 18M6 18L18 6"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>

    <div class="sliders">
      <div class="arrow-left">
        <svg
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          width="267.57"
          height="490.55"
          viewBox="0 0 267.57 490.55"
        >
          <defs>.cls-1{fill:#fff;stroke-width:0px;}</defs>
          <path
            class="cls-1"
            d="M53.83,245.28L261.04,38.06c8.71-8.71,8.71-22.83,0-31.53-8.71-8.71-22.83-8.71-31.53,0L6.53,229.52c-4.18,4.18-6.53,9.85-6.53,15.76s2.35,11.59,6.53,15.77l222.98,222.97c4.35,4.35,10.06,6.53,15.77,6.53s11.41-2.18,15.77-6.53c8.71-8.71,8.71-22.83,0-31.53L53.83,245.28Z"
          />
        </svg>
      </div>
      <div class="slider-text">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="818.334"
          height="255"
          viewBox="0 0 818.334 255"
        >
          <g
            id="Group_59"
            data-name="Group 59"
            transform="translate(-550.833 -469)"
          >
            <text
              id="_DESIGN_"
              data-name=" DESIGN "
              transform="translate(890 604.2)"
              fill="none"
              stroke="#efece9"
              stroke-width="3"
              font-size="105"
              font-family="ZurichBlackBT, Zurich BT"
            >
              <tspan x="0" y="0" xml:space="preserve">DESIGN</tspan>
            </text>
            <text
              id="CONCEPTS"
              transform="translate(895.008 666.7)"
              fill="none"
              stroke="#efece9"
              stroke-width="3"
              font-size="73"
              font-family="ZurichBlackBT, Zurich BT"
            >
              <tspan x="0" y="0">CONCEPTS</tspan>
            </text>
            <text
              id="AD"
              transform="translate(554.833 671)"
              fill="none"
              stroke="#efece9"
              stroke-width="4"
              font-size="206"
              font-family="ZurichBlackBT, Zurich BT"
            >
              <tspan x="0" y="0">AD</tspan>
            </text>
          </g>
        </svg>
      </div>
      <div class="arrow-right">
        <svg
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          width="267.57"
          height="490.55"
          viewBox="0 0 267.57 490.55"
        >
          <defs>.cls-1{fill:#fff;stroke-width:0px;}</defs>
          <path
            class="cls-1"
            d="M213.74,245.27L6.53,452.49c-8.71,8.71-8.71,22.83,0,31.53s22.83,8.71,31.53,0l222.98-222.98c4.18-4.18,6.53-9.85,6.53-15.76s-2.35-11.59-6.53-15.77L38.06,6.53C33.71,2.18,28.01,0,22.3,0c-5.71,0-11.41,2.18-15.77,6.53-8.71,8.71-8.71,22.83,0,31.53l207.21,207.2Z"
          />
        </svg>
      </div>
    </div>
  </section>
</template>

<script>
document.addEventListener("DOMContentLoaded", (event) => {
  const hamburgerMenu = document.getElementById("hamburger-id");
  if (hamburgerMenu) {
    hamburgerMenu.addEventListener("click", toggleMenuIcons);
  }
});

function toggleMenuIcons() {
  const hamburgerIcon = document.querySelector(".icon-hamburger");
  const closeIcon = document.querySelector(".icon-close");

  // Check if the hamburger icon is currently displayed
  if (hamburgerIcon.style.display === "none") {
    // If the hamburger icon is hidden, show it and hide the close icon
    hamburgerIcon.style.display = "block";
    closeIcon.style.display = "none";
  } else {
    // If the hamburger icon is shown, hide it and show the close icon
    hamburgerIcon.style.display = "none";
    closeIcon.style.display = "block";
  }

  // Here, call any other functions you need to toggle, such as showing/hiding the navigation content or applying a blur effect
  const navContent = document.querySelector(".nav-content");
  const mainSection = document.querySelector(".main-section");

  // Toggle the disabled class on nav-content to show/hide
  navContent.classList.toggle("disabled");
  // Toggle the active-blur class on main-section to enable/disable blur
  mainSection.classList.toggle("active-blur");

  if (navContent.classList.contains("disabled")) {
    navContent.classList.remove("animate");
    navContent.classList.add("animate-out");
  } else {
    navContent.classList.remove("animate-out");
    navContent.classList.add("animate");
  }
}
</script>

<style scoped>

@keyframes slideInRightToLeft {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideOutLeftToRight {
  0% {
    opacity: 1;
    transform: translateX(0%);
  }
  100% {
    opacity: 0;
    transform: translateX(100%);
  }
}


.main-section {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(../assets/images/Image05.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  overflow: hidden;
}

.hamburger-menu {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 100;
  filter: brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%)
    hue-rotate(201deg) brightness(106%) contrast(106%);
}

.hamburger-menu-svg {
  width: 80px;
  height: 70px;
}
.hamburger-menu-svg path {
  fill: #000000;
}
.hamburger-menu-svg:hover {
  cursor: pointer;
}
.hamburger-menu-svg:hover path {
  fill: #4847475f;
}

.sliders {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
  height: 100vh;
}

.arrow-left,
.arrow-right {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%)
    hue-rotate(201deg) brightness(106%) contrast(106%);
}

.slider-text {
  width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-section::before {
  content: ""; /* Required for pseudo-elements */
  position: absolute; /* Position relative to the main-section */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: inherit; /* Use the same background image as the main-section */
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(8px); /* Adjust the blur intensity as needed */
  z-index: -1; /* Ensure the pseudo-element is behind the content */
}

.main-section.active-blur::before {
  z-index: 1; /* Set the z-index to 1 when active-blur class is added */
}

.nav-content {
  height: 50vh;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-end;
  z-index: 3;
  right: 0; /* Align to the right edge of the nearest positioned ancestor */
 
}

.nav-content a {
  color: #fff;
  text-decoration: none;
  font-size: 4.5rem;
}

.nav-content .line {
  margin-top: 60px;
  width: 100px;
  height: 5px;
  background-color: #fff;
}

.nav-content .wrapper {
  width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: nowrap;
}

.nav-content.animate{
  animation: slideInRightToLeft 0.5s forwards;
}

.nav-content.animate-out{
  animation: slideOutLeftToRight 0.5s forwards;
}

.disabled {
  pointer-events: none;
  cursor: not-allowed;
  opacity: 0;
}

@media (max-width: 768px) {

.main-section {
  justify-content: center;
  align-items: stretch;
  background-image: url(../assets/images/Image05-mobile.jpg);
}

.hamburger-menu {
  top: 10px; 
  right: 10px; 
}

.hamburger-menu-svg {

  width: 30%;
  height: 25%;
}

.sliders {
  flex-direction: column; 
  justify-content: flex-start;
  height: auto; 
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  
}

.arrow-left,
.arrow-right {
  width: 20px; 
  height: 20px;


}

.slider-text {
  width: 60%; 
  padding: 10px; 
  box-sizing: border-box; 
}

.main-section::before {

  filter: blur(5px); 
}

.nav-content {
  height: auto; /* Adjust height based on content */
  flex-direction: row; /* Align items in a row for a horizontal menu */
  justify-content: center; /* Center items horizontally */
  align-items: center; /* Center items vertically */
  bottom: 0; /* Position at the bottom of the screen */
  right: auto; /* Reset alignment from the right */
  left: 0; /* Stretch from the left edge */
  width: 100%; /* Full width */
}

.nav-content a {
  /* Adjust navigation links */
  font-size: 2rem; /* Smaller font size for links */
  margin: 0 3px; /* Add margin between links */
}

.nav-content .line {
  /* Adjust decorative line if needed */
  display: none; /* Hide the line on smaller screens if it doesn't fit */
}

.nav-content .wrapper {
  /* Adjust wrapper layout */
  width: auto; /* Allow it to grow with the content */
  flex-wrap: wrap; /* Allow items to wrap if space is insufficient */
}

  .main-section::before {
    /* Enhanced blur effect */
    filter: blur(12px);
  }

  .main-section.active-blur::before {
    /* Make sure the z-index is higher than the other elements but lower than the navigation content */
    z-index: 2; 
  }

  /* Adjust the navigation content to be full-screen with flexbox centering */
  .nav-content {
    width: 100%; /* Full width */
    height: 100vh; /* Full height to cover the entire viewport */
    position: fixed; /* Fixed position to stay in place during scroll */
    top: 0; /* Align to the top */
    right: 0; /* Align to the right */
    left: 0; /* Align to the left */
    bottom: 0; /* Align to the bottom */
    justify-content: center; /* Center content vertically */
    align-items: center; /* Center content horizontally */
    background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
    z-index: 10; /* Make sure it's on top of other content */
    flex-direction: column; /* Stack items vertically */
  }

  .nav-content a {
    font-size: 2rem; /* Adjust font size for smaller screens */
    margin: 15px 0; /* Add vertical margin between links */
    color: #fff; /* White color for the text */
 
  }

  .nav-content .line {
    width: 50px; /* Shorter lines for smaller screens */
    margin-top: 15px; /* Less space above the line */
    background-color: #fff; /* White color for the line */
  }

  /* Adjust the individual wrapper for the navigation links if necessary */
  .nav-content .wrapper {
    width: 100%; /* Full width */
    padding: 0 20px; /* Padding on the sides */
    box-sizing: border-box; /* Include padding in width calculation */
    justify-content: center; /* Center items in the wrapper */
  }

  /* Handle the opening and closing animations for the mobile menu */
  .nav-content.animate {
    animation: slideInRightToLeft 0.5s forwards;
  }

  .nav-content.animate-out {
    animation: slideOutLeftToRight 0.5s forwards;
  }

  .disabled {
    opacity: 0.5; 
  }
}



</style>

