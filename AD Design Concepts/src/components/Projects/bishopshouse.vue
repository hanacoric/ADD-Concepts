<template>
     <section class="section-wrapper">
        <div class="container">
            <div class="Bishops-House">
                <h1>Bishops’ House, East Finchley  </h1>
            </div>
        </div>

        <div class="text-container">
            <div class="text-container-top">
                <div class="line-top"></div>
            </div>
            <div class="text-container-bottom">
                <p>AD Designs secured  planning consent to extend and refurbish this office block. The consent included erection of two new floors at the top of the building and the remodelling of external facades.  </p>
            </div>
          <div class="bottom-line-container">
            <div class="line-bottom">
            </div>
          </div>
        </div>

        <div class="image-container">
            <div class="image">
               <img src="../../assets/images/Bishop's House - after_resize.jpg" alt="Bishop’s House, East Finchley">
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
  const imageArray = ["/src/assets/bishopshouseimg/image1.jpg", "/src/assets/bishopshouseimg/image2.jpg" ];

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
.section-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 190vh;
}

.container {
    display: flex; 
    align-items: center; 
    height: 200px;
    justify-content: flex-start; /* Aligns the child elements to the start of the container */
}

.Bishops-House{
    font-size: 38px; 
    font-weight: bold; 
    line-height: 1; 
    color: #000000;
    font-family: "Soliden-Bold";
}

.text-container {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-direction: column;
    width: 60%;
    height: 35%;
  }

  .text-container-top{
    width: 80%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

    .text-container-bottom{
    width: 80%;
    display: flex;
    justify-content: flex-start;

    }

    .text-container-bottom p{
    text-align: justify;
    font-size:30px; 
    width: 50vw;
    font-family:"Mundial";
    color:#000000;
    }

    .bottom-line-container{
    width: 80%;
    display: flex;
    justify-content: flex-start;

    }

  .line-top{
    background-color: black; 
    height: 3px; 
    width: 40%;
  }
 
  .line-bottom{
    background-color: black; 
    height: 3px; 
    width: 40%;


  }

  .image-container{
    width: 100vw;
    height: 80vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    
  }

    .image{
        display: flex;
        width: 60vw;
        height: 100vh;
    }

    .image img{
        width: 60vw;
        height: 80vh;
    }

    .inView {
  animation: loadText 1s forwards;
}

.primedForAnimation {
  opacity: 0;
}

    @media (max-width: 768px) {
  .section-wrapper {
    height: auto; /* Height should adjust to content */
    
  }

  .container {
    justify-content: center; /* Center the container contents */
    height: auto; /* Adjust height to content */
    margin: 0; /* Remove any margin if present */
  }

  .Bishops-House{
    margin-left: 0; /* Remove margin-left */
    text-align: center; /* Center the title text */
    margin-bottom: 50px;
  }

  .Bishops-House h1{
    font-size: 30px; /* Reduce font size for smaller screens */
    font-weight: bold; /* Keep the font weight */
  }
  .text-container,
  .text-container-top,
  .text-container-bottom,
  .bottom-line-container {
    width: 90%; /* Reduce the width to provide padding on the sides */
    margin: 0 auto; /* Center the containers */
  }

  .text-container-bottom p {
    font-size: 15px; /* Reduce the font size for readability */
    width: 100%; /* Make paragraph take full width */
    margin-bottom: 50px;
    margin-top:30px ;
  }

  .line-top,
  .line-bottom {
    display: none; /* Hide the lines */
  }

  .image-container {
    width: 80%; /* Full width to fit the screen */
    height: auto; /* Height should adjust to the content */
    padding: 20px 0; /* Add padding above and below the image */
  }

  .image,
  .image img {
    width: 100%; /* Images should take full width of the screen */
    height: auto; /* Adjust height automatically */
    max-height: 50vh; /* Limit the maximum height of the image */
  }
}
</style>