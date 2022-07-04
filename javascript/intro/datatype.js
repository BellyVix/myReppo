/*
string
number - long short bute float double
boolean
undefined
object// array
null
*/

let result;
// string data type 
result =" Hello friend!"
result =" Hello friend!"
result = `hello friend!` 


// number type of data
result= 1
result= "1"
result= 1.5

// boolean data type
result = true 
result = false 

// undefined data type 
result = undefined
//declared variable but not assigned a value 
var x;
// objects data type 
var student = {
   // key:value 
    name:"John",     
    age :30,
    email: "john@john.com",
    isStudent : false ,
    address:{
        country:"Belgium",
        city:"Brussels",
        street:"",
        ZipCode:1000
    }

}



//result =student.email
result = `his name is ${student.name} and he is ${student.age} years old. And he is from  ${student.address.city}`;
result = student.isStudent? `his name is ${student.name} and he is ${student.age} years old.`:
`he is not student`
// on place of  student.address.city for nesting 
// how to access     result =student.address.city
//array
var numbers = [ 1, "string",true, null,{name:"john"}, undefined]
//array numbers start from 0 

result=numbers.length
result=numbers[0]
result= numbers[4].name
result = numbers
numbers[1] = "New string"

var students = [
    {name:"Ersin", age: 24,
    scores:[ 44,5,10,34]
},
    {name:"Nedyalko", age: 23},
    {name:"John", age: 25}
]

 result=students[0].scores[3]
 

 var nestedArray = [1,2,3,[6,7,8,[9,7,6]]] // you have to have , before opening nested 
result= nestedArray[3][3][1]




 // `type of result ${typeof result}`
 console.log(result, `Type of result: ${typeof result}`)

    var person = [
        {
        name:"Amber",
         age: 24,
        scores:[ 44,5,10,34]
    },
        {
        name:"Ivan", 
        age: 23
    },
        {
            name:"John",
             age: 25
        },

    ]
    
  console.log (person[0].name)
 //1 Object.property     person[0].name
//
 const human ={
    name:'Amber',
    city:"Brussels",
    age: 18
 }
 console.log(human.age) 

//2  object["property"]     person[0]["name"]
//  2. Square brackets
const shopList =
{
    alcohol:"vodka",
    meat:"pork",
    "3dairy":"milk" // you can't use normally number but with "" you can 
}
 console.log(shopList["alcohol"]) // "" are req 
 console.log(shopList["3dairy"]) // test for  special case 

//3 const { property } = object
//Object destructuring 

const hero = { 
    name:"Batman",
    planet: "Mars"
}

const { name } = hero;
const{planet} = hero

console.log (name)
console.log (planet)
//  all 3 
console.log ( hero.name)
console.log  ( hero["name"])
 console.log ( name ) 

 // for last one you need   const { name } = hero;   
 //  for planet with  const { planet } = hero;
 // and for another object  const { planet } = nameOfTheObject;

var hero2 = {
    name:"SpiderMan",
    planet: "Mars"
 }
 console.log(hero2.name)
 console.log(hero2["planet"])



 
 var person = [
    {
    name:"Amber",
     age: 24,
    scores:[ 44,5,10,34]
},
    {
    name:"Ivan", 
    age: 23
},
    {
        name:"John",
         age: 25
    },
  
]


console.log (person,typeof person)


var text = "Ivan i'm here"
var text2 = "John im here"

result = `Is everyone here ? ${person[0].name} and ${text2}`

console.log (result)