// class Human{
//  name;
//  age;
//  gender;
//  constructor(name,age,gender){
//     this.name = name;
//     this.age = age; 
//     this.gender = gender;
//  }
//  eat(){
//     console.log(`${this.name} can eat`);
//  }
//  static sound(){
//     console.log(`${this.name} can make sound`);
//  }
//   think(){
//         console.log(`${this.name} can think`);
//     }
// }
// class Animal extends Human{
//     constructor(name,age,gender){
//         super(Human);
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
     
//     }
   
// }
// const newHuman = new Human('Sadaf',20,"Female",'Qurbani');
// newHuman.sound();

// Abstraction
 
class Human{
    name;
    lastName;
    age;
    constructor(name,lastName,age){
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }
    getAge(){
        console.log(`${(this.name).toUpperCase()} is ${this.age} years old`);
    }
    talk(){
        console.log(`${this.name} can talk`);
    }
}
const person = new Human("Sadaf","Qurbani",18);
person.getAge();

class Weather{
    constructor(degree){
        this.degree = degree;
    }
    celciusTofaranhite(){
        const convert = this.degree * 9/5 +35;
        return convert;
    }
}
const weather = new Weather(35);
console.log(weather.celciusTofaranhite());
// Polymorphis
class Animal{
    name;
    age;
    gender;
    constructor(name,age,gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    Move(){
        console.log(`${this.name} can move`);
    }
}
class Fox extends Animal{
 constructor(name,age,gender){
    super(Animal);
    this.name = name;
    this.age = age;
    this.gender = gender;
 }
 Move(){
    console.log(`${this.name} can walk with four legs`);
 }
}
class Bird extends Animal{
 constructor(name,age,gender){
    super(Animal);
    this.name = name;
    this.age = age;
    this.gender = gender;
 }
 Move(){
    console.log(`${this} can move with wings`);
 }
}
class Person extends Animal{
    email;
    constructor(name,age,gender,email){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.email= email;
    }
    Move(){
        console.log(`${this.name} can walk with two legs`);
    }
}