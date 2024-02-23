<template>
  <div>
    <div class="services-container">
      <div class="services-line"></div>
      <div class="services">
        <h1>SERVICES</h1>
      </div>
    </div>
    <div class="planning-container">
    <div class="image-planning">
      <img src="../assets/images/image19.jpg" alt="Planning">
    </div>
    <div class="right-section">
      <h1 class="planning-header">Planning</h1>
      <p class="planning-text">
        Our particular area of expertise is planning advice and obtaining planning permissions. We work closely with
        Local Planning Authorities, Building Control and other regulatory bodies to obtain the necessary permissions.
      </p>
    </div>
  </div>
  <div class="listed-container">
    <div class="text-section">
      <h1>Listed Buildings &<br>Conservation Areas</h1>
      <p>We have a wealth of experience working on Listed Buildings and buildings in Conservation areas.</p>
    </div>
    <div class="listed-image">
       <img src="../assets/images/image21.jpg" alt="Listed Buildings">
    </div>
  </div>
  <div class="residential-container">
        <div class="image-residential">
        <img src="../assets/images/image08.jpg" alt="Residential">
      </div>
      <div class="residential-section">
        <h1 class="residential-header">Residential</h1>
        <p class="residential-text">
          Our work stretches from domestic extensions and conversion, through new build houses to large new blocks of flats..
        </p>
      </div>
  </div>
  <div class="interiors-container">
    <div class="interiors-section">
        <h1>Interiors</h1>
        <p>We have a wealth of experience working on Listed Buildings and buildings in Conservation areas.</p>
      </div>
      <div class="interiors-image">
         <img src="../assets/images/image12.jpg" alt="Interiors">
      </div>
  </div>
  </div>
</template>

<script></script>

<style scoped>
.services-container {
  display: flex;
  align-items: center;
  height: 100px;
}

.services-line {
  flex: none;
  background-color: black;
  height: 5px;
  width: 100px;
}

.services {
  font-size: 48px;
  font-weight: bold;
  line-height: 1;
  color: #000000;
}

.planning-container {
  display: flex;
  align-items: center;
  width: 100vw;
  max-width: 1300px;
  height: 60vh;  
}

.image-planning {
  justify-content: flex-end; 
  display: flex;
  align-items: center; 
  flex: 1;
  margin-top: 200px;
}

.image-planning img {
  display: block;
  width: 100%; 
  height: 100%;
  max-width: 400px; 
}

.right-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end; /* Align items to the right */
  flex: 1;
}

.planning-header {
  font-size: 58px;
  font-weight: bold;
  text-align: right;
  color: #000000;
  margin: 0; /* Reset margin for the header */
}

.planning-text {
  font-size: 24px;
  line-height: 1.5;
  color: #000000;
  text-align: right;
  margin-top: 20px; 
  max-width: 600px;
}

.listed-container {
 display: flex;
  align-items: center; /* This will vertically center the items */
  justify-content: center; /* This will horizontally center the items */
  width: 100vw;
  max-width: 1000px;
  height: 80vh;
  margin: 0 auto; 
  text-align: center;
}


.text-section h1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;
  flex: 1;
  font-size: 58px;
  font-weight: bold;
  text-align: left;
  color: #000000;
}

.text-section p {
 font-size: 25px;
  line-height: 1.5;
  color: #000000;
  text-align: left;
  margin-top: 30px; 
  max-width: 400px;
}

.listed-image {
  justify-content: flex-start; 
  display: flex;
  align-items: center; 
  flex: 1;
  margin-top: 330px;
}

.listed-image img {
  display: block;
  width: 100%; 
  height: 100%;
  max-width: 400px; 
}

.residential-container {
  display: flex;
  align-items: center;
  width: 100vw;
  max-width: 1300px;
  height: 60vh;  
}

.image-residential {
  justify-content: flex-end; 
  display: flex;
  align-items: center; 
  flex: 1;
  margin-top: 250px;
}

.image-residential img {
  display: block;
  width: 100%; 
  height: 100%;
  max-width: 400px; 
}

.residential-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end; /* Align items to the right */
  flex: 1;
}

.residential-header {
  font-size: 58px;
  font-weight: bold;
  text-align: right;
  color: #000000;
  margin: 0; /* Reset margin for the header */
}

.residential-text {
  font-size: 24px;
  line-height: 1.5;
  color: #000000;
  text-align: right;
  margin-top: 20px; 
  max-width: 450px;
}
.interiors-container {
 display: flex;
  align-items: center; /* This will vertically center the items */
  justify-content: center; /* This will horizontally center the items */
  width: 100vw;
  max-width: 1000px;
  height: 60vh;
  margin: 0 auto; 
  text-align: center;
}


.interiors-section h1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;
  flex: 1;
  font-size: 58px;
  font-weight: bold;
  text-align: left;
  color: #000000;
}

.interiors-section p {
 font-size: 25px;
  line-height: 1.5;
  color: #000000;
  text-align: left;
  margin-top: 30px; 
  max-width: 400px;
}

.interiors-image {
  justify-content: space-around; 
  display: flex;
  align-items: center; 
  flex: 1;
  margin-top: 300px;
}

.interiors-image img {
  display: block;
  width: 100%; 
  height: 100%;
  max-width: 400px; 
}



</style>