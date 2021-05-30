
// File system using promises

const fs = require('fs');
const path = require('path');


const F1 = path.join(__dirname, 'input/inp1.txt');
const F2 = path.join(__dirname, 'input/inp2.txt');
const F3 = path.join(__dirname, 'output/output.txt');


function readF1() {
    
    return new Promise(function (resolve, reject) {
        
        fs.readFile(F1, (err, data) => {
            if (err) throw err;
            resolve(data.toString().split('\n'));
        })
        
    })
}

function readF2() {
    

    return new Promise(function (resolve, reject) {
        fs.readFile(F2, (err, data)=>{
            if (err) throw err;
            resolve(data.toString().split('\n'));
        })  
    })
}

function writeF3(ans) {
    

    return new Promise(function (resolve, reject) {

        fs.writeFile(F3, ans, {
            encoding: 'utf-8',
            flag:'w'
        }, (err) => {
            if (err) throw err;
            resolve();
        });
        
    })
}





let ans;

// readF1()
//     .then((data) => {
//         console.log("File 1 Read Successfully")
//         ans = data;
//         readF2()
//             .then((data) => {
//                 console.log("File 2 Read Successfully")
//                 ans = ans.concat(data);
//                 ans.sort((a,b) => {
//                     return a - b;
//                 })
//                 // console.log(ans);

//                 ans=ans.join('\n');

//                 writeF3(ans)
//                     .then(function () {
//                         console.log("File 3 Written Successfully");
//                 })
//         })
//     })


readF1()
    .then((data) => {
        ans = data;
        return readF2();
    })
    .then((data) => {
        ans = ans.concat(data);
        ans.sort((a,b)=> a-b)
        ans = ans.join('\n');
        
        return writeF3(ans);
    })
    .then(() => {
        console.log("All Done Successfully");
    })
    .catch((e) => {
        console.log(e.message);
        console.log("Oh No Error");
    })