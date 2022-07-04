var Student = {
    name: " John Dalton",
    age:30,
    edication: "Software Developer",
    project: ["a","b","c","d"],
    score:[22,10,30.56],
    print:function(){
        console.log("print function")
        console.log( this.name)
        console.log( this) // local scope 
        
    }
//     print:()=>{ // this don't function wit arrow function 
//         console.log(this.name)
//         console.log ("arrow function ")
//     
}
// console.log("global scope", this)

// ThisExample()
// // student.print()


// const name="Joe"; // global scope

// function LocalScopeFunction(){
//     const name = "Dalton"
//     console.log(name)
// }
// LocalScopeFunction()
// console.log(name)

const student={
    name:"Joe Dalton",
    age:25,
    education:"Software Developer",
    projects:['a','b','c','d'],
    print: ()=>{ // arrow function
        console.log(this.name)
        console.log("arrow function")
    }
}

//student.print()
const Tools= {
    bmicalc: function(weight,height){
        let bmi = weight/(height*height)
        console.log (`Bmi result is ${bmi}`)
    },
    NettoSalary: function(salary,tax){
    let netsalary = salary-(salary*tax)/100
    console.log(`Net Salary is ${netsalary}`)
}
    
}

Tools.bmicalc(75,175)
Tools.NettoSalary(1000,21)
const pc = {
    monitor:"Asus",
    keybord:"Logitech",
    mouse:"Razor",
    cpu:"intel",
    gpu:"Nvidia gtx 1060",
    power:false,
    turnon:function(){
        this.power=true,
        console.log ("pc is power on ")
        console.log (`monitor ${pc.monitor}
        keybord:${pc.keybord}
        mouse:${pc.mouse}
        cpu:${pc.cpu}
        gpu:${pc.gpu}`)
    
    },
turnoff:function(){
    pc.power=!pc.power
    console.log("pc is off")
},
status: function (){
    const computerStatus = pc.power?  " pc on " : "pc off"
    console.log (computerStatus)
},
switcher:function(){
    pc.power=!pc.power;
    console.log("switching status")
}

}
pc.turnon()
pc.turnoff()
pc.status()
pc.switcher()

pc.turnoff()
pc.turnon()
pc.status() 

function num1 () {
 console.log (1)
 return 1
}

function num2 () {
    console.log (2)
    return 5 //provide the value
}
console.log ( num1() + num2())