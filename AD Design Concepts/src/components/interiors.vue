<template>
    <section>
         <div class="interiors-container">
                    <div class="interiors">
                            <h1>Interiors</h1>
                    </div>
            </div>
        <div class="interiors-pictures">
            <div class="row">
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
                <div class="Hillview-Road">
                <img src="../assets/images/Hillview Road_resize.jpg" alt="Hillview Road, London">
                <p> Hillview Road, London </p>
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


.interiors-container {
    display: flex; 
    align-items: center; 
    height: 250px;
}

.interiors {
    font-size: 48px; 
    font-weight: bold; 
    line-height: 1; 
    color: #000000;
    margin-left:150px;
    font-family: "Soliden-Bold";

}

.interiors-pictures {
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
.interiors-container {
    margin-bottom: 50px;
  }

    .interiors {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right:150px;
    }
  .interiors h1 {
    font-size: 50px;
    line-height: 1.5;
    font-weight: bold;
    
  }

  
  .row, .row-two {
    flex-direction: column;
    align-items: center; 
    height: auto;
  }


  .row > div, .row-two > div{
    width: 100%; 
    flex-basis: auto;
  }

  .row img, .row-two img {
    width: 80%; /* Make images full width */
    max-width: none; /* Remove max width restriction */
    height: auto; /* Maintain aspect ratio */
    margin-bottom: 20px; /* Add space below the image */
    
  }

  /* Adjust paragraph styles inside rows */
  .row p, .row-two p {
    font-size: 18px; /* Adjust font size for readability */
    margin-top: 10px; /* Reduce space above the paragraph */
    text-align: center; /* Center align the text */
    margin-bottom: 50px; /* Add space below the paragraph */
  }
}
</style>