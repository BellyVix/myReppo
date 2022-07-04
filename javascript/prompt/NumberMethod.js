//  // number method example 
//  const Result= document.getElementById("result")
//  var userInput =prompt("Enter number") // return string
//  console.log(userInput,typeof userInput)
//  Result.innerText=userInput
//  //Result.innerText="This is not number 10"

//const { prototype } = require("events")



 
function CalculatorPrompt(){
let userInput1 = parseFloat(prompt("Enter your First Number ")) 
let operator = prompt ("enter your calculate choice (+ , -, *, / ) " )  
let userInput2 =parseFloat(prompt("Enter your Second Number "))
let Rest = 0;

let myh2= document.getElementById("result")

 //number exercise with prom and calc
 if(Number.isNaN(userInput1)|| Number.isNaN(userInput2) ){
     alert (" one of your input are wrong  restart and try again")
 }
 else {
        if (operator == "+")
        { Rest=userInput1+userInput2}
        else if (operator == "-")
        { Rest=userInput1-userInput2}
        else if (operator == "*")
        { Rest=userInput1*userInput2}
        else if (operator == "/")
        { Rest=userInput1/userInput2}
        else { alert("this operator don't match any of (+ , -, *, / ) ")}
      
      }

      return myh2.innerText=Rest
    }
    let myButton= document.getElementById("LetsGo")
     myButton.addEventListener("click", CalculatorPrompt)