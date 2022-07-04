console.log("functions.js")

/*
regular function

arrow function
*/
/*
function GetSum (){
    // here is function scope 
    var getResult = 1+1
    console.log("Get SUm function",getResult);
    return 5;
   // console.log("Get SUm function") // everything after return  don't work 

}

//GetSum() // called back function
//console.log(GetSum()) // this is make it visual in the log 
*/
/*
function GetSumOfNumbers (n1,n2){
    console.log (n1,n2)
    return n1+n2 // can be 1+1 or 2+5
}
//GetSumOfNumbers( "Hello World", [1,2,3] ) //here we give parameters can be any type 
//GetSumOfNumbers({id:1},null)

console.log(GetSumOfNumbers(4,6))
console.log(GetSumOfNumbers(2,10))

*/
/*
var Student = {
    name:"Joe",
    age: 25 
}
function GetStudentName(StudentJobs){
    console.log (StudentJobs.name)
}
GetStudentName(Student)


*/
var student={
    name: "joe",
    age : 25,
    IsStudent: true,
    IsTeacher: false,
    score:[4,3,6,7]
}

function VerifyStudent (StudentParam) {
    console.log (StudentParam)
    let IsStudent = StudentParam.IsStudent
   // console.log(IsStudent)
    return IsStudent ? `NAME:${StudentParam.name}\nAGE:${StudentParam.age}\nSCORES:${StudentParam.scores.toString()}` : "He/she is not a student"

}

//arrow function
const VerifyStudent2 = studentParam => {
    //  console.log(studentParam) // function scope
    let isStudent = studentParam.isStudent
    // console.log(isStudent)
  //  console.log("Arrow function")
    return isStudent ? `NAME:${studentParam.name}\nAGE:${studentParam.age}\nSCORES:${studentParam.scores.toString()}` : "He/she is not a student"
}

const GetSumOfNumbers = (n1,n2) =>  n1+n2 
const  TestArrowFunction= ()=> console.log ( " hello arrow function")
console.log  (GetSumOfNumbers(4,5))
console.log(VerifyStudent2 (student))



// mission arrow  bmi net salary 
// BMI arrow function

// const GetBMI  = (weight,height) =>weight /(height*height)
// console.log (GetBMI(90,174))
// BMI(90, 1.74);
// //BMI function
// function BMI(weight, height) {
//     var bmi = weight / (height * height)
//     return bmi
//   }
// console.log(BMI(90,174))

// // Salary function 
// function Salary(GrossSalary, Tax) {
//     var NetSalary = GrossSalary - ((Tax / 100)*GrossSalary);
    
//     return NetSalary
//   }
//    console.log(Salary(3000,21))

// // salary function 2 
//    const SalaryNet =(GrossSalary,Tax)=> GrossSalary - ((Tax/100)*GrossSalary)

//    console.log (SalaryNet(3000,21))




