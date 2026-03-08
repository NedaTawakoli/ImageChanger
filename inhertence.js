class Animal{
 name;
 age;
 weight;
 gender;
 constructor(name,age,gender){
    this.name = name;
    this.age = age; 
    this.gender = gender;
 }
 eat(){
    console.log(`${this.name} can eat`);
 }
 static sound(){
    console.log(`${this.name} can make sound`);
 }
}
class Human extends Animal{
    lastName;
    constructor(name,age,gender,lastName){
        super(Animal);
        this.name = name;
        this.age = age;
        this.gender = gender;
     
    }
    think(){
        console.log(`${this.name} can think`);
    }
}
const newHuman = new Human('Ahmad',20,"male",'Ahmadi');
newHuman.sound();
