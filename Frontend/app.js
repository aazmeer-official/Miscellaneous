// function personMaker(name,age){
//     const person = {
//         name : name,
//         age:age,
//         talk(){
//             console.log(`The name of person is ${this.name}`)
//         }
//     };
//     return person;
// }

// Constructor
// function Person(name,age){
//     this.name = name;
//     this.age = age
// }

// Person.prototype.talk = function(){
//     console.log(`Hi my name is ${this.name}`)
// }

// let p1 = new Person("adam",25);

// let p2 = new Person("Aazmeer",25);

// class Person {
//     constructor(name,age){
//         this.name = name,
//         this.age = age
//     }
//     talk(){
//         console.log(`Hi this is ${this.name} here`)
//     }
// }

// let p1 = new Person("adam",25);
// let p2 = new Person("Aazmeer",25);


class Person {
    constructor(name,age){
        this.name = name,
        this.age = age
    }
    talk(){
        console.log(`Hi this is ${this.name} here`)
    }
}



class Student extends Person{
    constructor(name,age,marks){
        super(name,age) // Parent Class constructor is being called 
        this.marks= marks
    }
}

let stud1 = new Student("Aazmeer",19,1111)
 
class Student{
    constructor(name,age,subject){
        this.name= name;
        this.age = age;
        this.subject= subject
    }
    talk() {
        console.log(`Hi, I am ${this.name}`)
    }
}

let tch1 = new Student("Aysha",19,"english")