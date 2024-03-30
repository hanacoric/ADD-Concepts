<template>
    <section>  
        <div class="listed-container">
                <div class="listed">
                        <h1>Listed Buildings & <br>Conservation Areas</h1>
                </div>
        </div>
        <div class="listed-pictures">
            <div class="row">
            <div class="Darwen-Compton-Avenue">
                    <img src="../assets/images/image16.jpg" alt="Darwen, Compton Avenue">
                    <p> Darwen, Compton Avenue </p>
                </div>
               
            <div class="Hungerford-Road">
                    <img src="../assets/images/1-3 Hungerford Road (2).jpg" alt="Hungerford Road, Islington">
                    <p> Hungerford Road, Islington </p>
            </div>
            
            </div>
            <div class="row-two">
            <div class="Holland-Park">
                        <img src="../assets/images/22 Holland Park Avenue 01.jpg" alt="Holland Park Avenue">
                        <p> Holland Park Avenue </p>
                    </div>
                    <div class="Cadogan-Gardens ">
                        <img src="../assets/images/Cadogan Gardens 01a.jpg" alt="Cadogan Gardens ">
                        <p> Cadogan Gardens  </p>
                    </div>
            </div>
            <div class="row-three">
                <div class="Portland-Road">
                        <img src="../assets/images/34 Portland Road.jpg" alt="Portland Road">
                        <p> Portland Road </p>
                    </div>
                    <div class="Kensington-Church">
                        <img src="../assets/images/Kensington Church Road01.jpg" alt="Kensington Church Street ">
                        <p> Kensington Church Street  </p>
                    </div>
            </div>
            <div class="row-four">
                 <div class="Prince-Albert-Road">
                            <img src="../assets/images/image21.jpg" alt="Prince Albert Road, London">
                            <p> Prince Albert Road, London </p>
                    </div>
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


.listed-container {
    display: flex; 
    align-items: center; 
    height: 250px;
}

.listed {
    font-size: 48px; 
    font-weight: bold; 
    line-height: 1; 
    color: #000000;
    margin-left:150px;
    font-family: "Soliden-Bold";

}

.listed-pictures {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.row {
  width: 65vw;
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
  width: 65vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60vh;
}

.row-two > div {
  flex-basis: 45%;
}

.row-two img {
  display: block;
  margin: 0 auto;
  width: 150%;
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
  width: 65vw;
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
  width: 250%;
  height: auto;
  max-width: 350px;
  display: block;
}

.row-four p {
    color: #000000;
    font-size: 20px;
    margin-top: 20px;
    justify-content: center;
    text-align: center; /* Added property */
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
    .listed-container {
    margin-bottom: 50px;
  }

    .listed {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-right:150px;
    }
  .listed h1 {
    font-size: 28px;
    line-height: 1.5;
    font-weight: bold;
    
  }

  
  .row, .row-two, .row-three, .row-four {
    flex-direction: column;
    align-items: center; 
    height: auto;
  }


  .row > div, .row-two > div, .row-three > div, .row-four {
    width: 100%; 
    flex-basis: auto;
  }

  .row img, .row-two img, .row-three img  {
    width: 80%; /* Make images full width */
    max-width: none; /* Remove max width restriction */
    height: auto; /* Maintain aspect ratio */
    margin-bottom: 20px; /* Add space below the image */
    
  }

  .row-four img {
    width: 50%; /* Make images full width */
    max-width: none; /* Remove max width restriction */
    height: auto; /* Maintain aspect ratio */
    margin-bottom: 20px; /* Add space below the image */
  }

  /* Adjust paragraph styles inside rows */
  .row p, .row-two p, .row-three p, .row-four p {
    font-size: 18px; /* Adjust font size for readability */
    margin-top: 10px; /* Reduce space above the paragraph */
    text-align: center; /* Center align the text */
    margin-bottom: 50px; /* Add space below the paragraph */
  }
}




</style>