<template>
    <div>
        <div class="people-contact-container">
          <div class="people-contact-line"></div>
          <div class="people-contact">
            <h1>PEOPLE & CONTACT</h1>
          </div>
        </div>

            <div class="intro">
             <h1>Mr. Almas Bavcic Dip. Arch. RIBA is the  <br> founder and principal of AD Design</h1>
            <div class="line"></div>
            </div>
            <div class="profile-container">
         <div class="profile-image">
          <img src="../assets/images/face.jpg" alt="Almas Bavcic">
        </div>
        <div class="profile-text">
        <p>Almas is a chartered architect and long-time member of the Royal Institute of British Architects. He has been practising architecture in the UK for over 30 years.</p>
        <p>Prior to setting up AD Design Concepts, Almas worked at PKS Architects LLP where he was an associate and a partner for many years.</p>
        <p>Our team includes a number of highly skilled and experienced architects and technicians who are passionate about their work. The credo of our entire team and our prime aim is to provide the best service to our clients.</p>
        <div class="line"></div>
      </div>
     
    </div>

    </div>
</template>

<script></script>

<style scoped>


.people-contact-line {
    flex: none;
  background-color: black;
  height: 5px;
  width: 100px;
}

.people-contact {
  font-size: 48px;
  font-weight: bold;
  line-height: 1;
  color: #000000;
}

.intro {
    text-align: left;
   margin-top: 100px;
   height: 100vh;
   margin-left: 100px;
  }
  .intro h1 {
    font-size: 40px;
  }
  .line {
    margin-top: 20px;
    height: 4px;
    width: 70%;
    background-color: black;
  }
  .profile-container {
    position: relative;
  }
  
  .profile-image {
     display: flex;
    align-items: flex-start; 
    max-width: 500px; 
    float: right;
  
}
.profile-image img {
    width: 100%;
}

</style>