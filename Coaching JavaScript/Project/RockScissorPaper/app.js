var play = document.getElementById("play");
var result = document.getElementById("result");
var result1 = document.getElementById("result1");
var one = document.getElementById("photo1");
var two = document.getElementById("photo2");

var img1 = document.createElement("img");
img1.src = "https://i.ibb.co/f8WDm6K/Rock.jpg";

var img2 = document.createElement("img");
img2.src = "https://i.ibb.co/Jsw6ywG/Paper.jpg";

var img3 = document.createElement("img");
img3.src = "https://i.ibb.co/pR43J76/Scissor.jpg";

var img4 = document.createElement("img");
img4.src = "https://i.ibb.co/f8WDm6K/Rock.jpg";
img4.setAttribute("style", "border-radius:20px");
var img5 = document.createElement("img");
img5.src = "https://i.ibb.co/Jsw6ywG/Paper.jpg";
img5.setAttribute("style", "border-radius:20px");
var img6 = document.createElement("img");
img6.src = "https://i.ibb.co/pR43J76/Scissor.jpg";
img6.setAttribute("style", "border-radius:20px ");

function GetRandomNumberRange() {
  img1.setAttribute("style", "display:none");
  img2.setAttribute("style", "display:none");
  img3.setAttribute("style", "display:none");
  img4.setAttribute("style", "display:none");
  img5.setAttribute("style", "display:none");
  img6.setAttribute("style", "display:none");

  var num1 = Math.round(Math.random() * 2) + 1;
  console.log(num1);
  var num2 = Math.round(Math.random() * 2) + 1;
  console.log(num2);

  if (num1 == 1) {
    one.appendChild(img1), img1.setAttribute("style", "display:Block");
  } else if (num1 == 2) {
    one.appendChild(img2), img2.setAttribute("style", "display:Block");
  } else if (num1 == 3) {
    one.appendChild(img3), img3.setAttribute("style", "display:Block");
  }

  if (num2 == 1) {
    two.appendChild(img4), img4.setAttribute("style", "display:Block");
  } else if (num2 == 2) {
    two.appendChild(img5), img5.setAttribute("style", "display:Block");
  } else if (num2 == 3) {
    two.appendChild(img6), img6.setAttribute("style", "display:Block");
  }

  if (num1 == num2) {
    (result.innerText = "Equal"),
      (result1.innerText = "Equal"),
      result1.setAttribute("style", "background-color:rgb(255, 255, 0)"),
      result.setAttribute("style", "background-color: rgb(255, 255, 0)");
  } else {
    if (num1 == 1 && num2 == 2) {
      (result.innerText = "You Lose"),
        (result1.innerText = "I Win"),
        result.setAttribute("style", "background-color:rgb(250, 0, 0)"),
        result1.setAttribute("style", "background-color: rgb(0, 253, 0)");
    }
    if (num1 == 2 && num2 == 3) {
      (result.innerText = "You Lose"),
        (result1.innerText = "I Win"),
        result.setAttribute("style", "background-color:rgb(250, 0, 0)"),
        result1.setAttribute("style", "background-color: rgb(0, 253, 0)");
    }
    if (num1 == 3 && num2 == 1) {
      (result.innerText = "You Lose"),
        (result1.innerText = "I Win"),
        result.setAttribute("style", "background-color:rgb(250, 0, 0)"),
        result1.setAttribute("style", "background-color: rgb(0, 253, 0)");
    }
    if (num1 == 1 && num2 == 3) {
      (result.innerText = "You Win"),
        (result1.innerText = "I Lose"),
        result1.setAttribute("style", "background-color:rgb(250, 0, 0)"),
        result.setAttribute("style", "background-color: rgb(0, 253, 0)");
    }
    if (num1 == 2 && num2 == 1) {
      (result.innerText = "You Win"),
        (result1.innerText = "I Lose"),
        result1.setAttribute("style", "background-color:rgb(250, 0, 0)"),
        result.setAttribute("style", "background-color: rgb(0, 253, 0)");
    }
    if (num1 == 3 && num2 == 2) {
      (result.innerText = "You Win"),
        (result1.innerText = "I Lose"),
        result1.setAttribute("style", "background-color:rgb(250, 0, 0)"),
        result.setAttribute("style", "background-color: rgb(0, 253, 0)");
    }
  }

  // let rock= 1
  // let paper = 2
  // let scissor = 3

  // 1 win again 3 lose again 2
  // 2 win again 1 and lose again 3
  // 3 win again 2 and lose again 1
}
play.addEventListener("click", GetRandomNumberRange);

//https://codepen.io/mushmuroka/pen/oNERYVx