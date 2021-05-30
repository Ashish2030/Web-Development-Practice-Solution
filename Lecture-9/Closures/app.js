
console.log("START")
function fun() {
    
    let x = 0;
  
    function innerFun() {
        x++;
        console.log(x);
    }

    x = 100;

    return innerFun;
}

let f = fun();
let f1 = fun();
f();
f();
f();

// f1();
// f1();
// f1();
console.log("END");

