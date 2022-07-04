// const posts = [ {
//     id:1,
//     title:" call of duty",
//     body:' first post body '
// },
// {
//     id:2,
//     title:" call of duty",
//     body:' first post body '
// }]
// // get Post 
// function getLastGame(){
//     console.log(posts)
// }
// // function createPost(post){
// //   setTimeout(()=>{
// //     posts.push(post)

// //   }, 3000)
// // }


// createPost({
//     id:3,
//     title: "Counter Strike"
// })
// // getLastGame()

// // function createPost(post,callback){
// //     setTimeout(()=>{
// //       posts.push(post)
// //         callback()
// //     }, 3000)
// //   }


// function kepeer1(string,callback){
//     callback(string)

// }

//  function kepeer2(string,callback){
//     let newString = string.toUppercase()
//     callback(newString)
// }

// function kepeer3(string,callback){
//     let newString = string.toUppercase()
//     callback(newString)
// }




// const posts = [{
//     id: 1,
//     title: 'Call of Duty',
//     body: 'First post body'
// }, {
//     id: 2,
//     title: 'Valorant',
//     body: 'Second post body'
// }]

// // get Posts
// function getLastGames(){
//     console.log(posts)
// }

// function createPost(post){
//     setTimeout(()=>{
//         posts.push(post)
//     },3000)
// }

// function createPost(post,callback){
//     setTimeout(()=>{
//         posts.push(post)
//         callback()
//     },3000)
// }


// createPost({
//     id: 3,
//     title:"Counter Strike offensive"
// },getLastGames)


// getLastGames()

// function Keeper1(string,callback){
//     callback(string)
// }

// function Keeper2(string,callback){
//     let newString = string.toUpperCase();
//     callback(newString)
// }

// function Keeper3(string,callback){
//     let arr = string.split("");
//     callback(arr)
// }

// function Keeper4(arr,index,callback){
//     let getLetter = arr[index]
//     callback(getLetter)
// }

// function PrintIt(letter){
//     console.log(letter)
// }

// Keeper1("Hello Friend",(string)=>{
//     Keeper2(string,(string)=>{
//         Keeper3(string,(arr)=>{
//             Keeper4(arr,2,(letter)=>{
//                 PrintIt(letter)
//             })
//         })
//     })
// })


async function Keeper1(string){
    return await string
}

function Keeper2(string){
    let newString = string.toUpperCase();
    return newString
}

function Keeper3(string){
    let arr = string.split("");
    return arr
}

function Keeper4(arr,index){
    let getLetter = arr[index]
    return getLetter
}

function PrintIt(letter){
    console.log(letter)
}

Keeper1('Hello Friend')
.then(Keeper2)
.then(Keeper3)
.then(response=>Keeper4(response,2))
.then(PrintIt)
.catch(err=>console.log(err))
console.log(Keeper1('hello friend'))

let promisMe = new Promise((resolve,reject)=> {
    setTimeout(()=>{
        resolve('hello i promise  i will back in 3 second')
    },3000)
})

let promisMe2 = new Promise((resolve,reject)=>{
    resolve(' hello fr ')
})

let getPromiseResult= Promise.all([promisMe,promisMe2])

getPromiseResult
.then(response=>{
    console.log(response)
})

console.log(promisMe)
promisMe
.then (answer=>{
    console.log(answer)
})


