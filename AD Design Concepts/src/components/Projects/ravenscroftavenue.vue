<template>
     <section class="section-wrapper">
        <div class="container">
            <div class="Ravenscroft-Avenue">
                <h1>Ravenscroft Avenue, <br> Golders Green </h1>
            </div>
        </div>

        <div class="text-container">
            <div class="text-container-top">
                <div class="line-top"></div>
            </div>
            <div class="text-container-bottom">
                <p>AD Designs worked closely with the client to create a charming development of 4 terraced houses and a block of flats containing 5 apartments. We secured planning permission to demolish two existing houses on site and create a new development of 23,000 sq. ft. AD Designs took the project from inception to completion, assisting the client through all phases of development. </p>
            </div>
          <div class="bottom-line-container">
            <div class="line-bottom">
            </div>
          </div>
        </div>

        <div class="image-container">
            <div class="image">
               <img src="../../assets/images/image23.jpg" alt="Ravenscroft Avenue, Golders Green">
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
    height: 185vh;
}

.container {
    display: flex; 
    align-items: center; 
    height: 100px;
}

.Ravenscroft-Avenue {
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
</style>