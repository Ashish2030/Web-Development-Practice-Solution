

const person = {
    firstName: 'Sabeel',
    age: 21,
    isAdult: true,
    favColor: ["Blue", "skyblue", "black"],
    marks:{
        science: 95,
        maths: 90,
        hindi:90
    }
}

// console.log(person);
// console.log(person.firstName);
// console.log(person.age);
// console.log(person.isAdult);

// console.log(person["firstName"]); //behind the scence all the keys get converted into string
// console.log(person["first" + "Name"]);

// console.log(person.marks.hindi)

// Objects are also refernce type


const obj = {
    name: 'kartik',
    a:10
}

console.log(obj);
obj.b = 30;
console.log(obj);
obj.lastName = 'Mathur';
console.log(obj);


delete obj.lastName;

console.log(obj);
