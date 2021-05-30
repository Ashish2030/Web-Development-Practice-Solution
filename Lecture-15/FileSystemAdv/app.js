const fs = require('fs');
const path = require('path');


// console.log(__dirname);
// console.log(path.join('a/', '/b'));

const F1 = path.join(__dirname, 'input/inp1.txt');
const F2 = path.join(__dirname, 'input/inp2.txt');
const F3 = path.join(__dirname, 'output/output.txt');


let ans;

fs.readFile(F1, {
        encoding: 'utf-8',
        flag:'r'
    },
    (err, data) => {
        if (err) {
            throw err;
        }
        console.log("File 1 Read Successfully");
        
        ans = data.split('\n');

        // console.log(ans);

        fs.readFile(F2,
            {
                encoding: 'utf-8',
                flag:'r'
            },
            (err, data) => {
                if (err) {
                    throw err;
                }
                console.log("File 2 read successfully");
                let temp = data.split('\n');


                // Concatenation of two arrays from file1 and file2 respectively

                ans = ans.concat(temp);
                


                // sort ans array

                ans.sort((a, b) => {
                    return a - b;
                });
                
                ans = ans.join("\n");
                // console.log(ans);

                fs.writeFile(F3, ans,
                    {
                        encoding: 'utf-8',
                        flag:'w'
                    },
                    (err)=>{
                        if (err) {
                            throw err;
                        }
                        console.log("File 3 Written Successfullyy");
                    }
                    )


                // console.log(temp);
            })
        }
    )
    
