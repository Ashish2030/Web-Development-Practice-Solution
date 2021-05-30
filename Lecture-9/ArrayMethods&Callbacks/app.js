

// function fun(x) {
    
//     console.log(`Inside fun`)
//     let name = prompt("Enter your name");
//     // console.log(x);
//     x(name);

// }

// function add() {
//     console.log(`Inside add`);
// }

// fun(add);
// fun(function(name) { //callback as anonymous function
//     console.log(`Your Name is ${name}`)
// });


// Advanced Arrays Methods

let arr = [1, 2, 3, 4, 5];

// function square(num) {
//     return num * num *num;
// }

// let b = arr.map(function (num,idx) {
//     // console.log(idx);
//     return num * num;
// });
// // console.log(b);



// let arr1 = [1, 2, 3, 4, 5];


// function isEven(num) {
    
//     if (num % 2 === 0) {
//         return true;
//     }

//     return false;
// }

// let c = arr1.filter(isEven);
// console.log(c);


// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let b = a.map(function (num) {
    
//     return Math.sqrt(num);
// });

// console.log(b);


// Sort

let arr2 = [2, 1, 10, 11, 20, 13, 15, 9];

let res = arr2.sort(function (a,b) {
    return a - b;
});
console.log(res);


// reduce
let arr3 = [0, 2, 3, 4, 5];

let ans = arr3.reduce(function (acc, curr) {
    return acc * curr;
})

console.log(ans);