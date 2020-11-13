
class Animal {
    constructor(species, name){
        this.name = name;
        this.species = species;
    }
   static eat(){
        return 'eating...';
    };
    run = () => 'running...';
    sleep = () => 'sleeping...';
}

Animal.test = true;

const dog = new Animal('dog', 'Doggy');


console.log(Animal.test);


// class Cat extends Animal{
//     constructor(name, color){
//         super('cat', name);
//         this.color = color;
//     }
//     // species = 'cat';
// }

// class Dog extends Animal{
//     constructor(name, age){
//         super('dog', name);
//         this.age = age; 
//     }
//     // species = 'dog';
// }

// let cat = new Cat('Kitty', 'white');
// let dog = new Dog('Doggy', 2);


// console.log(cat);
// console.log(dog);












/* const User = class {

}


console.log(typeof Animal);

hello();

console.log('a', a);

var a = 45;

console.log('a', a);


function hello(){
    console.log('hello');
}

const getName = ()=> 'John Smith';

getAge();

var getAge = function(){
    return 42;
};
 */