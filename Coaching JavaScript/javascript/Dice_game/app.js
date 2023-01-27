let gen = document.getElementById("gen")
let result = document.getElementById("result")
let result1 = document.getElementById("result1")
let score = document.getElementById("score")
Count=0
function GetRandomNumberRange() {
    var num1 = Math.round(Math.random() * 5) + 1;
    result.innerHTML = `number ${num1}`
    var num2 = Math.round(Math.random() * 5) + 1;
    result1.innerHTML = `number ${num2}`
    // result.=//`number ${num1}`
    //result2.innerText=`number ${num2}`
  
    if (num1 == num2) {
      Count += 1;
      score.innerHTML = Count
    }
  
    //return Count.innerHTML = score;
  }
  
  gen.addEventListener("click", GetRandomNumberRange);