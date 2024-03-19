<template>
    <div class="footer">    
        <div class="phrase">
            <h2>"From Blueprints to Landmarks"</h2>
        </div>
        <div class="centered-line"></div>
        <div class="info">
            <a href="info@addconcepts.co.uk">info@addconcepts.co.uk</a>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>

    .footer {
        height: 50vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        padding-bottom: 2%;
    }
    .phrase {
        width: 100vw;
        height: 10vh;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
    h2{
        font-size: 45px;
        color: black;
        font-weight: bold;
    }

    .centered-line {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30vw;  
        height: 0.5vh;
        background-color:black;
    }

    .info {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 15vh;
    }

    .info a {
        color: black;
        text-decoration: none;
        font-size: 30px;
    }
</style>