// delete task 
// add task 
// show classes

// create 
function TodoApplication(){
    this.Car =[]
    // this.CookDish =[]
    // this.cleanRoom=[]
}

// function for new  add 
TodoApplication.prototype.addTodo=function(todo){
    this.Car.push(todo)
    // this.CookDish.push(todo)
    // this.cleanRoom.push(todo)
}

// function   for showing 
TodoApplication.prototype.showTasks = function(){
    console.log(this.Car)
    // console.log(this.CookDish)
    // console.log(this.cleanRoom)
}
//function for deleting 

TodoApplication.prototype.deleteTodo = function(value){
    let temp = []
    this.Car.forEach(todo=>{
        temp.push(todo.toLowerCase())
    })
    // let index = this.todos.indexOf(value)
    let index = temp.indexOf(value.toLowerCase())
    console.log("Wash car  found: ", index, temp[index])
    temp.splice(index,1)
   // console.log(temp)
    this.Car = [...temp]
    // if(index > -1){
    //     console.log("Todo found: ", index, this.todos[index])
    //     this.todos.splice(index,1)
    // }
}

let app = new TodoApplication()

app.addTodo('mercedes')
// app.showTasks()
app.addTodo('bmw')
// app.showTasks()
app.addTodo('audi')
app.deleteTodo('audi')
//app.deleteTodo('learn node')
app.showTasks();
//delete task   index of  positif find it negativ not existend 

// the net Ninja https://www.youtube.com/c/TheNetNinja
// code camp 
// sololearn  https://www.sololearn.com/home
// freecodecamp  

// adding property  Today.shoppig="eggs"
//Adding a new method to an existing object is easy:
                // Today.CookDish=function (){ return this }
                // new  object 
//let Today = new ToDo(" myLada","Musaka","Myroom" )