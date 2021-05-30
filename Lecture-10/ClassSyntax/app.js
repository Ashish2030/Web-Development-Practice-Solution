// Class Syntax (ES6)

// class Person{

//     constructor(name,age) {
//         this.name = name;
//         this.age = age;
//     }

//     // Getters and Setters

//     get currentName() {
//         return this.name;
//     }

//     get currAge() {
//         return this.age;
//     }

//     set setAge(age) {
//         if (age < 0) {
//             age = 0;
//         }
        
//         this.age = age;
//     }

//     getName() {
//         console.log(this.name);
//     }

// }

// const p1 = new Person("Kartik", 25);


class Car{

    constructor(name,price,color) {
        this.name = name;
        this.price = price;
        this.color = color;
    }

    get getCarName() {
        return this.name;
    }

    get getColor() {
        return this.color;
    }

    set setPrice(newPrice) {
        if (newPrice < 0) {
            newPrice = 0;
        }
        this.price = newPrice;
    }

}

// const c1 = new Car("BMW", 100000, "black");

class RacingCar extends Car{


    constructor(name, price, color, topSpeed, isDiscBrake) {
        super(name, price, color);
        this.topSpeed = topSpeed;
        this.isDiscBrake = isDiscBrake;
    }

    get getTopSpeed() {
        return this.topSpeed;
    }

    get getIsDiscBrake() {
        return this.isDiscBrake;
    }
}

const r1 = new RacingCar("Audi", 100000, "blue", 400, true);

