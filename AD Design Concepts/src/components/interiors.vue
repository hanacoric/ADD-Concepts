<template>
    <section>
         <div class="interiors-container">
                    <div class="interiors">
                            <h1>Interiors</h1>
                    </div>
            </div>
        <div class="interiors-pictures">
            <div class="row">
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
                <div class="Hillview-Road">
                <img src="../assets/images/Hillview Road_resize.jpg" alt="Hillview Road, London">
                <p> Hillview Road, London </p>
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
.interiors-container {
    display: flex; 
    align-items: center; 
    height: 100px;
}

.interiors {
    font-size: 48px; 
    font-weight: bold; 
    line-height: 1; 
    color: #000000;
    margin-left:150px;

}

.interiors-pictures {
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

@media (max-width: 768px) {
.interiors-container {
    margin-bottom: 50px;
  }

    .interiors {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right:150px;
    }
  .interiors h1 {
    font-size: 50px;
    line-height: 1.5;
    font-weight: bold;
    
  }

  
  .row, .row-two {
    flex-direction: column;
    align-items: center; 
    height: auto;
  }


  .row > div, .row-two > div{
    width: 100%; 
    flex-basis: auto;
  }

  .row img, .row-two img {
    width: 80%; /* Make images full width */
    max-width: none; /* Remove max width restriction */
    height: auto; /* Maintain aspect ratio */
    margin-bottom: 20px; /* Add space below the image */
    
  }

  /* Adjust paragraph styles inside rows */
  .row p, .row-two p {
    font-size: 18px; /* Adjust font size for readability */
    margin-top: 10px; /* Reduce space above the paragraph */
    text-align: center; /* Center align the text */
    margin-bottom: 50px; /* Add space below the paragraph */
  }
}
</style>