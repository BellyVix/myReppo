// BMI
// regular function 
// weight / height*height 


// function BMI (weight, height){
// var result =weight/(height*height)
// return result  
// }
// console.log(BMI(68,1.72))

 const BMICalcolator = (weight, height) =>{
     return weight/(height*height)
 }
 console.log(BMICalcolator(68,1.72))


//Neto salary 
function GetNettoSalary (salary,tax){
    let getTaxAmount = (salary*tax)/100
    let getNetto = salary - getTaxAmount
    return getNetto

}
console.log( " Netto is " , getNetto (1000, 21))

// const GetNettoSalary = (salary,tax)=>{
//     let getTaxAmount = (salary*tax)/100;
//     let getNetto = salary - getTaxAmount;
//     return getNetto;
// }

// console.log("Netto salary is", GetNettoSalary(1000,21));
