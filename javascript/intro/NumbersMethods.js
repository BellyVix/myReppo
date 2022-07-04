// Numbers methods
var result;
var n1 ="10";
var n2 = 10;
var n3= "10.5";

const PI = 3.14;
var n4 = "10 15 20"
var n5 = "10 15 20"
var n6= "9e+2"
var n7= 10e+2 // scientific notation
var n8 = 2000.58;
// toString() method
result = n2.toString();// return string 

// perseIn method
result = parseInt(n1); // convert string to integer

console.log(result,typeof result)
result = parseInt("10")+ parseInt("10")
console.log(result,typeof result)

// parseFloat method
result =parseFloat(n3); // return floating point representation of number 
console.log(result,typeof result)

// toExponential() method
result=PI.toExponential()

// fixed method
 result = n8.toFixed(1); //  50.54 to 51 
 result = Number("10");
 result=Number(undefined)
 result = Number(null);
 result=Number(true)
 result=Number(false)
 result = Number.MAX_VALUE
 result = Number.MIN_VALUE
 result = Number.MIN_SAFE_INTEGER
 result = Number.MAX_SAFE_INTEGER
 result = Number.NEGATIVE_INFINITY
result = Number.POSITIVE_INFINITY
result=Number.NaN
result =Number.isFinite(10)
result =Number.isFinite(Infinity)
result =Number.isFinite(NaN)
result= Number.isInteger("10")
result= Number.isInteger(10)
result=Number.isNaN(10/NaN)
result= Number.isNaN("10"/"10")
result=Number.isSafeInteger(10)

// if var is not number will return  else if is number will return if 
var userInput = 10


if(Number.isInteger(userInput)){
    console.log ( "Valid number")
}
    else {
        console.log ( "Invalid input") 
    }


console.log(result,typeof result)


