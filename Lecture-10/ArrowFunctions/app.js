
// function using function keyword
// function add(a,b) {
//     console.log("Sum is ", a + b);
// }


// // Function expression
// let a = function() {
//     console.log("Inside Fun..");
// }

// a()
// add(2, 3);


// Arrow functions

// let add = (a, b) => {
//     console.log("Inside Arrow Function")
//     console.log(a + b);
// }

// let squareRoot = (num) => {
//     return Math.sqrt(num);
// }
// let squareRoot = num => {
//     return Math.sqrt(num);
// }


// Arrow Functions Implicit return
let squareRoot = num => Math.sqrt(num)


// const car= {
//     name: "Audi",
//     color: "Black",
//     price: 200000,
//     getName: function () {
//         console.log(this);
//         console.log(this.name);
//     }
// }

const car= {
    name: "Audi",
    color: "Black",
    price: 200000,
    getName: ()=> { //u should never use this inside arrow function since now it points to global object i.e window
        console.log(this);
        console.log(this.name);
    }
}



car.getName()




