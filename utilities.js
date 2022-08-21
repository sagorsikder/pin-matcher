// get  random pin
function randomPin(){
    let pin =0;
    pin = Math.round( Math.random()*10000);
    
    pin=parseInt(pin);
    console.log(pin);
    if(pin<1000){
        return randomPin();
        
    }
    
    return pin;

}

// update text field

function updateText(idName,value){
    document.getElementById(idName).value = value;
}