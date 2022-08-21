let updateValue = '';
// catch the keyword
document.getElementById("keyword").addEventListener("click",function(event){

    //   catch digit
 let value =  event.target.innerText;
 value = value.toString();
 if(value==='0' || value==='1' || value==='2' || value==='3' || value==='4' || value==='5' || value==='6' || value==='7' || value==='8' || value==='9' || value==='<' || value==='C'){
 updateValue = updateValue + value;

 if(value==='C'){
    updateValue ='';
 }

 if(value==="<"){
    updateValue = updateValue.split('');
    updateValue.pop();
    updateValue.pop();
    updateValue = updateValue.join('');
    
 }

//  update input display
updateText("input-display",updateValue);
 }

//  verify
 if(value==="Submit"){
    
    // catch the verify message
    const successMessage = document.getElementById("success");
    const loserMessage = document.getElementById("loser");

    if(updateValue == document.getElementById("pin-display").value){
        successMessage.style.display="block";
        loserMessage.style.display = "none";
    }
    else{
        successMessage.style.display="none";
        loserMessage.style.display = "block";
    }

 }

})

