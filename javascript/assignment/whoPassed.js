

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
var myInput=document.getElementById("myInput")
var myButton=document.getElementById("myButton")
var myResult=document.getElementById("myResult")

//whoPassedExam?            N1      enter number and get name with score
// function whoPassedExam (PassedStudent){
//     var myInputNum = parseFloat(myInput.value) 
//  var PassedStudent=_students.filter(pass=>pass.score>=myInputNum)


//   console.log(PassedStudent)

//     myResult.innerHTML=PassedStudent.map(pass=>pass.name)
// }
//myButton.addEventListener("click",whoPassedExam)

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



//whoPassedExam?     N2.5
// function whoPassedExam (){
//     let InputName = myInput.value.toLowerCase()
//     let Student_N_S =_students.filter(person=>person.name==InputName).map(n=> parseFloat(n.score))
//     if(Student_N_S.length==0)
//     {myResult.innerHTML="Your name is not on the list."}
//      else if (Student_N_S>=50)
//      {myResult.innerHTML= " you pass with "+Student_N_S}
//      else
//      {myResult.innerHTML=" you fail with "+ Student_N_S}
//     }
//     myButton.addEventListener("click", whoPassedExam)

//whoPassedExam?     N3

// function whoPassedExam(){
// let Final= _students.filter(s=>s.name == myInput.value)?
//   (_students.filter(s=>s.score>=50))?
//     `You pass`
//     :`you fail`
//     :`You Don't exist`
//     console.log(Final)
//     return myResult.innerHTML=Final
    
 
// }
// myButton.addEventListener("click", whoPassedExam)

    //whoPassedExam?     N3.5


function whoPassedExam(){
    let Do_Exist= _students.filter(s=>s.name === myInput.value)
    Passed=_students.filter(s=>s.score>=60&& s.name == myInput.value)
    let Check = Do_Exist.length!=0 ?(Passed.length !=0)?
        `You pass` :`you fail`:`You Don't exist`
        return myResult.innerHTML=Check
    }
    myButton.addEventListener("click", whoPassedExam)


// n2 idea 

// function whoPassedExam (Student){
//     if(PassedStudent=_students.filter(person=>person.score>=50 && myInput.value == person.name)  
//     )
//    { myResult.innerHTML=PassedStudent.map(person=>person.name + " "+ person.score +" you pass with score") }
//    else  ( failStudent= _students.filter(person=>person.score<=50 || myInput.value != person.name))
//    {
//     return myResult.innerHTML= " your name is not in the list or you fail "
//    }
// }
// myButton.addEventListener("click", whoPassedExam)


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

        

