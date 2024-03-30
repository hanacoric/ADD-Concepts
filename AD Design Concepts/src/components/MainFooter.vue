<template>
    <div class="footer">    
        <div class="phrase">
            <h2>"From Blueprints to Landmarks"</h2>
        </div>
        <div class="centered-line"></div>
        <div class="info">
            <a href="info@addconcepts.co.uk">info@addconcepts.co.uk</a>
        </div>
    </div>
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
    .footer {
        height: 50vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        padding-bottom: 2%;
    }
    .phrase {
        width: 100vw;
        height: 10vh;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
    h2{
        font-size: 45px;
        color: black;
        font-weight: bold;
        font-family:"Soliden-Bold";
    }

    .centered-line {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30vw;  
        height: 0.5vh;
        background-color:black;
        animation: loadText 1s forwards;
    }

    .info {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 15vh;
    }

    .info a {
        color: black;
        text-decoration: none;
        font-size: 30px;
        animation: loadText 1s forwards;
    }

    .inView {
  animation: loadText 1s forwards;
}

.primedForAnimation {
  opacity: 0;
}

    @media (max-width: 768px) {
        .footer {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
            padding-bottom: 0;
            height:10vh;
            margin-top: 50px;
            margin-bottom: 50px;
        }

        .phrase {
            height: max-content;
        }
        h2 {
            font-size: 20px;
            
        }
        .centered-line {
            width: 40vw;
            height: 0.2vh;
        }

        .info {
            height: max-content;
        }
        .info a {
            font-size: 18px;
            height: 0px;
        }
    }
</style>