// Constructor function

function Student(name, age) {
    this.name = name;
    this.age = age;
    // this.sayHello = function () {
    //     console.log(`Hello from ${this.name}`);
    // }
}


Student.prototype.sayHello = function () {
    console.log(`Hello from ${this.name}`);
}

let s1 = new Student("Kartik", 25);
let s2 = new Student("Vivek", 21);
let s3 = new Student("Garvit", 23);