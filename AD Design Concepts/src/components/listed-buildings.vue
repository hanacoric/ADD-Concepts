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
</script>

<style scoped>
.listed-container {
    display: flex; 
    align-items: center; 
    height: 100px;
}

.listed {
    font-size: 48px; 
    font-weight: bold; 
    line-height: 1; 
    color: #000000;
    margin-left:150px;

}

.listed-pictures {
    display: flex;
    justify-content:center; 
    align-items: center; 
    flex-direction: column;
    margin-top: 100px;
}
.row {
    width: 75vw;
    display: flex;
    justify-content:space-between;
    align-items: center; 
    height:60vh;
    
}
.row > div {
    flex-basis: 45%; 
    text-align:center; 
    
}


.row img {
    display: block;
    margin: 0 auto;
    width: 150%; 
    height: auto; 
    max-width: 500px; 
    display: block; 
}


.row p {
    color: #000000; 
    font-size: 20px; 
    margin-top: 8px; 
    justify-content: center;
}

.row-two {
    width: 75vw;
    display: flex;
    justify-content:space-between;
    align-items: center;
    height:60vh;
}

.row-two > div {
    flex-basis: 45%; 
    text-align:center; 
}

.row-two img {
    display: block;
    margin: 0 auto;
    width: 150%; 
    height: auto; 
    max-width: 500px; 
    display: block; 
}

.row-two p {
    color: #000000; 
    font-size: 20px; 
    margin-top: 8px; 
    justify-content: left;
}

.row-three {
    width: 75vw;
    display: flex;
    justify-content:space-between;
    align-items: center;
    height: 60vh;
}

.row-three > div {
    flex-basis: 45%; 
    text-align:center; 
}

.row-three img {
    display: block;
    margin: 0 auto;
    width: 150%; 
    height: auto; 
    max-width: 500px; 
    display: block; 
}

.row-three p {
    color: #000000; 
    font-size: 20px; 
    margin-top: 8px; 
    justify-content: left;
}

.row-four {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60vh;
}

.row-four > div {
    flex-basis: 45%; 
    text-align:center; 
}

.row-four img {
    display: block;
    margin: 0 auto;
    width: 150%; 
    height: auto; 
    max-width: 500px; 
    display: block; 
}

.row-four p {
    color: #000000; 
    font-size: 20px; 
    margin-top: 8px; 
    justify-content: left;
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

  .row img, .row-two img, .row-three img, .row-four img {
    width: 80%; /* Make images full width */
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