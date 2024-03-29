<template>
     <section class="section-wrapper">
        <div class="container">
            <div class="Stapleton-Hall-Road">
                <h1>Stapleton Hall Road, London</h1>
            </div>
        </div>

        <div class="text-container">
            <div class="text-container-top">
                <div class="line-top"></div>
            </div>
            <div class="text-container-bottom">
                <p>AD Designs secured planning consent for a new build 4 bedrooms detached house on the site that was previously used as parking for adjacent house. Subsequently AD Designs negotiated and secured planning consent for various alterations to the approved designs, which have further enhanced development potential of the site. </p>
            </div>
          <div class="bottom-line-container">
            <div class="line-bottom">
            </div>
          </div>
        </div>

        <div class="image-container">
            <div class="image">
               <img src="../../assets/images/83 Stepleton Hall Road - after_resize.jpg" alt="Stapleton Hall Road, London ">
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

.Stapleton-Hall-Road{
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
    height: 25%;
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

    @media (max-width: 768px) {
  .section-wrapper {
    height: auto; /* Height should adjust to content */
    
  }

  .container {
    justify-content: center; /* Center the container contents */
    height: auto; /* Adjust height to content */
    margin: 0; /* Remove any margin if present */
  }

  .Stapleton-Hall-Road{
    margin-left: 0; /* Remove margin-left */
    text-align: center; /* Center the title text */
    margin-bottom: 50px;
  }

  .Stapleton-Hall-Road h1{
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
    margin-top:30px;
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