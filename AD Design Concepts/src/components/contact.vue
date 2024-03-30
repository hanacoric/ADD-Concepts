<template>
  <section>
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
          <img src="../assets/images/face.jpg" alt="Almas" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
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

.section {
  height: 800vh;
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
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.intro {
  width: 80%;
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
  height: 45vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
}

.text {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  text-align: justify;
}

.text p {
  font-size: 30px;
  font-weight: 400;
  line-height: 1.5;
  color: #000000;
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
  height: 120%;
  width: 70%;
  display: block;
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
</style>
