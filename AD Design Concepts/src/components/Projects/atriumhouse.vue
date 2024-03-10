<template>
    <section class="section-wrapper">
        <div class="container">
            <div class="Atrium-Gate-House">
                <h1> Atrium House, <br> Gate House, Highgate </h1>
            </div>
        </div>

        <div class="text-container">
            <div class="text-container-top">
                <div class="line-top"></div>
            </div>
            <div class="text-container-bottom">
                <p>The client appointed AD Designs to develop the scheme proposal for the site in Denewood Road, Highgate. AD Designs secured an attractive planning consent which included demolition of an existing house on the site and erection of two new houses. Atrium House is the larger of the two houses. It benefits from approximately 13,000 sq. ft. of internal space, spread over 3 levels. Gate House is smaller, and benefits from approximately 5,000 sq. ft.  floor area. After securing the planning approval, AD Designs services covered all project’s stages, through the construction process to completion.
                Gate House is included in the London Borough of Haringey publication on good design.</p>
            </div>
          <div class="bottom-line-container">
            <div class="line-bottom">
            </div>
          </div>
        </div>

        <div class="image-container">
            <div class="image">
               <img src="../../assets/images/image07.jpg" alt="Atrium House, Gate House, Highgate">
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
    height: 190vh;
}

.container {
    display: flex; 
    align-items: center; 
    height: 100px;
}

.Atrium-Gate-House {
    font-size: 48px; 
    font-weight: bold; 
    line-height: 1; 
    color: #000000;
    height: 15px;
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