<template>
    <section class="section-wrapper">
        <div class="container">
            <div class="Cadogan-Gardens">
                <h1>Cadogan Gardens </h1>
            </div>
        </div>

        <div class="text-container">
            <div class="text-container-top">
                <div class="line-top"></div>
            </div>
            <div class="text-container-bottom">
                <p>Extensions and remodelling of apartments in a Grade II Listed building in Chelsea, including combining two flats into one stunning apartment with new mezzanine, wine cellar and direct lift access. Top floor flat enlarged with roof extensions and new dormer windows. Ground floor flat extended with spaces at lower ground level, access to the courtyard and opening up of original windows to allow more daylight into the property. </p>
            </div>
          <div class="bottom-line-container">
            <div class="line-bottom">
            </div>
          </div>
        </div>

        <div class="image-container">
            <div class="image">
               <img src="../../assets/images/Cadogan Gardens 01a.jpg" alt="Cadogan Gardens ">
            </div>
        </div>
    </section>
</template>

<script>
</script>

<style scoped>
.section-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 175vh;
}

.container {
    display: flex; 
    align-items: center; 
    height: 100px;
}

.Cadogan-Gardens{
    font-size: 48px; 
    font-weight: bold; 
    line-height: 1; 
    color: #000000;
    height: 10px;
    margin-left:150px;

}

.text-container {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-direction: column;
    width: 60%;
    height: 30%;
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
    font-size:25px; 
    width: 50vw;
    }

    .bottom-line-container{
    width: 80%;
    display: flex;
    justify-content: flex-start;

    }

  .line-top{
    background-color: black; 
    height: 3px; 
    width: 50%;
  }
 
  .line-bottom{
    background-color: black; 
    height: 3px; 
    width: 50%;


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
    @media (max-width: 768px) {
  .section-wrapper {
    height: auto; /* Height should adjust to content */
    
  }

  .container {
    justify-content: center; /* Center the container contents */
    height: auto; /* Adjust height to content */
    margin: 0; /* Remove any margin if present */
  }

  .Cadogan-Gardens {
    margin-left: 0; /* Remove margin-left */
    text-align: center; /* Center the title text */
    margin-bottom: 50px;
  }

  .Cadogan-Gardens h1{
    font-size: 28px; /* Reduce font size for smaller screens */
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