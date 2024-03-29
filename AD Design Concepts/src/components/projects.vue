<template>
  <section classs="project-root">
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

export default {
  mounted() {
    const allParagraphs = document.querySelectorAll('p');
    const allHeadings = document.querySelectorAll('h3, h2');

    allParagraphs.forEach((paragraph) => {
      if (!paragraph.classList.contains('dontFadeIn')) {
        paragraph.classList.add('primedForAnimation');
      }
    });

    allHeadings.forEach((heading) => {
      if (!heading.classList.contains('dontFadeIn')) {
        heading.classList.add('primedForAnimation');
      }
    });

    // Create a new Intersection Observer instance
    const observer = new IntersectionObserver((entries) => {
      // Loop over the entries
      entries.forEach(entry => {
        // If the element is fully in view
        if (entry.intersectionRatio === 1 && !entry.target.classList.contains('inView')) {

          entry.target.classList.add('inView');
        }
      });
    }, {
      threshold: 1.0 // Trigger the callback when the element is fully in view
    });

    // Start observing the right-text-below element
    allParagraphs.forEach((paragraph) => {
      if (!paragraph.classList.contains('dontFadeIn')) {
        observer.observe(paragraph);
      }
    });

    allHeadings.forEach((heading) => {
      if (!heading.classList.contains('dontFadeIn')) {
        observer.observe(heading);
      }
    });
  }
}

</script>

<style scoped>
@keyframes slideInLeftToRight{
  0%{
    transform: translateX(-100%);
    opacity: 0;
  }
  100%{
    transform: translateX(0%);
    opacity: 1;
  }
}

@keyframes loadText {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}


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

.project-root{
  height: 350vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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
  width: 200px;
  animation: slideInLeftToRight 2s forwards;
}
.projects {
  font-size: 60px;
  font-weight: bold;
  line-height: 2.5;
  color: #000000;
  animation: slideInLeftToRight 1s forwards;
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
  font-size: 20px;
  margin-top: 20px;
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
  font-size: 20px;
  margin-top: 20px;
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
  font-size: 20px;
  margin-top: 20px;
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
  font-size: 20px;
  margin-top: 20px;
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
  font-size: 20px;
  margin-top: 20px;
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
  font-size: 20px;
  margin-top: 20px;
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
  font-size: 50px;
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
  
}

.text p {
  width: 60%;
  text-align: justify;
  font-size: 28px;
  color: #333;
}

.blackandwhite {
  filter: grayscale(100%);
}

.inView {
  animation: loadText 1s forwards;
}

.primedForAnimation {
  opacity: 0;
}



@media (max-width: 768px) {

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
    margin-bottom: 50px;
  }

  .projects h1 {
    font-size: 50px;
    line-height: 1.5;
    font-weight: bold;
    
  }

  .projects-line {
    height: 2px;
    width: 100px;
  }
  .projects {
    font-size: 30px; 
    line-height: 1.5; 
  }

  
  .row, .row-two, .row-three, .row-four, .row-five, .row-six {
    flex-direction: column;
    align-items: center; 
    height: auto;
  }


  .row > div, .row-two > div, .row-three > div, .row-four > div, .row-five > div, .row-six > div {
    width: 100%; 
    flex-basis: auto;
  }

  .row img, .row-two img, .row-three img, .row-four img, .row-five img, .row-six img {
    width: 80%; /* Make images full width */
    max-width: none; /* Remove max width restriction */
    height: auto; /* Maintain aspect ratio */
    margin-bottom: 20px; /* Add space below the image */
    
  }

  /* Adjust paragraph styles inside rows */
  .row p, .row-two p, .row-three p, .row-four p, .row-five p, .row-six p {
    font-size: 18px; /* Adjust font size for readability */
    margin-top: 10px; /* Reduce space above the paragraph */
    text-align: center; /* Center align the text */
    margin-bottom: 50px; /* Add space below the paragraph */
  }

  .text-container {
    margin-top: 50px; /* Adjust the top margin of the text container */
  }

  .domestic-projects {
    margin-left: 0; /* Remove left margin */
    flex-direction: column; /* Stack children vertically */
    align-items: center; /* Center children */
  }

  .domestic-projects h2 {
    font-size: 24px; /* Adjust font size for readability */
    line-height: 1.5; /* Adjust line height for readability */
    margin-bottom: 20px;
  }

  .line-wrapper {
    display: none;
  }

  .text {
    display:flex;
    justify-content: center; /* Center text */
    align-items: center; /* Center text */
    flex-direction: column; /* Stack children vertically */
    width: 100%; /* Adjust width for readability */
    margin-top: 20px; /* Adjust top margin for spacing */
  }

  .text p {
    font-size: 16px; /* Adjust font size for readability */
    width: 70%; /* Full width for text */
    text-align: justify; /* Justify text for readability */


  }
}

</style>