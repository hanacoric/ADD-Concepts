<template>
  <section class="aboutus-root">
    <div class="aboutus-container">
      <div class="aboutus-line"></div>
      <div class="aboutus">
        <h1>ABOUT US</h1>
      </div>
    </div>

    <div class="right-text">
      <h3>
        AD Design Concepts is an architectural practice established in 2010 and
        based in NW London
      </h3>
    </div>

    <div class="left-text">
      <p>
        Over the years AD Design Concepts have successfully completed a broad
        range of projects, including: domestic extensions and loft conversions,
        new build houses, large new build block of flats and office
        refurbishments.
      </p>
    </div>

    <div class="image-container-top">
      <div class="line-top"></div>
    </div>

    <div class="image-container-bottom">
      <img src="../assets/images/image06.jpg" alt="Aboutus-image" />
    </div>

    <div class="bottom-line-container">
      <div class="line-bottom"></div>
    </div>

    <div class="right-text-below">
      <p>
        The majority of the projects that we have been involved with are based
        in Greater London, but we work across England and abroad. We provide a
        full range of architectural services and can take projects from
        inception to completion. Our particular area of expertise is planning
        advice and obtaining planning permissions. Over the years we have helped
        many of our clients to realize their aspirations, whether in creating
        their dream homes or maximising the value of their sites / properties.
      </p>
    </div>
    <div class="left-text-below">
      <p>
        We offer creative solutions at feasibility and design stages and
        technical expertise in production of tender packages and construction
        drawings. We work closely with Local Planning Authorities, Building
        Control and other regulatory bodies to obtain the necessary permission.
        When required we act as Contract Administrator and / or clients’ agent
        during the construction process.
      </p>
    </div>
  </section>
</template>

<script></script>

<style scoped>
p {
  text-align: justify;
}

h3 {
  direction: rtl;
  text-align: justify;
}

.aboutus-root {
  height: 120vw;
  width: 98.6%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.aboutus-container {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  width: 100%;
}

.aboutus-line {
  flex: none;
  background-color: black;
  height: 5px;
  width: 100px;
}
.aboutus {
  font-size: 48px;
  font-weight: bold;
  line-height: 1;
  color: #000000;
}

.right-text {
  display: flex;
  justify-content: flex-end;
  width: 90%;
  text-align: right;
  font-size: 33px;
  font-weight: bold;
  line-height: 1;
  color: #000000;
}

.right-text h3 {
  width: 45%;
}

.left-text {
  display: flex;
  justify-content: flex-start;
  text-align: justify;
  width: 90%;
  text-align: left;
  font-size: 30px;
  font-weight: bold;
  line-height: 1.2;
  color: #000000;
}

.left-text p {
  width: 50%;
}

img {
  height: 60vh;
  width: 50%;
  display: block;
}

.image-container-top {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
}

.image-container-bottom {
  width: 90%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-end;
}

.bottom-line-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-end;
}
.line-top {
  background-color: black;
  height: 3px;
  width: 60%;
}

.line-bottom {
  background-color: black;
  height: 3px;
  width: 40%;
}

.right-text-below {
  display: flex;
  justify-content: flex-end;
  text-align: right;
  width: 90%;
  font-size: 30px;
  font-weight: bold;
  line-height: 1.3;
  color: #000000;
}

.right-text-below p,
.left-text-below p {
  width: 70%;
}

.left-text-below {
  display: flex;
  justify-content: flex-start;
  text-align: justify;
  width: 90%;
  text-align: right;
  font-size: 30px;
  font-weight: bold;
  line-height: 1.3;
  color: #000000;
}
</style>
