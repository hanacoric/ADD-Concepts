  flex: none;
  background-color: black;
  height: 5px;
  width: 200px;<template>
  <section>
    <div class="people-contact-container">
      <div class="people-contact-line"></div>
      <div class="people-contact">
        <h1>PEOPLE & CONTACT</h1>
      </div>
    </div>
    <div class="info">
      <div class="intro">
        <h3>
          Mr. Almas Bavcic Dip. Arch. RIBA is the founder and principal of AD
          Design Concepts
        </h3>

        <div class="image-container-top">
          <div class="line-top"></div>
        </div>
      </div>

      <div class="image-container">
        <div class="text">
          <p>
            Almas is a chartered architect and long-time member of the Royal
            Institute of British Architects. He has been practising architecture
            in the UK for over 30 years.
          </p>
          <p>
            Prior to setting up AD Design Concepts, Almas worked at PKS
            Architects LLP where he was an associate and a partner for many
            years.
          </p>
          <p>
            Our team includes a number of highly skilled and experienced
            architects and technicians who are passionate about their work. The
            credo of our entire team and our prime aim is to provide the best
            service to our clients.
          </p>
        </div>
        <div class="image-container-bottom">
          <img src="../assets/images/face.jpg" alt="Almas" />
        </div>
      </div>
    </div>
  </section>
</template>

<script></script>

<style scoped>
.people-contact-container {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  height: 70vh;
}

.people-contact-line {
  flex: none;
  background-color: black;
  height: 5px;
  width: 200px;
}
.people-contact {
  font-size: 60px;
  font-weight: bold;
  line-height: 2.5;
  color: #000000;
}

.info {
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.intro {
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: justify;
  flex-direction: column;
}

.intro h3 {
  max-width: 60%;
  font-size: 40px;
  line-height: 1.5;
  color: #000000;
  font-weight:400;
}

.image-container-top {
  width: 80%;
  height: 10vh;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
}

.line-top {
  background-color: black;
  height: 3px;
  width: 80%;
}

.image-container {
  width: 100%;
  height: 45vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
}

.text {
  max-width: 50%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  text-align: justify;
}

.text p {
  font-size: 30px;
  font-weight: 400;
  line-height: 1.5;
  color: #000000;
}

.image-container-bottom {
  width: 60%;
  height: 90%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
}

img {
  height: 120%;
  width: 70%;
  display: block;
}

.bottom-line-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-end;
}
</style>
