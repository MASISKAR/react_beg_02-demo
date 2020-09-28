//template literal
// let name = 'John \n Doe';

// let name = "John", surname = 'Smith', age = 23;

// let message = 'Hello, I am '+name+' '+surname+' and I am '+age;

// let message = `Hello, I am ${name} ${surname} and I am ${age}`;

// console.log(message);

//array destructuring

// let arr = [5,6,8];

// let a = arr[0],
// b = arr[1],
// c = arr[2];

// let [a, b, c, d] = arr;


// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);


//object destructuring

// let user = {
//     name: 'Adam',
//     surname: 'Smith',
//     age: 48
// }

// let name = user.name,
// surname = user.surname,
// age = user.age;


// let {name, surname, age, address} = user;

// let {name} = user.name;
// let name = user.name;

// console.log('name', name);
// console.log('surname', surname);
// console.log('age', age);
// console.log('address', address);

// let dimentions = {
//     width: 150,
//     length: 200,
//     type: 'polygon'
// };

// //named parameters
// function getArea({width, length}, unit){
//     // let {width, length} = obj;

//     return width*length + ' sq '+unit+'s';
// }

// console.log(getArea(dimentions, 'meter'));


// rest/spread

// function sum(...numbers){
//     console.log(numbers);
// let sum = 0;
// for(let num of numbers){
//     sum+=num;
// }

// return sum;
// }


const sum = (...numbers)=> numbers.reduce((sum, num)=>sum+num);
console.log(sum(2,5,6,45,5,3,8,6,63,7));

let a = [1,2,354], b = [847,564,4];

// let c = a.concat(b);
// let c = [...a,4,5,6, ...b];
// let d = [...'thgsdfgdfsgsdfgdsf'];
// let d = 'thgsdfgdfsgsdfgdsf'.split('');
// console.log(d);

// let f = a.slice();
// let f = [].concat(a, [4,5,6]);
// let f = [...a];
// let f = Array.from(a);

//don't use
// let f = a.map(el => el);

// console.log(f === a);


let user = {
    name: 'Adam',
    surname: 'Smith',
    age: 48
};

let person = {
    work: ()=> 'working',
    name: 'John'
};

// let newUser = Object.assign({}, user, person, {a: 5});
// let newUser = {
//     ...person,
//     name: 'Sarah',
//     ...user,
// };

// console.log('newUser', newUser);

// let b = Object.assign({}, user);
// let b = {...user};

// console.log({
//     ...a
// });

let obj1 = {
    d:54,
    f:84,
    c: {
        value: 64
    }
};


console.log(JSON.parse(JSON.stringify(obj1)));

let obj2 = {
    ...obj1,
    c: {
        ...obj1.c
    }
};

console.log(obj1);

obj2.d = true;
obj2.c.value = null;
console.log(obj2);


// <button class ="clicker" onclick="handleClick()">Click</button>

// function handleClick(){

// }

// let button = document.querySelector('.clicker');

// button.onclick = handleClick;

// button.addEventListener('click', handleClick);
