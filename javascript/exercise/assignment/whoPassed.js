
var _students = [
    {
        id:1,
        name:'avarel',
        course:'javascript',
        score:45
    },
    {
        id:1,
        name:'mike',
        course:'java',
        score:55
    },
    {
        id:1,
        name:'george',
        course:'javascript',
        score:66
    },
    {
        id:1,
        name:'joe',
        course:'python',
        score:70
    }
    
]
var myInput = document.getElementById("myInput")
var myButton=document.getElementById("myButton")
var myResult=document.getElementById("myResult")

//whoPassedExam?            N1

// function whoPassedExam (PassedStudent){
//     var myInputNum = parseFloat(myInput.value) 
//  var PassedStudent=_students.filter(pass=>pass.score>=myInputNum)
 

//   console.log(PassedStudent)

//     myResult.innerHTML=PassedStudent.map(pass=>pass.name)
// }
// myButton.addEventListener("click",whoPassedExam)

//whoPassedExam?     N2

// function whoPassedExam (){
//     let InputName = myInput.value.toLowerCase()
//     let Student =_students.filter(person=>person.name==InputName)
//     if(Student.length==0)
//     {myResult.innerHTML="Your name is not on the list."}
//      else if (Student.map(person=>person.score)>=50)
//      {myResult.innerHTML= Student.map(person=>person.name+" you pass with "+ person.score)}
//      else
//      {myResult.innerHTML=Student.map(person=>person.name+" you fail with "+ person.score) }
//     }
//     myButton.addEventListener("click", whoPassedExam)



//whoPassedExam?     N3


function whoPassedExam(){
let Do_Exist= _students.filter(s=>s.name === myInput.value)
Passed=_students.filter(s=>s.score>=60&&s.name == myInput.value)
let Check = Do_Exist.length!=0 ?(Passed.length !=0)?
    `You pass `:`you fail`:`You Don't exist`
    return myResult.innerHTML=Check
}
myButton.addEventListener("click", whoPassedExam)



// https://stackabuse.com/how-to-filter-an-object-by-key-in-javascript/
//https://codepen.io/mushmuroka/pen/BaYrPre


// var array = 
//         [-1, -4, 5, 6, 8, 9, -12, -5, 4, -1];
//     var new_array = 
//         array.filter(element => element > 5)

//         console.log(new_array)


 // filter  + arrow function 
        // var age = [5,3,10,18,26,65]

        // var old = age.filter(num1=>num1>=18)
        // console.log(old)

//test nest repository /rm --cached
        //test nest repository 
// go to location of the folder and delete  the hidden folder  .git
// then in vs code 
//  in the folder location open new terminal then 
//git rm --cached yourFolder
// then main folder new terminal git repository
// add . or git init   then push
// should be fixed 

// git submodule to see commands
//git submodules add linkToYourSHHRepository 
