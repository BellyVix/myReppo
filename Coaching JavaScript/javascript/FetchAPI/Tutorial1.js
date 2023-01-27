// fetch api
// http request
//4 common request
// 1 get request  // inspect// network
// inspect //network / header
// http://testphp.vulnweb.com/
// post
// sending info
// delete
// patch or put
// https://insomnia.rest/download
// tool
// npm i json-server -g

//Get
//Post 
//Put
//Patch
//Delete


// creating Surver 

// making file  with  .json 
// with bash  in same folder 

                                                            // json-server data.json  // name of the  file.json


//  for starting 
// json-server data.json
                                                        // json-server data.json -p 5000  
// for custom port 
// ctr - c  - to stop the surver
// with arrow to restart it 

// insomnia get request  http://localhost:5000/api

//http://g.com/register
//form  url encoded


// in insomnia  
//http://localhost:5000/product/1
//  if you use /1 for id 
// if you use  / product  for 


// for delete  find exact  and change the request to delete 


// patch  and put are both for update 


//fetch('http://localhost:5000/api')
//.then(response=>console.log(response))

// console in brouwser  // cors is about security 
// fetch('http://localhost:5000/api')
// .then(response=>{
//     setTimeout(()=>{
//         console.log('hello')
//     },2000)
//     return response.json()
// })

// // promise chain method then()
// .then(data=>{

//     // iterate through the data
//     data.forEach(user=>{
//         console.log(user)
//     })
// })
// .catch(err=>console.log(err))

// fetch('http://localhost:5000/api')
// .then(res=>res.json())
// .then(data=>data)
// .then(data=>{
//     data.map(user=>{
//         user.username = user.username.toUpperCase() // 'atilla' = 'atilla'.toUpperCase()
//     })
//     return data
// })
// .then(data=>console.log(data))


// async function getUsers(){
//     let response = await fetch('http://localhost:5000/api')
//     return response.json()
// }

// getUsers()
// .then(data=>{
//     console.log(data)
// })

// select tbody element.
const TbodyResult = document.getElementById('result')

// fetching data from the server
// let getUsers = new Promise((resolve,reject)=>{
//     fetch('http://localhost:5000/api')
//     .then(res=>res.json())
//     .then(data=>{
//         resolve(data)
//     })
//     .catch(err=>reject(err))
// })

// get JSON data
// getUsers
// .then(data=>{
//     // iterate through the data
//     data.forEach(user=>{
//         // print the data in the table in html document.
//         TbodyResult.innerHTML += `<tr>
//         <td>${user.id}</td>
//         <td>${user.username}</td>
//         <td>${user.password}</td>
//     </tr>
//     ` 
//     })
// })


//              Taskkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk

// get all 
//extract specific property from users ( each )
// { id :1 , username: , password }
//  id username  id 
// 3 user push 


// https://jsonplaceholder.typicode.com/users
 

let getJsonUsers = new Promise((resolve,reject)=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>{
        resolve(data)
    })
    .catch(err=>reject(err))
})

// get JSON data
let  myPlaceholder = []
getJsonUsers
.then(data=>{
    // iterate through the data
    data.forEach(user=>{
       // console.log(user)
        
        const obj = {
            fullname:user.name,
            id:user.id,
            password:user.passwords,
        }

        console.log(obj)
        myPlaceholder.push(obj)

    //     //console.log(myPlaceholder)

    //     // print the data in the table in html document.
         TbodyResult.innerHTML += `<tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
    </tr>
    ` 
    })
    .then(data=> { 
        data.forEach()
    })
})
