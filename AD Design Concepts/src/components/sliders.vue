<template>
    <body>
        <div class="background-image">
        </div>
        <div class = "sliders">
            <div class = "arrow-left">
                <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="267.57" height="490.55" viewBox="0 0 267.57 490.55"><defs>.cls-1{fill:#fff;stroke-width:0px;}</defs><path class="cls-1" d="M53.83,245.28L261.04,38.06c8.71-8.71,8.71-22.83,0-31.53-8.71-8.71-22.83-8.71-31.53,0L6.53,229.52c-4.18,4.18-6.53,9.85-6.53,15.76s2.35,11.59,6.53,15.77l222.98,222.97c4.35,4.35,10.06,6.53,15.77,6.53s11.41-2.18,15.77-6.53c8.71-8.71,8.71-22.83,0-31.53L53.83,245.28Z"/></svg>
            </div>
            <div class="slider-text">
                <svg xmlns="http://www.w3.org/2000/svg" width="818.334" height="255" viewBox="0 0 818.334 255">
                <g id="Group_59" data-name="Group 59" transform="translate(-550.833 -469)">
                <text id="_DESIGN_" data-name=" DESIGN " transform="translate(859.167 604.2)" fill="none" stroke="#efece9" stroke-width="3" font-size="105" font-family="ZurichBlackBT, Zurich BT"><tspan x="0" y="0" xml:space="preserve"> DESIGN </tspan></text>
                <text id="CONCEPTS" transform="translate(895.008 666.7)" fill="none" stroke="#efece9" stroke-width="3" font-size="73" font-family="ZurichBlackBT, Zurich BT"><tspan x="0" y="0">CONCEPTS</tspan></text>
                <text id="AD" transform="translate(554.833 671)" fill="none" stroke="#efece9" stroke-width="4" font-size="206" font-family="ZurichBlackBT, Zurich BT"><tspan x="0" y="0">AD</tspan></text>
                </g>
                </svg>
            </div>
            <div class = "arrow-right">
                <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="267.57" height="490.55" viewBox="0 0 267.57 490.55"><defs>.cls-1{fill:#fff;stroke-width:0px;}</defs><path class="cls-1" d="M213.74,245.27L6.53,452.49c-8.71,8.71-8.71,22.83,0,31.53s22.83,8.71,31.53,0l222.98-222.98c4.18-4.18,6.53-9.85,6.53-15.76s-2.35-11.59-6.53-15.77L38.06,6.53C33.71,2.18,28.01,0,22.3,0c-5.71,0-11.41,2.18-15.77,6.53-8.71,8.71-8.71,22.83,0,31.53l207.21,207.2Z"/></svg>
            </div>
            
        </div>
    </body>
</template>


<script>
</script>

<style scoped>
.background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('../assets/images/Image05.jpg');
    background-size: cover;
    background-position: center;
    z-index: -4;
}

.sliders {
    justify-content: space-between;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    
}
.arrow-left, .arrow-right {
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 50px;
    height: 50px;
}

.arrow-left{
    right:25%;
}
.arrow-right{
    left:25%;
}
</style>