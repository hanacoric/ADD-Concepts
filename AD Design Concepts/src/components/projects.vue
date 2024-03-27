<template>
  <section>
    <div class="projects-container">
      <div class="projects-line"></div>
      <div class="projects">
        <h1>PROJECTS</h1>
      </div>
    </div>

    <div class="projects-pictures" >
      <div class="row" id="pictures">
        <div class="Fortis-Green">
          <img src="../assets/images/image06.jpg" alt="Fortis Green" />
          <p>Fortis Green</p>
        </div>
        <div class="Atrium-Gate-House">
          <img
            src="../assets/images/image07.jpg"
            alt="Atrium House, Gate House, Highgate"
          />
          <p>Atrium House, Gate House, Highgate</p>
        </div>
        <div class="Darwen-Compton-Avenue">
          <img
            src="../assets/images/image16.jpg"
            alt="Darwen, Compton Avenue"
          />
          <p>Darwen, Compton Avenue</p>
        </div>
      </div>
      <div class="row-two">
        <div class="Prince-Albert-Road">
          <img
            src="../assets/images/image21.jpg"
            alt="Prince Albert Road, London"
          />
          <p>Prince Albert Road, London</p>
        </div>
        <div class="Oakhill-Avenue">
          <img
            src="../assets/images/10a Okhill Avenue - Existing and Proposed Elevations A.jpg"
            alt="Oakhill Avenue, Highgate"
          />
          <p>Oakhill Avenue, Highgate</p>
        </div>

        <div class="Ravenscroft-Avenue">
          <img
            src="../assets/images/image23.jpg"
            alt="Ravenscroft Avenue, Golders Green"
          />
          <p>Ravenscroft Avenue, Golders Green</p>
        </div>
      </div>

      <div class="row-three">
        <div class="Bishops-House">
          <img
            src="../assets/images/Bishop's House - after_resize.jpg"
            alt="Bishop’s House, East Finchley"
          />
          <p>Bishop’s House, East Finchley</p>
        </div>
        <div class="Stapleton-Hall-Road">
          <img
            src="../assets/images/83 Stepleton Hall Road - after_resize.jpg"
            alt="Stapleton Hall Road, London "
          />
          <p>Stapleton Hall Road, London</p>
        </div>
        <div class="The-Avenue">
          <img
            src="../assets/images/9 The Avenue_resize.jpg"
            alt="The Avenue, London"
          />
          <p>The Avenue, London</p>
        </div>
      </div>

      <div class="row-four">
        <div class="Hampstead-Way">
          <img
            src="../assets/images/17 Hampstead Way_resize.jpg"
            alt="Hampstead Way, London"
          />
          <p>Hampstead Way, London</p>
        </div>
        <div class="Hungerford-Road">
          <img
            src="../assets/images/1-3 Hungerford Road (2).jpg"
            alt="Hungerford Road, Islington"
          />
          <p>Hungerford Road, Islington</p>
        </div>
        <div class="Hillview-Road">
          <img
            src="../assets/images/Hillview Road_resize.jpg"
            alt="Hillview Road, London"
          />
          <p>Hillview Road, London</p>
        </div>
      </div>

      <div class="row-five">
        <div class="307-309">
          <img
            src="../assets/images/307 Finchley Road - After 02.jpg"
            alt="307-309 Finchley Road, London"
          />
          <p>307-309 Finchley Road, London</p>
        </div>
        <div class="Holland-Park">
          <img
            src="../assets/images/22 Holland Park Avenue 01.jpg"
            alt="Holland Park Avenue"
          />
          <p>Holland Park Avenue</p>
        </div>
        <div class="Cadogan-Gardens">
          <img
            src="../assets/images/Cadogan Gardens 01a.jpg"
            alt="Cadogan Gardens "
          />
          <p>Cadogan Gardens</p>
        </div>
      </div>

      <div class="row-six">
        <div class="Portland-Road">
          <img
            src="../assets/images/34 Portland Road.jpg"
            alt="Portland Road"
          />
          <p>Portland Road</p>
        </div>
        <div class="Kensington-Church">
          <img
            src="../assets/images/Kensington Church Road01.jpg"
            alt="Kensington Church Street "
          />
          <p>Kensington Church Street</p>
        </div>
      </div>
    </div>

    <div class="text-container">
      <div class="domestic-projects">
        <h2>Smaller scale domestic projects</h2>
      </div>

      <div class="line-wrapper">
        <div class="line"></div>
      </div>

      <div class="text">
        <p>
          Over the years AD Designs has helped numerous clients to secure
          relevant permissions (Planning Permissions, Permitted Development
          Certificates, Freeholder Licences etc.) and to execute alterations,
          extensions and improvements to their properties. These projects
          included loft and garage conversions, remodelling, extensions,
          outbuildings etc. We also assisted many clients in refurbishing their
          properties. The services included specifications of works, working
          drawings and interior design detailing. Among others, these projects
          included Merton House in Highgate, Hendale Avenue in Hendon, Woodstock
          Avenue in Golders Green, a number of Grade II listed flats in Cadogan
          Gardens in Knightsbridge, Portland Road and Holland Park Avenue in
          Holland Park, Fortress Avenue in Kentish Town, Arlington Road in
          Camden Town etc.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
