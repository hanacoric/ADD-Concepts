<template>
  <section>
      <div class="planning-container">
          <div class="planning">
                  <h1>Planning</h1>
          </div>
      </div>
       <div class="projects-pictures">
      <div class="row">
          <div class="Fortis-Green">
              <img src="../assets/images/image06.jpg" alt="Fortis Green">
              <p> Fortis Green </p>
          </div>
          <div class="Atrium-Gate-House">
              <img src="../assets/images/image07.jpg" alt="Atrium House, Gate House, Highgate">
              <p> Atrium House, Gate House, Highgate </p>
          </div>
          <div class="Darwen-Compton-Avenue">
              <img src="../assets/images/image16.jpg" alt="Darwen, Compton Avenue">
              <p> Darwen, Compton Avenue </p>
          </div>
      </div>
      <div class="row-two">
          <div class="Prince-Albert-Road">
              <img src="../assets/images/image21.jpg" alt="Prince Albert Road, London">
              <p> Prince Albert Road, London </p>
          </div>
          <div class="Oakhill-Avenue">
              <img src="../assets/images/10a Okhill Avenue - Existing and Proposed Elevations A.jpg" alt="Oakhill Avenue, Highgate">
              <p> Oakhill Avenue, Highgate </p>
          </div>
        <div class="ravenscroftavenue">
               <img src="../assets/images/image23.jpg" alt="Ravenscroft Avenue, Golders Green">
                <p> Ravenscroft Avenue, Golders Green </p>
        </div>
      </div>
  
      <div class="row-three">
        <div class="Bishops-House">
          <img
            src="../assets/images/Bishop's House - before.jpg"
            alt="Bishop’s House, East Finchley"
          />
          <p>Bishop’s House, East Finchley</p>
        </div>
        <div class="Stapleton-Hall-Road">
          <img
            src="../assets/images/83 Stepleton Hall Road - after.jpg"
            alt="Stapleton Hall Road, London "
          />
          <p>Stapleton Hall Road, London</p>
        </div>
          <div class="The-Avenue">
                  <img src="../assets/images/9 The Avenue_resize.jpg" alt="The Avenue, London">
                  <p> The Avenue, London </p>
              </div>
      </div>
      <div class="row-four">
          <div class="Hampstead-Way">
              <img src="../assets/images/17 Hampstead Way.jpg" alt="Hampstead Way, London">
              <p> Hampstead Way, London </p>
          </div>
          <div class="Hungerford-Road">
                  <img src="../assets/images/1-3 Hungerford Road.jpg" alt="Hungerford Road, Islington">
                  <p> Hungerford Road, Islington </p>
              </div>
              <div class="Hillview-Road">
                  <img src="../assets/images/8 Hillview Road 01.jpg" alt="Hillview Road, London">
                  <p> Hillview Road, London </p>
              </div>
      </div>
          <div class="row-five">
              <div class="threezeroseven">
                  <img src="../assets/images/307 Finchley Road - After 02.jpg" alt="307-309 Finchley Road, London">
                  <p> Finchley Road, London </p>
              </div>
              <div class="Holland-Park">
                  <img src="../assets/images/22 Holland Park Avenue 01.jpg" alt="Holland Park Avenue">
                  <p> Holland Park Avenue </p>
              </div>
              <div class="Cadogan-Gardens ">
                  <img src="../assets/images/Cadogan Gardens 01a.jpg" alt="Cadogan Gardens ">
                  <p> Cadogan Gardens  </p>
              </div>
          </div>

          <div class="row-six">
              <div class="Portland-Road">
                  <img src="../assets/images/34 Portland Road.jpg" alt="Portland Road">
                  <p> Portland Road </p>
              </div>
              <div class="Kensington-Church">
                  <img src="../assets/images/Kensington Church Road01.jpg" alt="Kensington Church Street ">
                  <p> Kensington Church Street  </p>
              </div>
          </div>
      </div>

  </section>
</template>
<script>

export default {
mounted() {
  observeElements();
  blackAndWhite();
  setupTakeToProject();
}
}

