

// function hello() {
//     console.log("Hello!!!!");
// }

// function delay(n) {

//     for (let i = 1; i <= n; i++){
//         let x = new Date().getTime();
//         while (new Date().getTime() < 1000 + x) { }
//     }
//     hello();
    
// }

// delay(5);



/////////////////////////////////////////////////
// setTimout 
// console.log("START")

// setTimeout(function cb() {
//     console.log("CallBack!!");
// }, 5000);

// console.log("END");


////////////////////////////////////////////////
// setInterval

let id=setInterval( ()=> {
    console.log("Set Interval Called");
}, 1000);

setTimeout(()=> {
    console.log("Set Timeout Called")
    clearInterval(id);
},5000)