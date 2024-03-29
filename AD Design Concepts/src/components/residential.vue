<template>
    <section>
         <div class="residential-container">
                    <div class="residential">
                            <h1>Residential</h1>
                    </div>
            </div>
         <div class="residential-pictures">
            <div class="row">
                <div class="Fortis-Green">
                    <img src="../assets/images/image06.jpg" alt="Fortis Green">
                    <p> Fortis Green </p>
                </div>
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
                <div class="Prince-Albert-Road">
                    <img src="../assets/images/image21.jpg" alt="Prince Albert Road, London">
                    <p> Prince Albert Road, London </p>
                </div>
                <div class="Oakhill-Avenue">
                    <img src="../assets/images/10a Okhill Avenue - Existing and Proposed Elevations A.jpg" alt="Oakhill Avenue, Highgate">
                    <p> Oakhill Avenue, Highgate </p>
                </div>
                     <img src="../assets/images/image23.jpg" alt="Ravenscroft Avenue, Golders Green">
               
                    </div>
    
            <div class="row-three">
                <div class="Stapleton-Hall-Road">
                    <img src="../assets/images/83 Stepleton Hall Road - after_resize.jpg" alt="Stapleton Hall Road, London ">
                    <p> Stapleton Hall Road, London  </p>
                </div>
                <div class="The-Avenue">
                        <img src="../assets/images/9 The Avenue_resize.jpg" alt="The Avenue, London">
                        <p> The Avenue, London </p>
                    </div>
                <div class="Hampstead-Way">
                            <img src="../assets/images/17 Hampstead Way_resize.jpg" alt="Hampstead Way, London">
                            <p> Hampstead Way, London </p>
                        </div>
            </div>
            <div class="row-four">
                
                 <div class="Hungerford-Road">
                    <img src="../assets/images/1-3 Hungerford Road (2).jpg" alt="Hungerford Road, Islington">
                    <p> Hungerford Road, Islington </p>
                </div>
                <div class="Hillview-Road">
                    <img src="../assets/images/Hillview Road_resize.jpg" alt="Hillview Road, London">
                    <p> Hillview Road, London </p>
                </div>
                   <div class="307-309">
                                <img src="../assets/images/307 Finchley Road - After 02.jpg" alt="307-309 Finchley Road, London">
                                <p> 307-309 Finchley Road, London </p>
                            </div>
            </div>
                <div class="row-five">
                 
                    <div class="Holland-Park">
                        <img src="../assets/images/22 Holland Park Avenue 01.jpg" alt="Holland Park Avenue">
                        <p> Holland Park Avenue </p>
                    </div>
                    <div class="Cadogan-Gardens ">
                        <img src="../assets/images/Cadogan Gardens 01a.jpg" alt="Cadogan Gardens ">
                        <p> Cadogan Gardens  </p>
                    </div>
                </div>

                <div class="row-six">
                    <div class="Portland-Road">
                        <img src="../assets/images/34 Portland Road.jpg" alt="Portland Road">
                        <p> Portland Road </p>
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
</script>

<style scoped> 
.residential-container {
    display: flex; 
    align-items: center; 
    height: 100px;
}

.residential {
    font-size: 48px; 
    font-weight: bold; 
    line-height: 1; 
    color: #000000;
    margin-left:150px;

}

.residential-pictures {
    display: flex;
    justify-content:center; 
    align-items: center; 
    flex-direction: column;
    margin-top: 100px;
}
.row {
    width: 85vw;
    display: flex;
    justify-content:space-between;
    align-items: center; 
    height:50vh;
    
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
    max-width: 400px; 
    display: block; 
}


.row p {
    color: #333; 
    font-size: 16px; 
    margin-top: 8px; 
    justify-content: center;
}
.row-two {
    width: 85vw;
    display: flex;
    justify-content:space-between;
    align-items: center; 
    height:50vh;
}

.row-two > div {
    flex-basis: 45%; 
    
}

.row-two img {
    display: block;
    margin: 0 auto;
    width: 150%; 
    height: auto; 
    max-width: 400px; 
    display: block; 
}

.row-two p {
    color: #333; 
    font-size: 16px; 
    margin-top: 10px; 
    justify-content: center;
    text-align: center;
   
}

.row-three {
    width: 85vw;
    display: flex;
    justify-content:space-between;
    align-items: center;
    height: 50vh;
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
    max-width: 400px; 
    display: block; 
}

.row-three p {
    color: #333; 
    font-size: 16px; 
    margin-top: 8px; 
    justify-content: left;
}

.row-four {
    width: 85vw;
    display: flex;
    justify-content:space-between;
    align-items: center;
    height:50vh;
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
    max-width: 400px; 
    display: block; 
}

.row-four p {
    color: #333; 
    font-size: 16px; 
    margin-top: 8px; 
    justify-content: left;
}

.row-five {
    width: 75vw;
    display: flex;
    justify-content:space-between;
    align-items: center;
    height:50vh;
}

.row-five > div {
    flex-basis: 45%; 
    text-align:center; 
}

.row-five img {
    display: block;
    margin: 0 auto;
    width: 150%; 
    height: auto; 
    max-width: 400px; 
    display: block; 
}

.row-five p {
    color: #333; 
    font-size: 16px; 
    margin-top: 8px; 
    justify-content: left;
}

.row-six {
    width: 75vw;
    display: flex;
    justify-content:space-between;
    align-items: center;
    height:50vh;
}

.row-six > div {
    flex-basis: 45%; 
    text-align:center; 
}

.row-six img {
    display: block;
    margin: 0 auto;
    width: 150%; 
    height: auto; 
    max-width: 400px; 
    display: block; 
}

.row-six p {
    color: #333; 
    font-size: 16px; 
    margin-top: 8px; 
    justify-content: left;
} 

@media (max-width: 768px) {
.residential-container {
    margin-bottom: 50px;
  }

    .residential {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right:150px;
    }
  .residential h1 {
    font-size: 50px;
    line-height: 1.5;
    font-weight: bold;
    
  }

  
  .row, .row-two, .row-three, .row-four, .row-five, .row-six {
    flex-direction: column;
    align-items: center; 
    height: auto;
  }


  .row > div, .row-two > div, .row-three > div, .row-four > div, .row-five > div, .row-six > div {
    width: 100%; 
    flex-basis: auto;
  }

  .row img, .row-two img, .row-three img, .row-four img, .row-five img, .row-six img {
    width: 80%; /* Make images full width */
    max-width: none; /* Remove max width restriction */
    height: auto; /* Maintain aspect ratio */
    margin-bottom: 20px; /* Add space below the image */
    
  }

  /* Adjust paragraph styles inside rows */
  .row p, .row-two p, .row-three p, .row-four p, .row-five p, .row-six p {
    font-size: 18px; /* Adjust font size for readability */
    margin-top: 10px; /* Reduce space above the paragraph */
    text-align: center; /* Center align the text */
    margin-bottom: 50px; /* Add space below the paragraph */
  }
}
</style>

