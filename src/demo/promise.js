// let a = -10;

// let p = new Promise((resolve, reject)=>{
//     if(a>0){
//         let result = Math.sqrt(a);
//         resolve(result);
//     }
//     else {
//         reject('Input only positive numbers!');
//     }
// });

// console.log(p);

// p.then((res)=>{
//     console.log('res', res);
//     return 12;
// })
// .then((res)=>{
//     console.log('res', res);
// })
// .then((res)=>{
//     console.log('res', res);
// })
// .catch((error)=>{
// console.log('error', error);
// });


/* function sqrt(num, callback){
 setTimeout(()=>{
    if(typeof num !== 'number'){
        throw new Error('Input only numbers');
    }

    if(num < 0){
        throw new Error('Input only positive numbers');
    }
    let sqr = Math.sqrt(num);
    callback(sqr);

 }, 1000);
}

// [].forEach((el)=>{

// });

function sum(a, b, callback){
    setTimeout(()=>{
       
        callback(a+b);
   
    }, 2000);
   }

console.log('start');

console.log('sum tart');
sum(20, 30, (result)=>{
    console.log('sum callback', result);

    console.log('sqrt start');
    sqrt(result, ()=>{
    console.log('sqrt callback');
        
    });
}); */

//calback hell

// sqrt(100, (res)=>{
//     let s = res/2;

//     sum(s, 50, (summary)=>{
//         console.log('summary', summary);
//     });

// });




//with promise

function sqrt(num) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (typeof num !== 'number') {
                rej('Input only numbers');
            }

            if (num < 0) {
                rej('Input only positive numbers');
            }
            let sqr = Math.sqrt(num);
            res(sqr);

        }, 1000);
    });

}



function sum(a, b) {
    return new Promise((res, rej) => {
        setTimeout(() => {

            res(a + b);

        }, 2000);
    });
}



sqrt(100)
    .then((res) => {
        console.log('sqrt', res);
        sum(res, 20)
            .then((res) => {
                console.log('sum', res);
            });
    });

    sqrt(100)
    .then((res) => {
        console.log('sqrt', res);
       return sum(res, 20);
            
    })
    .then((res) => {
        console.log('sum', res);
    });

    

// sum(10, 20)
//     .then((res) => {
//         console.log('sum', res);
//         sqrt(res)
//             .then((res) => {
//                 console.log('sqrt', res);


//             });
//  });







        console.log('end');













// console.log('start');
// try{
// console.log(sqrt(-100));

// }
// catch(error){
//     console.log('error', error);
// }

// console.log('end');