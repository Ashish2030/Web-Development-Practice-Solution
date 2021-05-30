

// async function add(x, y) {

//     if (typeof x !== 'number' || typeof y !== 'number') {
//         throw "x and y is not a number";
//     }

//     return x + y;
// }

// add('sabeel', 6)
//     .then((val) => {
//         console.log("Resolved");
//         console.log(val);
//     })
//     .catch(err => {
//         console.log("Error");
//         console.log(err);
//     })


// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(fetchedData => {
       

//         return fetchedData.json();
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     })


async function fun() {
    
    console.log("Starting the fun function");

    const fetchedData=await fetch('https://api.cryptonator.com/api/ticker/btc-usd');

    console.log("Data Fetched using fetch");

    console.log("Parsing the body for complete data")
    const data = await fetchedData.json();

    console.log("Data Parsed completly")
    console.log(data);

    console.log("END OF FUN Function");
}

fun()
    .then(() => {
        console.log("Inside Resolve")
        console.log("ALL DONE SUCCESSFULLY")
    })
    .catch(err => {
        console.log("OH No Error");
        console.log(err);
    })

console.log("AFTER FUN FUNCTION")
console.log("AFTER FUN FUNCTION")
console.log("AFTER FUN FUNCTION")


for (let i = 1; i <= 5; i++){
    console.log(i);
}




