<template>
  <section>
    <div class="services-container-wrapper">
      <div class="services-container">
        <div class="services-box">
        <div class="services-line"></div>
        <div class="services">
          <h1 class="dontFadeIn">SERVICES</h1>
        </div>
      </div>
      </div>
    </div>
   

    <div class="planning-container">
  <div class="image-planning">
    <img src="../assets/images/image19.jpg" alt="Planning" />
  </div>
  <div class="right-section">
    <div class="planning-box">
      <h1 class="planning-header" onclick="location.href='/services/planning';">Planning</h1>
      <div class="underline"></div>
    </div>
    <p class="planning-text">
      Our particular area of expertise is planning advice and obtaining
      planning permissions. We work closely with Local Planning Authorities,
      Building Control and other regulatory bodies to obtain the necessary
      permissions
    </p>
  </div>
</div>

  
    <div class="listed-container">
      <div class="text-section">
        <div class="listed-heading"><h1 onclick="location.href='/services/listedbuildings';">& Listed Buildings<br />Conservation Areas</h1>
          <div class="underline"></div></div>
        <p>
          We have a wealth of experience working on Listed Buildings and
          buildings in Conservation areas
        </p>
      </div>
      <div class="listed-image">
        <img src="../assets/images/image21.jpg" alt="Listed Buildings" />
      </div>
    </div>
    <div class="residential-container">
      
      <div class="residential-section">
        <div class="residential-heading"><h1 class="residential-header" onclick="location.href='/services/residential';">Residential</h1>
          <div class="underline"></div></div>
        <p class="residential-text">
          Our work stretches from domestic extensions and conversion, through
          new build houses to large new blocks of flats
        </p>
      </div>
      <div class="image-residential">
        <img src="../assets/images/image08.jpg" alt="Residential" />
      </div>
    </div>
    <div class="interiors-container">
      <div class="interiors-image">
        <img src="../assets/images/image12.jpg" alt="Interiors" />
      </div>
      <div class="interiors-section">
        <div class="interiors-heading"><h1 onclick="location.href='/services/interiors';">Interiors</h1>
          <div class="underline"></div></div>
        <p>
          We have a wealth of experience working on Listed Buildings and
          buildings in Conservation areas
        </p>
      </div>
      
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    observeItems();
    expandUnderline();
  }
}

