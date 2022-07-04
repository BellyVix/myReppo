let getBtn =document.getElementById('get')
let putBtn=document.getElementById('updateput')
let patchBtn= document.getElementById('updatepatch')
let postBtn =document.getElementById('post')
let delBtn = document.getElementById('del')

// get request
getBtn.addEventListener("click", (e)=>{
    console.log("hi")
    fetch('http://localhost:5000/api')
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
    })
    e.preventDefault()   //  prevent refresh the page 

})


// with put we have to write all update otherwise delete it 
// if we have username and password and we  update only username we gonna lose password 

// with patch we can update single one 

// put request 
putBtn.addEventListener('click', (e)=> {
    fetch('http://localhost:5000/api/12',{
        method:'PUT',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            "username":"Joe Dalton"
        })
    })
   .then(res=>res.json())
   .then(data=>{
    console.log( data)
   })
   e.preventDefault() 
})

patchBtn.addEventListener('click', (e)=> {
    fetch('http://localhost:5000/api/10',{
        method:'PATCH',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            "password":"root 2323"
        })
    })
   .then(res=>res.json())
   .then(data=>{
    console.log( data)
   })
   e.preventDefault() 
})

postBtn.addEventListener('click', (e)=> {
    fetch('http://localhost:5000/api',{
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            "username":"student748",
            "password":"rooot 11111111111"
        })
    })
   .then(res=>res.json())
   .then(data=>{
    console.log( data)
   })
    e.preventDefault()
})



delBtn.addEventListener('click', (e)=> {
    fetch('http://localhost:5000/api/14',{
        method:'DELETE'
    })
   .then(res=>res.json())
   .then(data=>{
    console.log( data)
   })
    e.preventDefault()
})