function observeElements(){

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

function blackAndWhite(){
const imgElements = document.querySelectorAll('img');
let originalImage;
let intervalId;

imgElements.forEach(img => {
  img.classList.add('blackandwhite');
  let imageArray = fillImageArray(img);
  img.addEventListener('mouseenter', () => {
    originalImage = img.src;
    intervalId = setInterval(() => setupSlideShow(img, imageArray), 1000);
  });
  img.addEventListener('mouseleave', () => {
    img.src = originalImage;
    clearInterval(intervalId);
  });
});
}

function getFolderPath(element){
let fortisGreen = document.querySelector('.Fortis-Green');
let atriumGateHouse = document.querySelector('.Atrium-Gate-House');
let darwenComptonAvenue = document.querySelector('.Darwen-Compton-Avenue');
let bishopsHouse = document.querySelector('.Bishops-House');
let stapletonHallRoad = document.querySelector('.Stapleton-Hall-Road');
let hillviewRoad = document.querySelector('.Hillview-Road');
let threeZeroSeven = document.querySelector('.three-zero-seven');
let cadoganGardens = document.querySelector('.Cadogan-Gardens');

switch (element){
  case fortisGreen:
    return "/src/assets/fortisgreenimg/";
    break;
  case atriumGateHouse:
    return "/src/assets/atriumgatehouseimg/";
    break;
  case darwenComptonAvenue:
    return "/src/assets/darwenimg/";
    break;
  case threeZeroSeven:
    return "/src/assets/307309finchleyroadimg/";
    break;
  case bishopsHouse:
    return "/src/assets/bishopshouseimg/";
    break;
  case cadoganGardens:
    return "/src/assets/cadogangardens/";
    break;
  case hillviewRoad:
    return "/src/assets/hillviewroadimg/";
    break;
  case stapletonHallRoad:
    return "/src/assets/stapeltonhallroadimg/";
    break;
  default:
    return "404";
}
}

function fillImageArray(element){
let imageFolderPath = getFolderPath(element.parentElement)
let imageArray = [];
let fileName = "image";
let fileExtension = ".jpg";

let bCheckEnabled = true;
let bFinishCheck = false;
let img;
let i = 1;

let myInterval = setInterval(loadImage, 1);

function loadImage() {

  if (bFinishCheck) {
    clearInterval(myInterval);
    return;
  }

  if (bCheckEnabled) {

    bCheckEnabled = false;

    img = new Image();
    img.onload = fExists;
    img.onerror = fDoesntExist;
    img.src = imageFolderPath + fileName + i + fileExtension;
  }

}

function fExists() {
  imageArray.push(imageFolderPath + fileName + i + fileExtension);
  i++;
  bCheckEnabled = true;
}

function fDoesntExist() {
  bFinishCheck = true;
}

return imageArray;
}

function setupSlideShow(element, imageArray) {
if (!imageArray.length) return;

// Find the index of the current image in the array
let currentIndex = imageArray.findIndex(img => element.src.includes(img));
// If the current image is the last one in the array, go back to the first image
// Otherwise, go to the next image
let nextIndex = (currentIndex === imageArray.length - 1) ? 0 : currentIndex + 1;


// Set the src of the image to the next image
element.src = imageArray[nextIndex];

}

function setupTakeToProject() {
const rows = document.querySelectorAll('.row, .row-two, .row-three, .row-four, .row-five, .row-six');

rows.forEach(row => {
  const divs = row.querySelectorAll('div');

  divs.forEach(div => {
    div.addEventListener('click', () => {
      window.location.href = "/projects/" + div.className.replace(/-/g, '').toLowerCase();
    });
  });
});
}


</script>

<style scoped>

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


.planning-container {
  display: flex; 
  align-items: center; 
  height: 250px;
}

.planning {
  font-size: 48px; 
  font-weight: bold; 
  line-height: 1; 
  color: #000000;
  margin-left:150px;
  font-family: "Soliden-Bold";

}

.projects-pictures {
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
}
.row {
width: 85vw;
display: flex;
justify-content: space-between;
align-items: center;
height: 60vh;
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
max-width: 350px;
display: block;
}

.row p {
color: #000000;
font-size: 20px;
margin-top: 20px;
justify-content: center;
font-family: "Mundial";
}
.row-two {
width: 100%;
display: flex;
justify-content: space-evenly;
align-items: center;
height: max-content;
}

.row-two div {
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
text-align: center;
}

.row-two img {
width: 100%;
height: auto;
max-width: 320px;
display: block;
}

.row-two p {
color: #000000;
font-size: 20px;
margin-top: 20px;
justify-content: center;
text-align: center;
font-family: "Mundial";
}

.row-three {
width: 85vw;
display: flex;
justify-content: space-between;
align-items: center;
height: 60vh;
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
max-width: 350px;
display: block;
}

.row-three p {
color: #000000;
font-size: 20px;
margin-top: 20px;
justify-content: left;
font-family: "Mundial";
}

.row-four {
width: 85vw;
display: flex;
justify-content: space-between;
align-items: center;
height: 60vh;
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
max-width: 350px;
display: block;
}

.row-four p {
color: #000000;
font-size: 20px;
margin-top: 20px;
justify-content: left;
font-family: "Mundial";
}

.row-five {
width: 85vw;
display: flex;
justify-content: space-between;
align-items: center;
height: 60vh;
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
max-width: 350px;
display: block;
}

.row-five p {
color: #000000;
font-size: 20px;
margin-top: 20px;
justify-content: left;
font-family: "Mundial";
}

.row-six {
width: 75vw;
display: flex;
justify-content: space-between;
align-items: center;
height: 70vh;
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
color: #000000;
font-size: 20px;
margin-top: 20px;
justify-content: left;
font-family: "Mundial";
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

    .planning {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 30%;
    }
  .planning h1 {
    font-size: 50px;
    line-height: 1.5;
    font-weight: bold;
    
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
    width: 70%; /* Make images full width */
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
}
</style>