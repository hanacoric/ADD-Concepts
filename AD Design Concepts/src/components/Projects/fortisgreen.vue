<template>
    <section class="section-wrapper">
        <div class="container">
                <div class="Fortis-Green">
                        <h1>Fortis Green, Muswell Hill</h1>
                </div>
        </div>

        <div class="text-container">
            <div class="text-container-top">
                <div class="line-top"></div>
            </div>
            <div class="text-container-bottom">
                <p>After failing to secure planning consent for erection of an additional storey to the existing four storey  block of flats, the client appointed AD Designs to take a fresh approach and to secure the consent. From the outset AD Designs researched the reasons for previous refusals and engaged with the planning officers in order to find a workable solution. Consequently, the proposed addition was designed in a minimalist style with lightweight expression. This design has gained the officers’ support, and the application was approved. AD Designs then assisted the client in executing the approved designs and creating rather unique penthouse apartment. </p>
            </div>
          <div class="bottom-line-container">
            <div class="line-bottom">
            </div>
          </div>
        </div>

        <div class="image-container">
            <div class="image">
                <img src="../../assets/images/image06.jpg" alt="FortisGreen-image">
            </div>
        </div>

        
    </section>
</template>

<script setup>
</script>

<style scoped>

.section-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 170vh;
}

.container {
    display: flex; 
    align-items: center; 
    height: 100px;
}

.Fortis-Green {
    font-size: 48px; 
    font-weight: bold; 
    line-height: 1; 
    color: #000000;
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
    font-size:22px; 
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