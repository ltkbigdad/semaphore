const red = document.getElementById ("red");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");

/*traffic light colors 2*/

const red2 = document.getElementById ("red2");
const yellow2 = document.getElementById("yellow2");
const green2 = document.getElementById("green2");

//when the page is loaded, it calls the automation function.

window.onload = automation;

//function to automate the change of traffic light colors 

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
        
        setTimeout(() => {          
          time = automation();          
        }, 2000);
      }, 2000);
    }, 2000);  
  }, 0);  
}

function turnOn () {  
  document.getElementById("semaphore").style.display = "flex";
  document.getElementById("semaphore2").style.display = "none";
  window.onload

  red2.classList.remove ("redLightOn")
  yellow2.classList.remove ("yellowLightOn");
  green2.classList.remove ("greenLightOn");
}

function turnOff (){ 
  document.getElementById("semaphore").style.display = "none";
  document.getElementById("semaphore2").style.display = "flex";

  red2.classList.remove ("redLightOn")
  yellow2.classList.remove ("yellowLightOn");
  green2.classList.remove ("greenLightOn");
} 

function redLight (){
  red2.classList.add ("redLightOn");
  yellow2.classList.remove ("yellowLightOn");
  green2.classList.remove ("greenLightOn");
}

function yellowLight (){
  yellow2.classList.add ("yellowLightOn");
  red2.classList.remove ("redLightOn")
  green2.classList.remove ("greenLightOn");
}

function greenLight (){
  green2.classList.add ("greenLightOn");
  red2.classList.remove ("redLightOn")
  yellow2.classList.remove ("yellowLightOn");
}




 


    


