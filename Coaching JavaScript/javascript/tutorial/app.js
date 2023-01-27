
/*
var name="john";
var age=30;
var name="admin"; // re declare  variable 
name ="ivan" // update
console.log("hello");
console.log(name);

3 way to declare variable 
var keyword > can be re-declared and update
const keyword > can't be re declare and update
let keyword can't redeclare can update
difrence between re-declare and update is that for redeclear pc create another place (memory)

const car = "maria";
// const name = " gloriya" you cant re-declare  no update 
// console.log (car)
// can run in head and in body 
//let website = ( "google");
//console.log (website);

//console.log(user); // you have first to created the var 
//var user ="root";



var number1="10"
var number2 ="20"
var total = 10 + 20 //10+ 20 =30  
console.log (total);

var country= "bru" + "ssel" // 'brussels 's bear '   2 time close can be fix with \      'brussels \'s bear '
//var console.log (country);


bmi
var height = 174;
var weight = 90;
var bmi = weight /(height*height);

console.log (bmi);
//bruto salary 3000 euro 
// tax percent 21 %
 var salary = 3000;
  var tax = 21 ;
   var formula =salary-(salary*tax)/100 ;
    console.log (formula)

    //operators
// addition
//  division
// subtraction
// multiplication

let result;
result = 7 +3 ; // addition operator
result = "a "+ "b"
result = 7-3 // subtraction 
result += 2 // result = result + 2  
result -= 1 // result = result -1
result =5*5  // multiplication operator 
result *=2 // result = result *2 > 25*2 =50
result  = 50 /2 // result division operator > 25
result /= 5  // result  = result /5 > 25/5 =5
// increase and decrease 
 result ++ ;
 result ++;
 ++ result;
 console .log (result)


 result --;
 --result ;
 var num1 = 50 
  num1 +=10
  console.log (num1)


  let fname="joe"
  let lname="bob"
result = fname + " " + lname
console.log (result + "😂")


var n1 =5 // number
var n2=5 // number 
var n3=6
var n4 = "5"
// equal to operator==

 res =n1 ==n2
  res = n1 == n3
  res = n1 == n4  // only value   true 

  // equal to operator === value and type of data  false 
  res =n1 ===n4
 res = "space"== "space" // true  same value
 res = "space" === "Space" // false because is capitalize |  still have same value 
 res = "😂" == "😂" // true 
 res = "😂 " == "😂" // false because of space in 1  " "


 res = n1 != n2
 res = n1 != n4
 
  var x1 
  var  x2
  res =x1 ===x2
 console.log(res)
 
 // greater than operator 

 res = n1>n2
 res = n3>n1
 res = n3>n4 //

 res = n3 <n4 // false n3=6 n=5

 // greater than or equal to operator >=
 console.log(res)

 var result = n1 >= n2
result = n1 >= n4 
result = n1 >=n3

result = n1<=n3 ? "correct" : "incorrect" // like if statement  correct will be display if  condition is true and incorect will be print if is not true 
 
 console.log(result)

// les than or equal operator  <=
*/



/*
 var myRule= n1>n3 ;
 var successMessage = "correct" ;
 var errorMessage = " incorrect";
//result = myRule ? successMessage: errorMessage
 //console.log (result)
*/
/*
 var student="jack"
 var studentAge = 18;
 var studentMoney =0
 result =studentAge>=18 ? student + "is allow to drink ": student +" is not allow to drink"

 result=studentAge>=18 ? `${student} is allowed` : `${student}is not allowed`



 var myRule = studentAge>=18
 var rule2 =  studentMoney>=1
 var GetResult =myRule&&rule2;
 result = myRule && rule2


 //nest 
result= 5>="5" ?
(5==="5")?

'yes they are equal'
:
'no data type is difference'
:
"no"
 console.log(result)
// logical operator 
// true and false 
*/



// nest 2

//   question mark   ? is like if statement 
/*
const student1 = 18
const student2 = 11
comp = student1 >= student2 ?
(student1 > 10 && student2 >10)?
"yes both of them can eat pizza"
:
"some of you are too young to eat pizza"
: "no"


console.log (comp)

var myClass = 12;
 var teacher = 1 ;
 

 var car = 10 
 car -=5
 car *=2
 console.log (car)




document.getElementById("message").innerText="hello friends"
document.getElementById ("container").innerHTML= "<h1> hello class  mate </h1> "

result= 5>="5" ?
(5==="5")?

'yes they are equal'
:
'no data type is difference '
:
"no"
 console.log(result)

 */

 function Calculate() {

  var d1 = document.getElementById("degree").value;
if (d1 >= 20) {

    document.getElementById("result").innerHTML = "You don't need to wear a scarf!"

  } else if (d1 <= 20) {

    document.getElementById("result").innerHTML = "You need to wear a scarf!";

  }

  else {

    document.getElementById("result").innerHTML = "Please enter a valid number";

  }

}

var resultBtn = document.getElementById("btn");

resultBtn.onclick = Calculate;




