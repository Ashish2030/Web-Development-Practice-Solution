// Implicit binding----------------------------------------

const person = {
    name: "Sabeel",
    age: 21,
    favColor: "blue",
    say: function () {
        console.log(`My Fav Color is ${this.favColor}`);
    }
}


// Explicit Binding----------------------------------

function fun(name,age) {
    console.log(this);
    console.log(name);
    console.log(age)
}

const a = {
    l: 10,
    m: true,
    n:"Kartik"
}

// fun.call(a,"Kartik",25);

// let f = fun.bind(a);

// f("Sabeel", 21);


// Default binding-------------------------
function x(newName) {
    this.name = newName;
}

x("Prateek");