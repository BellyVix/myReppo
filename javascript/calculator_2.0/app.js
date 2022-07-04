// class Calc{
//     constructor ( number1 , number2){
//         this.result=0 // result of the math
//         this.number1=number1
//         this.number2 = number2
//     }


// add(){
//     return this.result = this.number1 + this.number2
// }
// substract(){
//     return this.result = this.number1 - this.number2
// }
// multiply(){
//     return this.result = this.number1 * this.number2

// }
// divide(){
//     return this.result = this.number1 * this.number2

// }
// toString(){
//     console.log(`result is ${this.result}`)
// }

// }
// let app = new Calc ( 10,5)
// // math operations
// app.add() // sum result
// app.substract()     // substraction
// app.multiply()      // multiplication
// app.divide()        // division
// app.toString() 

class Calc{
    constructor(number1, number2, operator) {
        this.result=0 // result of the math
        this.number1=number1
        this.number2 = number2
        this.operator = operator

    }
    GetResult(operator){
        
        this.operator = operator;
        switch(operator){
            case '+':
                this.result = this.number1 + this.number2;
                break;
            case '-':
                this.result = this.number1 - this.number2;
                break;
            case '*':
                this.result = this.number1 * this.number2;
                break;
            case '/':
                this.result = this.number1 / this.number2;
                break;
            default:
                console.log('Invalid operator')
            }
        
        toString()
            console.log(`${this.number1} ${this.operator} ${this.number2}= ${this.result} `)
            // 10+5 =15
        }
    }



// let app = new Calc (20,10,'+')
// app.GetResult()
// app.GetResult()
// app.toString()

// let app2 = new Calc (24,5,'/')
// app2.GetResult()
// app2.toString()

// let app3 = new Calc (24,5,'/')
// app3.GetResult()
// app3.toString()

let app = new Calc( 20,5)
app.GetResult('/')
app.GetResult('-')
app.GetResult('+')
app.toString()