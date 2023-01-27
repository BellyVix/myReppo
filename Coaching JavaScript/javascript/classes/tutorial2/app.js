 // parent class -> person 
 //student       //teacher

class Person{
    constructor(name){
        this.name = name 
        this.age = age 
    }
}
class Student extends Person{
   
    constructor (name,age,role ){
        this.role = role 
        super(name,age,)
    }

}

        class Teacher extends Person{
    constructor (name,age,role){
    super(name,age)
    this.role= role 
    }

}


let student1 = new Student ( "john",20 ,"Student")
let teacher = new Teacher ( "john",20 ,"Teatcher")