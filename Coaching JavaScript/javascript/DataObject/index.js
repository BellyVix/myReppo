// math object -index js 

var result 
//PI number
result=Math.PI;
// round method 
result =Math.round(2000.4)
// power method  2*2*2
result=Math.pow(2,3)

//square root method
result =Math.sqrt(64)

// find max
result = Math.max(44,88,100,20)


//find  min 
let number = [10,22,100]
//result = Math.min(...number)
result = Math.min(44,88,100,20)


// absolute value  return alway positive number 
// result = Math.abs(-44)

//random 
result = Math.random() // 0   0 .9999999999

//result=Math.random(Math.random()*10.toFixed())
result=Math.floor(Math.random()*10) 

function GetRandomNumberRange(min , max){
    return Math.round(Math.random()*(max-min)+min)
}
result = GetRandomNumberRange(1,5)

console.log(result)

 // if i get 2 same number win  i need to update to 1  if again update again 
 // if 2 number is not same  
 // button 2  
 // math.random 1-6
 // click link 
 // score variable 
 
let score = []