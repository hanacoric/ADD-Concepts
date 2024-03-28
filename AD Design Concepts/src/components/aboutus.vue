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
  height: 320vh;
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
  width: 200px;
}
.aboutus {
  font-size: 60px;
  font-weight: bold;
  line-height: 2.5;
  color: #000000;
}

.right-text {
  display: flex;
  justify-content: flex-end;
  width: 80%;
  text-align: right;
  font-size: 45px;
  font-weight: bolder;
  line-height: 1;
  color: #000000;
}

.right-text h3 {
  width: 67%;
}

.left-text {
  display: flex;
  justify-content: flex-start;
  text-align: justify;
  width: 70%;
  text-align: left;
  font-size: 38px;
 line-height: 1.2;
  color: #000000;
}

.left-text p {
  width: 70%;
}

img {
  height: 100%;
  width: 70%;
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
  width: 70%;
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
  width: 80%;
  font-size: 38px;
  line-height: 1.3;
  color: #000000;
}

.right-text-below p,
.left-text-below p {
  width: 80%;
}

.left-text-below {
  display: flex;
  justify-content: flex-start;
  text-align: justify;
  width: 80%;
  text-align: right;
  font-size: 38px;
  font-weight: bold;
  line-height: 1.3;
  color: #000000;
}

@media (max-width: 768px) {
  .aboutus-root{
    height: 90vh;
  }

  .aboutus-container {
    margin-bottom: 50px;
  }

  .aboutus h1 {
    font-size: 50px;
    line-height: 1.5;
    font-weight: bold;
    
  }

  .aboutus-line {
    height: 2px;
    width: 70px;
  }


  .left-text {
    display: flex;
    justify-content: center;
    height: 100%;
  }

  .left-text p {
    font-size: 15px;
    line-height: 1.5;
    width: 80%;
  }
  
  .image-container-top,
  .image-container-bottom,
  .bottom-line-container {
    flex-direction: column; /* Stack children vertically */
    align-items: center; /* Center children */
  }


  .right-text,
  .left-text,
  .right-text-below,
  .left-text-below {
    display: flex;
    justify-content: center; /* Center text */
    width: 80%; 
    text-align: center; 
    line-height: 1.4; 
  }

  .right-text h3 {
    font-size: 23px;
    line-height: 1.4;
    width:80%;
    text-align: right;
    margin-bottom: 20px;

   
  }

  .left-text p{
    font-size: 18px;
    line-height: 1.5;
    width: 80%;
    text-align: justify;
    margin-bottom: 50px;
  }

  .line-top,
  .line-bottom {
    display: none;
  }

  img {
    width: 100%; /* Full width for images */
    height: auto; /* Adjust height automatically */
    margin-bottom:50px
  }

  .right-text-below p {
    font-size: 18px;
    line-height: 1.5;
    width: 80%;
    text-align: justify;
    margin-bottom: 20px;
  }

  .left-text-below p {
    font-size: 18px;
    line-height: 1.5;
    width: 80%;
    text-align: justify;
    margin-bottom: 20px;
  }

  /* Override RTL direction for H3 on small screens if necessary */
  h3 {
    direction: ltr; /* Change to ltr if the RTL layout is not needed on mobile */
  }
}

</style>
