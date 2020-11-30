
// let apple = 15;
// console.log('apple before', apple);

// function f1(apple){
//     apple++;
//     console.log('f1 apple', apple);
//     return apple;
// }

// function f2(){
//     let newApple = apple+1;
//     console.log('f2 newApple', newApple);
// }

// let res = f1(apple);
// console.log(res);

// f2(apple);


// f1(apple);
// f2(apple);

// f1(apple);
// f2(apple);
// console.log('apple after', apple);


// let a = [2,55,13,1,53,1,31];
// let b = [8,95,4,64,2,1,3];

// console.log('a before', a);

// const double = (el, index, arr)=>{
//     // el = el*2;
//     arr[index] = el*2;
// };


// a.forEach(double);

// console.log('a after', a);


// console.log('b before', b);
// b.forEach(double);
// console.log('b after', b);


//higher order functions

//hoisting
//lexical environment
// function f1(a){
//     let b = a+10; //20

//     return function(c){
//                 let sum = b+c;
//                 return ()=>{
//                     return sum*2+b;
//                 };
//     };

// }

// let res = f1(10);

// let s = res(20);
// console.log('s', s);

// let res = f1(10)(20);

// console.log('res', res);


// let n = 6;
// let res = 1;

// for(let i = 1; i<=n; i++){
//     res = res*i;
// }

// console.log(res);


// function factorial(n){
//         if(n === 1 || n === 0){
//             return 1;
//         }

//       return  n * factorial(n-1);
// }

// let r = factorial(100);

// console.log('r', r);


// function sum(a, b){
//     return a+b;
// }

// function logger(x, y, cb){
//     console.log('x', x);
//     console.log('y', y);

// return cb(x, y);
// }
// let res = logger(10, 20, sum);
// console.log('res', res);

//decorator
// function logger(cb){
//     console.log('start');
// return cb;
// }

// let res = logger(sum);

// console.log('res', res(20, 13));

// function f(x, y){
//     return x+y;
// }


// function a(x){
// let z = 15;

//      function b(y){
//             return x+y+z;
//     }

// return b;

// }

// let s = a(10);

// console.log("s", s)


const arr = [2,3,1,54,5,63,8,6,4];

// arr.forEach((el, index, array)=>{
// console.log("el index array", el, index, array);
    
// });


function myForEach(fn){
    const array = this;
    for(let i=0; i<array.length; i++){
        fn(array[i], i, array);
    }
}

Array.prototype.myForEach = myForEach;

arr.myForEach((el, index, array)=>{
    console.log("el index array", el, index, array);
});