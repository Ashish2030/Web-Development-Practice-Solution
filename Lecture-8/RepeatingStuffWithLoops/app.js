// for loops-----------------
// for (let i = 1; i <= 10; i++){
//     console.log(i);
// }


// for (let i = 20; i > 10; i++){ //infinite loops
//     console.log(i);
// }


// for (let i = 0; i < 10; i++){
//     if (i == 5) {
//         console.log(i);
//         break;
//     }
//     console.log(i);
// }

// for (let i = 0; i < 10; i++){
//     if (i == 5) {
//         continue;
//     }
//     console.log(i);
// }

/////////////////////////////////
// for-of loops

// let colors = ["Blue", "Red", "Green", "Orange"];

// for (let color of colors) {
//     console.log(color);
// }


// /////////////////////for-in loops

let car = {
    name: 'BMW',
    price: 1000000,
    isDiscBrake: true,
    color:'Black'
}



for (let i in car) {
    console.log(`${i} is : ${car[i]}`);
}

