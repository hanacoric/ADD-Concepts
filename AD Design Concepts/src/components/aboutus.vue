<template>  
<div>
    
    <div class="aboutus-container">
    <div class="aboutus-line"></div>
    <div class="aboutus">
            <h1>ABOUT US</h1>
    </div>
</div>

    <div class="right-text">
        <h3>AD Design Concepts is an architectural practice established in 2010 and based in NW London.</h3>
    </div>
    <div>
        <div class="left-text">
            <p>Over the years AD Design Concepts have successfully completed a broad range of projects, including: domestic extensions and loft conversions, new build houses, large new build block of flats and office refurbishments.</p>
        </div>
        <div class="left-line"></div>
    </div>

    <div class="image-container">
        <img src="../assets/images/image06.jpg" alt="Aboutus-image">
    </div>
    <div class="line-container"></div>
    <div class="right-text-below">
        <p>The majority of the projects that we have been involved with are based in Greater London, but we work across England and abroad. 
    We provide a full range of architectural services and can take projects from inception to completion. Our particular area of expertise is planning advice and obtaining planning permissions. Over the years we have helped many of our clients to realize their aspirations, whether in creating their dream homes or maximising the value of their sites / properties.</p>
    </div>
    <div class="left-text-below">
        <p>We offer creative solutions at feasibility and design stages and technical expertise in production of tender packages and construction drawings.  We work closely with Local Planning Authorities, Building Control and other regulatory bodies to obtain the necessary permission. When required we act as Contract Administrator and / or clients’ agent during the construction process.  </p>
    </div>
</div>
 

</template>


<script>
</script>

<style scoped>
.aboutus-container {
    display: flex; 
    align-items: center; 
    height: 100px;
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
    float:right;
    text-align: justify;
    height: 10%;  
    width: 100%; 
    max-width: 1000px; 
    text-align: right;
    line-height: 1.5px;
    font-size: 40px; 
    font-weight: bold; 
    line-height: 1; 
    color: #000000; 
    padding-top: 100px;
    padding-right: 150px;
}

.left-text {
    display: flex;
    float:left;
    text-align: justify;
    height: 10%;  
    width: 100%; 
    max-width: 1000px; 
    text-align: left;
    line-height: 1.5px;
    font-size: 30px; 
    font-weight: bold; 
    line-height: 1; 
    color: #000000; 
    padding-top: 100px;
    padding-left: 150px;
}

  img {
    position: relative;
    display: block; /* Removes bottom margin/whitespace inherent to inline elements */
    height: auto; 
    float: right;
    padding-top: 200px;
    padding-right: 150px;
    width:70vw;
    
  }
 
/*   .line-container::before,
  .line-container::after {
    flex: none; 
    background-color: black; 
    height: 5px; 
    width: 100px;
  }

  .line-container::before {
    top: 100px; /* Line above */
   /*  float: left;
  }

  .line-container::after {
    bottom: 0; /* Line below */
   /*  float:right;
  } */ 

  .right-text-below {
    display: flex;
    float:right;
    text-align: justify;
    height: 10%;  
    width: 100%; 
    max-width: 1000px; 
    text-align: right;
    line-height: 1.5px;
    font-size: 30px; 
    font-weight: bold; 
    line-height: 1; 
    color: #000000; 
    padding-top: 100px;
    padding-right: 150px;
  }

    .left-text-below {
        display: flex;
        float:left;
        text-align: justify;
        height: 10%;  
        width: 100%; 
        max-width: 1000px; 
        text-align: left;
        line-height: 1.5px;
        font-size: 30px; 
        font-weight: bold; 
        line-height: 1; 
        color: #000000; 
        padding-top: 100px;
        padding-left: 150px;
        
    }

</style>


