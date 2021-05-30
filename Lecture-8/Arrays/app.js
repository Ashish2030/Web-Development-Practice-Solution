// Arrays
// let arr = [1, 2, 3, 4];
// console.log(arr);
// console.log(arr.length);

// Arrays are hetrogenous
let a = [1, 2, 'Sabeel', true, false, undefined, null, [3, 4, 5]];
// console.log(a);


// Array Methods

let fruits = ['Orange', 'Grapes', 'Mango', 'Papaya'];


// push -- adds the list of element at the end

fruits.push('Guava')
fruits.push('Strawberry', 'Banana', 'Litchi');
// console.log(fruits);


// pop -- removes the elements from the end

let popedFruit=fruits.pop();
// console.log(fruits);
// console.log(popedFruit);

// shift -- remove item from the front

let removedFromFront = fruits.shift();
// console.log(fruits);
// console.log(removedFromFront);

// unshift

fruits.unshift('BlackBerries', 'Amla');
// console.log(fruits);



// /////////////////////////////////More Methods//////////////////


// concat -- concat the two arrays
let arr1 = [1, 2, 3];
let arr2 = ['Guava', 'apple', 'mango'];

let arr3 = arr2.concat(arr1);

// console.log(arr3);

// includes -- return true/false if item is present inside the array

// let colors = ['blue', 'green', 'white', 'purple'];
// console.log(colors);

// if (colors.includes('red')) {
//     console.log('Present!!');
// }
// else {
//     console.log('Not present');
// }


/////////indexOf///////

// console.log(colors.indexOf('white'))
// console.log(colors.indexOf('brown'))

//reverse ---simple reverse the order of the array

// let x= [1, 2, 3, 4];
// console.log(x.reverse());
// console.log(x);


// ///////////////////////////////slice///////////////
// let colors = ['blue', 'green', 'white', 'purple'];

// let newColors = colors.slice();
// let newColors = colors.slice(1);
// let newColors = colors.slice(1,2);
// console.log(colors);
// console.log(newColors);


// ///////////////////////////splice////////////////////

let colors = ['blue', 'green', 'white', 'purple','red','orange'];

let newColors = colors.splice(1, 4,'teal','aqua','violet');
// colors.splice(3, 1);
// console.log(newColors);
// console.log(colors);


//-------------------------------- Split----------------------

let str = "This?is?a?String";
// let ans = str.split(" ");
let ans = str.split("?");
// console.log(ans[0]);


//--------------------------------Join-----------------------


// let arr = [1, 2, 3];
// let ans1 = arr.join('--')
// console.log(ans1);


// Nested Arrays

// let nestedArray = [[1, 2, 3, ["Sabeel", "Khan"]], 5, 6];
// console.log(nestedArray[0][3][0])



