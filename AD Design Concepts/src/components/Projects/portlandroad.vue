<template>
    <section class="section-wrapper">
        <div class="container">
            <div class="Portland-Road">
                <h1>Portland Road </h1>
            </div>
        </div>

        <div class="text-container">
            <div class="text-container-top">
                <div class="line-top"></div>
            </div>
            <div class="text-container-bottom">
                <p>Complete remodelling of a period house in Holland Park included loft conversion and new lower ground floor and sunken garden, creating a significant amount of additional floor space. New bathrooms and kitchens completed the renovation. </p>
            </div>
          <div class="bottom-line-container">
            <div class="line-bottom">
            </div>
          </div>
        </div>

        <div class="image-container">
            <div class="image">
               <img src="../../assets/images/34 Portland Road.jpg" alt="Portland Road">
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

.Portland-Road{
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
    font-size:30px; 
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
</style>