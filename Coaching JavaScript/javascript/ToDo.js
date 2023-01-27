// ToDo appication
class TodoApplication {
    constructor() {
        this.todos = [];
    }
    // add Todo
    addTodo(todo) {
        return this.todos.push(todo)
    }

    //get Todos // all todos
    getTodos() {
        return this.todos;
    }


    // getTodobyValue // singel todo
    getTodoByValue(todo) {
        let single_todo = this.todos.filter(val => val.toLowerCase().trim() == todo.toLowerCase().trim())
        console.log(single_todo)
      
    }
    // delete Todos
    deleteTodo() {

    }



    // deleteTodobyid
   
        deleteTodoByValue(todo){
            let index = this.todos.indexOf(todo);
            console.log(this.todos[index])
            this.todos.splice(index,1)
        }

 

    //toString - > dispay my todos 
    toString(){
        this.todos.forEach((todo,index)=>{
            console.log(`#${index} Task: ${todo}`)
        })
    }
}

// create a new todo application 
let app = new TodoApplication();
app.addTodo(" go to the store ")
app.addTodo(" finish school ")
app.addTodo(" learn Javascript")
console.log(app.getTodos())
//app.todoToString();
app.getTodoByValue("Finish my  homework")
app.deleteTodoByValue("finish my homework")
app.toString();
