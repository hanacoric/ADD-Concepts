<template>
  <section class="main-section">
    <div class="hamburger-menu hamburger-menu-open">
      <svg
        class="hamburger-menu-svg"
        id="hamburger-id"
        width="800px"
        height="800px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z"
          fill="#000000"
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
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  if (hamburgerMenu) {
    hamburgerMenu.addEventListener("click", openMenu);
  }
});

function openMenu() {
  replaceButton();
  setBackdrop();
  addContent();
}

function replaceButton() {
  // Get the old element you want to replace
  var oldElement = document.getElementById("hamburger-id");
  var newElement = document.createElement("svg");

  // Replace the old element by setting outerHTML to new content
  newElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="66.999" height="59.561" viewBox="0 0 66.999 59.561">
            <g id="Group_19" data-name="Group 19" transform="translate(-1080.18 -431.519)">
                <line id="Line_7" data-name="Line 7" x2="63.705" y2="55.8" transform="translate(1081.828 433.4)" fill="none" stroke="#fff" stroke-width="5"/>
                <line id="Line_8" data-name="Line 8" y1="55.8" x2="63.705" transform="translate(1081.828 433.4)" fill="none" stroke="#fff" stroke-width="5"/>
            </g>
        </svg>`;

  newElement.className = oldElement.className;
  oldElement.parentNode.replaceChild(newElement, oldElement);
}

function setBackdrop() {
  // Remove all child elements of the sliders container
  const sliders = document.querySelector(".sliders");
  if (sliders) {
    sliders.outerHTML = ""; // This removes all child elements
  }

  // Apply a blur effect to the background image of the main section
  const mainSection = document.querySelector(".main-section");
  if (mainSection) {
    mainSection.classList.toggle("active-blur");
  }
}

function addContent() {
  const mainSection = document.querySelector(".main-section");
  if (mainSection) {
    const navcontent = document.createElement("div");
    navcontent.innerHTML = `<a href="">About us</a>
      <span class="line"></span>
      <a href="">Projects</a>
      <span class="line"></span>
      <a href="">Services</a>
      <span class="line"></span>
      <a href="">People & contacts</a>
      <span class="line"></span>`;
    navcontent.className = "nav-content";
    mainSection.appendChild(navcontent);
  }
}
</script>

<style scoped>
.main-section {
  width: 100vw;
  height: 786px;
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
  fill: #7d7d7d5f;
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
  background-color: red;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}
</style>
