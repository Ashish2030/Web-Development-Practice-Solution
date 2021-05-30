const fs = require('fs');

// fs.writeFile('abc.txt',
//     "Hello From File System",
//     {
//         encoding: 'utf-8',
//         flag:'w'
//     },
//     (err) => {
//         if (err) {
//             throw err;
//         }
//         console.log("File Written Successfully");
//         }
// )


fs.readFile('abc.txt',
    {
        encoding: 'utf-8',
        flag:'r'
    },(err, data) => {
    if (err) {
        throw err;
    }
    console.log(data);
})