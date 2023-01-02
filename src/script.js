const red = document.getElementById ("red");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");

//when the page is loaded, it calls the automation function.
// window.onload = automation;

//function to automate the change of traffic light colors.

let time = setTimeout(automation, 0);   

function automation () { 
  
  setTimeout(() => {
    green.classList.add("greenLightOn")
    red.classList.remove ("redLightOn")    
  
    setTimeout(() => {
      
      green.classList.remove ("greenLightOn")      
      yellow.classList.add("yellowLightOn");
      
      setTimeout(() => {
        
        yellow.classList.remove ("yellowLightOn")        
        red.classList.add ("redLightOn");
        
        // setTimeout(() => {          
        //   time = automation();          
        // }, 2000);
      }, 2000);
    }, 2000);     
    
  }, 0);  
 
}

function turnOn () {  
   automation();
 
  console.log("turnOn")  
}

function turnOff (){  

  clearTimeout(time)
  console.log("desligou")
  
} 





 


    


