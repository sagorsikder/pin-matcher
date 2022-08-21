// catch the generate button
document.getElementById("pin-button").addEventListener("click",function(){

    // get random pin
    const pin = randomPin();
    

    //update pin in display
    updateText("pin-display",pin); 

})