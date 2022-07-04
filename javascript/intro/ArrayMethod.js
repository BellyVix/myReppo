// array method 
var result;
var myArr=[]
var myNumber = [5,2,3,5,11,7,1]
var MyLetters = [ "k", "a", "c", "f", "d", "x" , "y"]
// push method 
myArr.push(1)
myArr.push("a")
myArr.push(true)
myArr.push(null)
myArr.push({name:"john"})
result = myArr
console.log(result)

//pop method  remove the last element from array 
myArr.pop()

// shift method first added element is removed
myArr.shift()

//join method  join the array
result = myArr.join("-")

//sort method 

result = MyLetters.sort() //alphabetical order
result=myNumber.sort(function(a,b){return a-b})   // or b-a so sort in reverse  function needed for numbers



// number order  concat is for merge 2 string or array 
result=myNumber.concat(MyLetters)




//iteration method { for , forEach, map, filter, reduce, every , some }

//for just a loop throw all index 

        // for(var i=0 ; i<result.length ; i++){
        // console.log(result[i])
        // }



//forEach         give you value index and the rest of the array 


//let emptyArray = [4, 6, 'Alex', 'intel', 'koc']
//     function NewForLoop(value,index,arrayItself){
//     console.log(value,index,arrayItself)
// }
//     result.forEach(NewForLoop)

//for 


// for(let i=0; i<emptyArray.length;i++){
//     console.log(emptyArray[i],emptyArray.length)
// }

// normal function for total calc


  var total=0

//      for(let i=0;i<myNumber.length;i++){
//     //console.log(myNumber[i])
//     total+=myNumber[i]
//    // console.log(total)  // if it's inside will show every loop
// }
//   //  console.log(total) when is outside will show only result 



// arrow function with each  // n stand for index 

    //  var total = 0 


    //  myNumber.forEach((n)=>total+=n)
    //  result = `total is  ${total}`

    // result.map(NewForLoop)
    // console.log(result)
    
// filter method 





function FilterCallBack(value) {
  return value >= 30
}

let post = [{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
},
{
  "userId": 1,
  "id": 2,
  "title": "qui est esse",
  "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
},
{
  "userId": 1,
  "id": 3,
  "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
  "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
},
{
  "userId": 1,
  "id": 4,
  "title": "eum et est occaecati",
  "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
},
{
  "userId": 1,
  "id": 5,
  "title": "nesciunt quas odio",
  "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
}]
        result = myNumber.filter(value => value >= 30)
        // result = posts.filter(value=>{
        //    return value.id === 5
        // })
//        console.log (result)
        // result  = post.filter(value=>{
        //         return value.id ===4
        // })

        function FindPostById(id){
          return posts.filter(value=>value.id===id)
      }
      
      result = FindPostById(5)
      
      console.log(result)


