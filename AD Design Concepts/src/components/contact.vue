<template>
  <section class="contact-wrapper">
    <div class="people-contact-container">
      <div class="people-contact-box">
      <div class="people-contact-line"></div>
      <div class="people-contact">
        <h1> CONTACT</h1>
      </div>
    </div>
    </div>
    <div class="info">
      <div class="intro">
        <h3>
          Mr. Almas Bavcic Dip. Arch. RIBA is the founder and principal of AD
          Design Concepts
        </h3>

        <div class="image-container-top">
          <div class="line-top"></div>
        </div>
      </div>
      <div class="image-container">
        <div class="text">
          <p>
            Almas is a chartered architect and long-time member of the Royal
            Institute of British Architects. He has been practising architecture
            in the UK for over 30 years.
          </p>
          <p>
            Prior to setting up AD Design Concepts, Almas worked at PKS
            Architects LLP where he was an associate and a partner for many
            years.
          </p>
          <p>
            Our team includes a number of highly skilled and experienced
            architects and technicians who are passionate about their work. The
            credo of our entire team and our prime aim is to provide the best
            service to our clients.
          </p>
        </div>
        <div class="image-container-bottom">
          <img src="../assets/faceimg/face.jpg" alt="Almas" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    fadeInElements();
    setInterval(switchImages, 3000);
  }
}

function fadeInElements () {
  const allParagraphs = document.querySelectorAll('p');
  const allImages = document.querySelectorAll('img');
  const allHeadings = document.querySelectorAll('h3');

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

function switchImages(){
  const image = document.querySelector('.image-container img');
  const imageArray = ["/src/assets/faceimg/face.jpg", "/src/assets/faceimg/face2.jpg"];

  // Find the index of the current image in the array
  let currentIndex = imageArray.findIndex(img => image.src.includes(img));
  // If the current image is the last one in the array, go back to the first image
  // Otherwise, go to the next image
  let nextIndex = (currentIndex === imageArray.length - 1) ? 0 : currentIndex + 1;


  // Set the src of the image to the next image
  image.src = imageArray[nextIndex];
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

.contact-wrapper {
  height: 100%;
  width: 100%;  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.people-contact-container {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  width: 100%;
  
}

.people-contact-box {
 width:50%;
 display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
}

.people-contact-line {
  flex: none;
  background-color: black;
  height: 7px;
  width: 190px;
  animation: slideInLeftToRight 2s forwards;
}
.people-contact {
  font-size: 60px;
  font-weight: bold;
  line-height: 2.5;
  color: #000000;
  font-family: "Soliden-Bold";
  animation: slideInLeftToRight 1s forwards;
}

.info {
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.intro {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: justify;
  flex-direction: column;
}

.intro h3 {
  max-width: 60%;
  font-size: 40px;
  line-height: 1.5;
  color: #000000;
  font-weight:400;
  font-family:"Mundial";
}

.image-container-top {
  width: 80%;
  height: 10vh;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
}

.line-top {
  background-color: black;
  height: 3px;
  width: 80%;
}

.image-container {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;

}

.text {
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  text-align: justify;
}

.text p {
  font-size: 25px;
  font-weight: 400;
  line-height: 1.5;
  color: #000000;
  font-family:"Mundial";
}

.image-container-bottom {
  width: 60%;
  height: 90%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
}

img {
  height: 140%;
  width: 90%;
  display: block;
  padding-left:50px;
}

.bottom-line-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-end;
}
.inView {
  animation: loadText 1s forwards;
}

.primedForAnimation {
  opacity: 0;
}

.contact-wrapper {
  height: 100%;
  width: 100%;  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.people-contact-container {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  width: 100%;
  
}

.people-contact-box {
 width:50%;
 display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
}

.people-contact-line {
  flex: none;
  background-color: black;
  height: 7px;
  width: 190px;
  animation: slideInLeftToRight 2s forwards;
}
.people-contact {
  font-size: 60px;
  font-weight: bold;
  line-height: 2.5;
  color: #000000;
  font-family: "Soliden-Bold";
  animation: slideInLeftToRight 1s forwards;
}

.info {
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.intro {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: justify;
  flex-direction: column;
}

.intro h3 {
  max-width: 60%;
  font-size: 40px;
  line-height: 1.5;
  color: #000000;
  font-weight:400;
  font-family:"Mundial";
}

.image-container-top {
  width: 80%;
  height: 10vh;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
}

.line-top {
  background-color: black;
  height: 3px;
  width: 80%;
}

.image-container {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;

}

.text {
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  text-align: justify;
}

.text p {
  font-size: 25px;
  font-weight: 400;
  line-height: 1.5;
  color: #000000;
  font-family:"Mundial";
}

.image-container-bottom {
  width: 60%;
  height: 90%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
}

img {
  height: 140%;
  width: 90%;
  display: block;
  padding-left:50px;
}

.bottom-line-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-end;
}
.inView {
  animation: loadText 1s forwards;
}

.primedForAnimation {
  opacity: 0;
}

@media (max-width: 768px) {
  .people-contact-container {
    margin-bottom: 50px;
  }

  .people-contact h1 {
    font-size: 50px;
    line-height: 1.5;
    font-weight: bold;
    
  }

  .people-contact-line {
    height: 3px;
    width: 80px;
  }
  .people-contact {
    font-size: 30px; 
    line-height: 1.5; 
  }
  .contact-wrapper {
    /* Your styles for the contact wrapper on mobile */
    flex-direction: column;
    align-items: center;
  }

.line-top {
    display: none;
  }
  .info {
    /* Adjust the width of the info container on mobile */
    width: 95%;
  }

  .intro {
    /* Make sure the intro container is a flexbox and centers its children */
    display: flex;
    justify-content: center; /* This will center the h3 horizontally */
    align-items: center; /* This will center the h3 vertically if needed */
    width: 80%; /* Adjust as needed, 100% width to utilize full parent width */
    text-align: justify; /* This will center the text inside h3 */
  }

  .intro h3 {
    /* Adjust the width and font size of the intro text on mobile */
    max-width: 100%; /* 100% to allow text to fit to the width of its container */
    font-size: 20px;
    width: auto; /* Set width to auto to allow text to grow as needed */
    margin-bottom: 50px;
  }


  .image-container{
    display: flex;
    flex-direction: column-reverse;

  }

  .image-container-top {
   display: none;
  }

  .text {
    width: 80%;
    margin-bottom: 20px; /* Add some space below the text */
    margin-top: 50px;
  }

  .text p {
    font-size: 19px;
    line-height: 1.5;
  }

  .image-container-bottom {
    /* Adjust image container for mobile */
    width: 95%;
    height: auto;
  }

  img {
    /* Adjust image size for mobile */
    height: auto;
    width: 80%;
    padding-left: 0; /* Remove padding for mobile */
  }

  .bottom-line-container {
    /* Adjust bottom line container if necessary */
    align-items: center;
  }
  

}
</style>
