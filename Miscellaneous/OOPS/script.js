//Factory Function
/*function PersonMaker(name,age){
    const person={
        name:"name",
        age:age,
        talk(){
            console.log(`Hi,Welcome ${name}`);
        }
    };
    return person;
}*/
//Drawbaks is that it was less efficient


// Constructor : Doesn't return anything 

function Person(name,age){
    this.name=name;
    this.age=age;
}

Person.prototype.talk=function(){
    console.log(`Hi,My name is ${this.name}`);
}

let p1=new Person("Akash Verma",21);
let p2=new Person("Arun",23);


// Class Method

class Personn{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log(`Hi,I Am ${this.name}`);
    }
}

let p3=new Personn("Akash",21);
let p4=new Personn("Verma",22);



// Inheritance 


class School{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log(`Hi,I am ${this.name}`)
    }
}

class Student extends School{
    constructor(name,age,marks){
        super(name,age);
        this.marks=marks;
    }
}

class Teacher extends School{
    constructor(name,age,subject){
        super(name,age);
        this.subject=subject;
    }
}


class Mammal{
    constructor(name){
        this.type="warm-Blooded";
        this.name=name;
    }
    eat(){
        console.log("I am eating");
    }
}

class Dog extends Mammal{
    constructor(name){
        super(name);
    }
    bark(){
        console.log("Wofff...")
    }

}

class Cat extends Mammal{
    constructor(name){
        super(name);
    }
    meow(){
        console.log("Meow.....");
    }
    eat(){
        console.log("Meow,I am Eating");
    }
    
}