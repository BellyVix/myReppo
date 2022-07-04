// string method 
const MyText = 'lorem  brussel ipsum brussel ipsum  amet'
var result = MyText.length
// // lenght 
result = MyText[0]
result = MyText[MyText.length-1]
console.log (result)
console.log ( "hello")

// // charat 
// result = MyText.charAt(6) // return character at index  6

// // contact ( ) method 
var Fname  = " john "
var Lname = " Demon"
result = Fname.concat(Lname) 
result = "123".concat("456") // return 123456

console.log(result)

//StartWith  method  and endWith
 result =MyText.endsWith("amet")        // end with  (" ") return only true or false 
 
console.log(result)
result = MyText.startsWith("lorem")     // start with  (" ") return only true or false 
console.log(result)

// includes method
result = MyText.includes("ipsum")
console.log(result)

//indexOf() method

result=MyText.indexOf("brussel")
console.log(result)

//replace method 
result =MyText.replace ("brussel","Berlin")
console.log (result)
result=MyText.replaceAll("ipsum","varna")
console.log (result)
// split method 
result =MyText.split(" ")
var Name= "Ersin,Hande,Alex,John"
result= Name.split(",")
console.log (result)

// slice() method 
result= MyText.slice(6,MyText.length-4)

// upperCase 
result=MyText.toLocaleUpperCase()
console.log (result)
//lowerCase
result= MyText.toLocaleLowerCase()
console.log (result)

// Trim  //trim in front and at end of string 
var myText2="     Varna           Plovdiv             "
result = myText2.trim()
result = myText2.trim().replaceAll(" ","_")
console.log(result)


// match() method 

var MyNewTest = " my new test dolor  brussel dolor var plovdiv"
 //result = MyNewTest.match(/brussel/)
//result = MyNewTest.matchAll(/dolor/g)  something went wrong  ??? 
 //console.log(result)

 var MyText2 = "             lorem                    ipsum             ";
 //result = MyText2.trim().slice(5,MyText2.length-32); // return lorem ipsum
 result = MyText2.trim().slice(0,6).concat(MyText2.trim().slice(MyText2.length-31)); // return lorem ipsum
 //console.log(MyText2)
  let MyNewText= "dolor ipsum dolor brussel BELGIUM sit dolor brussel ipsum amet 123456789"
 result = MyNewText.match(/brussel/)
 result = MyNewText.match(/brussel/)
 console.log (result)
 
 
 


