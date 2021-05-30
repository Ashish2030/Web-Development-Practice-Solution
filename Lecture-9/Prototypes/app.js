
let person = {
    name: "Kartik",
    age: 25,
    isAdult: true,
    sayHello: function () {
        console.log(`Hello from ${this.name}`);
    }
}


let p1 = Object.create(person);
let p2 = Object.create(p1);