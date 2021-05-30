
// let x = new Promise(function (resolve,reject) {
    
//     setTimeout(function () {
//         let randNum = Math.random();

//         console.log(randNum);
//         if (randNum < 0.5) {
//             resolve();
//         }
//         else {
//             reject(); 
//         }

//     }, 2000);
// });

// x.then(function () {
//     console.log(`Yayyyy Promised got resolved`);
// })
// .catch(function () {
//     console.log(`Oops Promise got rejected (: `);
// })



// ----------------------------------------------------
// downloadFile 

function downloadFile(url) {
    
    console.log(`Starting the download from ${url}`);
    return new Promise(function (resolve, reject) {

        if (!url.startsWith('http')) {
            throw new Error("This is an error");
        }


        setTimeout(function () {
            const path = url.split('/').pop();
            resolve(path);
        }, 3000);
    })
}


// compress file---------

function compressFile(path) {

    console.log(`Starting the file compression for ${path}`);
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const compressedPath = path.split('.')[0]+'.zip';
            resolve(compressedPath);
        },4000)
    }) 
}

// upload file-----------


function uploadFile(compressedPath) {
    
    console.log(`Starting the upload of a file ${compressedPath}`);

    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const uploadedPath=`http://localsystem/${compressedPath}`
             resolve(uploadedPath);
         }, 3000);
    })
}



// Good way of writing a asynchronous code 
downloadFile('http://facebook.com/image.jpg')
    .then(compressFile)
    .then(uploadFile)
    .then(function (uploadedPath) {
        console.log(`File uploaded Successfully at ${uploadedPath}`);
        console.log("Everything Done!!");
    })
    .catch(function (error) {
        console.log(`Something went wrong`)
        console.log(error.message)
    })




// downloadFile('http://facebook.com/image.jpg')
//     .then(function (path) {
//         console.log(`File dowloaded successfull as ${path}`);
//         compressFile(path).then(function (compressedPath) {
//             console.log(`File compressed as ${compressedPath}`)
//             uploadFile(compressedPath).then(function (uploadedPath) {
//                 console.log(`File uploaded successfully at ${uploadedPath}`);
//                 console.log("Everything done");
//             });
//         });
//     });







