<template>
  <section>
    <div class="services-container-wrapper">
      <div class="services-container">
        <div class="services-line"></div>
        <div class="services">
          <h1>SERVICES</h1>
        </div>
      </div>
    </div>

    <div class="planning-container">
      <div class="image-planning">
        <img src="../assets/images/image19.jpg" alt="Planning" />
      </div>
      <div class="right-section">
        <h1 class="planning-header">Planning</h1>
        <p class="planning-text">
          Our particular area of expertise is planning advice and obtaining
          planning permissions. We work closely with Local Planning Authorities,
          Building Control and other regulatory bodies to obtain the necessary
          permissions.
        </p>
      </div>
    </div>
    <div class="listed-container">
      <div class="text-section">
        <h1>Listed Buildings &<br />Conservation Areas</h1>
        <p>
          We have a wealth of experience working on Listed Buildings and
          buildings in Conservation areas.
        </p>
      </div>
      <div class="listed-image">
        <img src="../assets/images/image21.jpg" alt="Listed Buildings" />
      </div>
    </div>
    <div class="residential-container">
      <div class="image-residential">
        <img src="../assets/images/image08.jpg" alt="Residential" />
      </div>
      <div class="residential-section">
        <h1 class="residential-header">Residential</h1>
        <p class="residential-text">
          Our work stretches from domestic extensions and conversion, through
          new build houses to large new blocks of flats..
        </p>
      </div>
    </div>
    <div class="interiors-container">
      <div class="interiors-section">
        <h1>Interiors</h1>
        <p>
          We have a wealth of experience working on Listed Buildings and
          buildings in Conservation areas.
        </p>
      </div>
      <div class="interiors-image">
        <img src="../assets/images/image12.jpg" alt="Interiors" />
      </div>
    </div>
  </section>
</template>

<script></script>

<style scoped>
section {
  height: 240vh;
  width: 98.6%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.services-container-wrapper {
  width: 100%;
  display: flex;
  justify-content: flex-start;
}

.services-container {
  display: flex;
  align-items: center;
}

.services-line {
  flex: none;
  background-color: black;
  height: 5px;
  width: 200px;
 }

.services {
  font-size: 60px;
  font-weight: bold;
  line-height: 2.5;
  color: #000000;
}

.planning-container {
  width: 75%;
  height: 550px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  margin-top: 100px;
}

.image-planning {
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.image-planning img {
  display: block;
  width: 450px;
  height: 250px;
}

.right-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
}

.planning-header {
  font-size: 58px;
  font-weight: bold;
  text-align: right;
  color: #000000;
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
  width: 65%;
  height: 550px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
}

.text-section h1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 550px;
  font-size: 58px;
  font-weight: bold;
  text-align: left;
  color: #000000;
}

.listed-image {
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.listed-image img {
  display: block;
  width: 450px;
  height: 250px;
}

.text-section p {
  width: 70%;
  font-size: 25px;
  line-height: 1.5;
  color: #000000;
  text-align: left;
  margin-top: 20px;
}

.residential-container {
  width: 75%;
  height: 550px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
}

.image-residential {
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.image-residential img {
  display: block;
  width: 450px;
  height: 250px;
}

.residential-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
}

.residential-header {
  font-size: 58px;
  font-weight: bold;
  text-align: right;
  color: #000000;
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
  width: 75%;
  height: 550px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
}

.interiors-section h1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 500px;
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
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.interiors-image img {
  display: block;
  width: 450px;
  height: 250px;
}
</style>
