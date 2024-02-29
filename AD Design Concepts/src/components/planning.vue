<template>
    <section>
        <div class="planning-container">
            <div class="planning">
                    <h1>Planning</h1>
            </div>
        </div>
         <div class="projects-pictures">
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
            <div class="Bishops-House">
                <img src="../assets/images/Bishop's House - after_resize.jpg" alt="Bishop’s House, East Finchley">
                <p> Bishop’s House, East Finchley </p>
            </div>
            <div class="Stapleton-Hall-Road">
                <img src="../assets/images/83 Stepleton Hall Road - after_resize.jpg" alt="Stapleton Hall Road, London ">
                <p> Stapleton Hall Road, London  </p>
            </div>
            <div class="The-Avenue">
                    <img src="../assets/images/9 The Avenue_resize.jpg" alt="The Avenue, London">
                    <p> The Avenue, London </p>
                </div>
        </div>
        <div class="row-four">
            <div class="Hampstead-Way">
                <img src="../assets/images/17 Hampstead Way_resize.jpg" alt="Hampstead Way, London">
                <p> Hampstead Way, London </p>
            </div>
             <div class="Hungerford-Road">
                <img src="../assets/images/1-3 Hungerford Road (2).jpg" alt="Hungerford Road, Islington">
                <p> Hungerford Road, Islington </p>
            </div>
            <div class="Hillview-Road">
                <img src="../assets/images/Hillview Road_resize.jpg" alt="Hillview Road, London">
                <p> Hillview Road, London </p>
            </div>
        </div>
            <div class="row-five">
                <div class="307-309">
                    <img src="../assets/images/307 Finchley Road - After 02.jpg" alt="307-309 Finchley Road, London">
                    <p> 307-309 Finchley Road, London </p>
                </div>
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
.planning-container {
    display: flex; 
    align-items: center; 
    height: 100px;
}

.planning {
    font-size: 48px; 
    font-weight: bold; 
    line-height: 1; 
    color: #000000;
    margin-left:150px;

}

.projects-pictures {
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
    width: 85vw;
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
</style>