document.addEventListener("DOMContentLoaded", function() {

  const imgElements = document.querySelectorAll('img');

  imgElements.forEach(img => {
    img.classList.add('blackandwhite');

    });
});

</script>

<style scoped>

@keyframes growAndRemoveFilter {
  0% {
    transform: scale(1);
    filter: grayscale(100%);
  }
  100% {
    transform: scale(1.1);
    filter: grayscale(0%);
  }
}

@keyframes shrinkAndApplyFilter {
  0% {
    transform: scale(1.1);
    filter: grayscale(0%);
  }
  100% {
    transform: scale(1);
    filter: grayscale(100%);
  }
}

@keyframes textSlide {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(50%);
  }
}

img:hover {
  animation: growAndRemoveFilter 0.5s forwards;
}

img:not(:hover) {
  animation: shrinkAndApplyFilter 0.5s forwards;
}


.projects-container {
  display: flex;
  align-items: center;
  height: 100px;
}

.projects-line {
  flex: none;
  background-color: black;
  height: 5px;
  width: 100px;
}
.projects {
  font-size: 48px;
  font-weight: bold;
  line-height: 1;
  color: #000000;
}

.projects-pictures {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
}
.row {
  width: 85vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50vh;
}
.row > div {
  flex-basis: 45%;
  text-align: center;
}

.row img {
  display: block;
  margin: 0 auto;
  width: 150%;
  height: auto;
  max-width: 400px;
  display: block;
}

.row p {
  color: #333;
  font-size: 16px;
  margin-top: 8px;
  justify-content: center;
}
.row-two {
  width: 85vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50vh;
}

.row-two > div {
  flex-basis: 45%;
}

.row-two img {
  display: block;
  margin: 0 auto;
  width: 150%;
  height: auto;
  max-width: 400px;
  display: block;
}

.row-two p {
  color: #333;
  font-size: 16px;
  margin-top: 10px;
  justify-content: center;
  text-align: center;
}

.row-three {
  width: 85vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50vh;
}

.row-three > div {
  flex-basis: 45%;
  text-align: center;
}

.row-three img {
  display: block;
  margin: 0 auto;
  width: 150%;
  height: auto;
  max-width: 400px;
  display: block;
}

.row-three p {
  color: #333;
  font-size: 16px;
  margin-top: 8px;
  justify-content: left;
}

.row-four {
  width: 85vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50vh;
}

.row-four > div {
  flex-basis: 45%;
  text-align: center;
}

.row-four img {
  display: block;
  margin: 0 auto;
  width: 150%;
  height: auto;
  max-width: 400px;
  display: block;
}

.row-four p {
  color: #333;
  font-size: 16px;
  margin-top: 8px;
  justify-content: left;
}

.row-five {
  width: 85vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50vh;
}

.row-five > div {
  flex-basis: 45%;
  text-align: center;
}

.row-five img {
  display: block;
  margin: 0 auto;
  width: 150%;
  height: auto;
  max-width: 400px;
  display: block;
}

.row-five p {
  color: #333;
  font-size: 16px;
  margin-top: 8px;
  justify-content: left;
}

.row-six {
  width: 75vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50vh;
}

.row-six > div {
  flex-basis: 45%;
  text-align: center;
}

.row-six img {
  display: block;
  margin: 0 auto;
  width: 150%;
  height: auto;
  max-width: 400px;
  display: block;
}

.row-six p {
  color: #333;
  font-size: 16px;
  margin-top: 8px;
  justify-content: left;
}

.text-container {
  display: flex;
  flex-direction: column;
  margin-top: 150px;
  width: 100%;
}

.domestic-projects {
  display: flex;
  margin-left: 200px;
  align-items: center;
  flex-direction: row;
  width: 98%;
}

.line-wrapper {
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 60px;
}

.domestic-projects h2 {
  font-size: 40px;
  font-weight: bold;
  line-height: 1;
  color: #000000;
}

.line {
  background-color: black;
  height: 3px;
  width: 700px;
}

.text {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  width: 100%;
  margin-top: 50px;
  margin-left: 200px;
}

.text p {
  width: 50%;
  text-align: justify;
  font-size: 20px;
  color: #333;
}

.blackandwhite {
  filter: grayscale(100%);
}
</style>