function observeItems(){
  const allParagraphs = document.querySelectorAll('p');
  const allImages = document.querySelectorAll('img');
  const allHeadings = document.querySelectorAll('h3, h1, h2');

  allParagraphs.forEach((paragraph) => {
    if (!paragraph.classList.contains('dontFadeIn')) {
      paragraph.classList.add('primedForAnimation');
    }
  });

  allImages.forEach((image) => {
    if (!image.classList.contains('dontFadeIn')) {
      image.classList.add('primedForAnimation');
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

  allImages.forEach((image) => {
    if (!image.classList.contains('dontFadeIn')) {
      observer.observe(image);
    }
  });

  allHeadings.forEach((heading) => {
    if (!heading.classList.contains('dontFadeIn')) {
      observer.observe(heading);
    }
  });
}

function expandUnderline(element) {
  const wrappers = document.querySelectorAll('.planning-box, .listed-heading, .residential-heading, .interiors-heading');

  wrappers.forEach((wrapper) => {
    const underline = wrapper.querySelector('.underline');

    wrapper.addEventListener('mouseover', () => {
      if (underline.classList.contains('animate-underline-reverse')) {
        underline.classList.remove('animate-underline-reverse');
      }
      underline.classList.add('animate-underline');
    });

    wrapper.addEventListener('mouseout', () => {
      underline.classList.remove('animate-underline');
      underline.classList.add('animate-underline-reverse');
    });
  });
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
section {
  height: 300vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.services-container-wrapper {
  width: 100%;
  display: flex;
  justify-content: flex-start;
}

.services-container {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  width: 100%;
}

.services-box {
  width:50%;
 display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
}

.services-line {
  flex: none;
  background-color: black;
  height: 7px;
  width: 200px;
  animation: slideInLeftToRight 2s forwards;
 }

.services {
  font-size: 60px;
  font-weight: bold;
  line-height: 2.5;
  color: #000000;
  font-family: "Soliden-Bold";
  animation: slideInLeftToRight 1s forwards;
}

.planning-container {
  width: 68%;
  height: 550px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
}

.right-section {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.planning-box {
width:70%;
display: flex;
justify-content: flex-start;

}

.planning-header {
  font-size: 58px;
  font-weight: bold;
  color: #000000;
  order: 1; /* Ensures the header is placed above the paragraph */
  direction: rtl;
  font-family: "Soliden-Bold";
}

.planning-text {
  font-size: 24px;
  line-height: 1.5;
  color: #000000;
  text-align: right;
  margin-top: 10px;
  text-align: justify;
  direction: ltr;
  width:80%;
  order: 2; /* Ensures the paragraph is placed below the header */
  font-family: "Mundial";
}

.image-planning {
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.image-planning img {
  display: block;
  width: 450px;
  height: 250px;
}


.listed-container {
  width: 70%;
  height: 550px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;

}

.text-section h1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 480px;
  font-size: 48px;
  font-weight: bold;
  text-align: right;
  color: #000000;
  direction: rtl;
  font-family: "Soliden-Bold";
}

.listed-image {
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.listed-image img {
  display: block;
  width: 450px;
  height: 250px;
}

.text-section p {
  width: 82%;
  font-size: 25px;
  line-height: 1.5;
  color: #000000;
  text-align: right;
  margin-top: 20px;
  padding-left: 30px;

}

.residential-container {
  width: 85%;
  height: 550px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
}

.image-residential {
  width: 27%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.image-residential img {
  display: block;
  width: 450px;
  height: 250px;
}

.residential-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
}

.residential-header {
  font-size: 58px;
  font-weight: bold;
  text-align: right;
  color: #000000;
  font-family: "Soliden-Bold";
}

.residential-text {
  font-size: 24px;
  line-height: 1.5;
  color: #000000;
direction: rtl;
  margin-top: 20px;
  max-width: 450px;
  text-align: justify;
  font-family: "Mundial";
}
.interiors-container {
  width: 75%;
  height: 550px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
}

.interiors-section h1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 500px;
  flex: 1;
  font-size: 58px;
  font-weight: bold;
  text-align: left;
  color: #000000;
}

.interiors-section p {
  font-size: 25px;
  line-height: 1.5;
  color: #000000;
  text-align: left;
  margin-top: 30px;
  max-width: 400px;
}

.interiors-image {
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.interiors-image img {
  display: block;
  width: 450px;
  height: 250px;
}
.listed-heading, .residential-heading, .interiors-heading {
  width: max-content;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.planning-box{
  cursor: pointer;
  display: flex;
  flex-direction: column-reverse;
}

.planning-box h1 {
  width: 50%;
}

.planning-box .underline {
  width: 0%;
  max-width: 50%;
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

.inView {
  animation: loadText 1s forwards;
}

.primedForAnimation {
  opacity: 0;
}

@media (max-width: 768px) {
  section {
    height: 300vh;
  }

  .services {
    font-size: 40px;
  }



  .services h1 {
    font-size: 50px;
    line-height: 1.5;
    font-weight: bold;
    
    
  }

  .services-line {
    height: 2px;
    width: 70px;
  }

  .planning-container {
    display: flex;
    justify-content: center;
    flex-direction: column-reverse;
    height: 100%;
    margin-top: 50px;
  }

  .planning-box {
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .right-section {
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .planning-header {
    display: flex;
    justify-content: center;
    font-size: 40px;
    text-align: center;

  }

  .planning-text {
    font-size: 18px;
    text-align: center;
    margin-top: 10px;
    max-width: 100%;
  }

  .image-planning {
    width: 300px;
    height: 300px;
  }

  .image-planning img {
    width: 100%;
    height: 60%;
  }

  .listed-container {
    flex-direction: column;

    height: 100%;
  }


  .text-section {
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .text-section h1 {
    font-size: 35px;
    text-align: center;
  }

  .listed-image {
    width: 300px;
    height: 300px;
  }

  .listed-image img {
    width: 100%;
    height: 60%;
  }

  .text-section p {
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding:0;


  }

  .residential-container {
    flex-direction: column;
    height: 75%;
  }

  .image-residential {

    width: fit-content;
    height: fit-content;
  }

  .image-residential img {
    width: 100%;
    height: 70%;
  }

  .residential-section {
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .residential-header {
    font-size: 40px;
    text-align: center;
  }

  .residential-text {
    font-size: 20px;
    text-align: center;
    margin-top: 10px;
    max-width: 90%;
  }

  .interiors-container {
    flex-direction: column;
    height: 75%;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
  }

  .interiors-section {
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .interiors-section h1 {
    font-size: 40px;
    text-align: center;
  }

  .interiors-section p {
    font-size: 20px;
    text-align: center;
    margin-top: 10px;
    max-width: 90%;
  }


  .interiors-image {
    width: fit-content;
    height: fit-content;
  }

  .interiors-image img {
    width: 100%;
    height: 55%;
  }

}
</style>
