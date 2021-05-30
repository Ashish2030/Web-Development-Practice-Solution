

function fun() {
    console.log(`Inside fun..`);
    function innerFun() {
        console.log(`Inside Inner Fun`)
    }
    return innerFun;
}

function add() {
    console.log(`Inside add`);
}

let f = fun();

f();