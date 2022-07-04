// javascript class
// is not object is template

//function based
// function App (username){
//     this.username=username
// }


//class bassed
class App {
    constructor(username){
        this.username = username;
        this.users=[];
        this.test= function(){
            return " function constructor"
        }

    }
    getUsername(){
        return this.username

    }
    getUsers(){
        return this.users
    }
    addUser(){
        return this.users.push(this.username)
    }


    toString(){
        return this.getUsername() + " " + App.getCity()
    }
    static getCity(){
        return "Brussel"
    }
}
let app = new App ('John') // object
console.log(typeof app)
console.log(app.getUsername())
console.log(app.toString())
app.addUser()
console.log(app.getUsers())
//console.log(app.getCity()) // error for static we need class name 
// static is only for sensitive date 
console.log(App.getCity()) // work fine 
console.log(app.test()) // in constructor method can assign   function but must be assign to variable 

