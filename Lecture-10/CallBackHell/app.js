
// download file---------

function downloadFile(url,downloaded) {
    
    console.log(`Starting the download from ${url}`);
    setTimeout(function () {
        const path = url.split('/').pop();
        downloaded(path);
    }, 3000);

}



// compress file---------

function compressFile(path,compressed) {

    console.log(`Starting the file compression for ${path}`);
    setTimeout(function () {
        const compressedPath = path.split('.')[0]+'.zip';
        compressed(compressedPath);
    },4000)
}


// upload file-----------


function uploadFile(compressedPath,uploaded) {
    
    console.log(`Starting the upload of a file ${compressedPath}`);

    setTimeout(function () {
       const uploadedPath=`http://localsystem/${compressedPath}`
        uploaded(uploadedPath);
    }, 3000);
}


// Bad of writing a asynchronous code

downloadFile('http://facebook.com/profile.jpg', function (path) {
    console.log(`File downloaded successfully as ${path}`);
    compressFile(path, function (compressedFile) {
        console.log(`File compressed as ${compressedFile}`)
        uploadFile(compressedFile, function (uploadedPath) {
            console.log(`File uploaded successfully at ${uploadedPath}`)
        });
    });
});