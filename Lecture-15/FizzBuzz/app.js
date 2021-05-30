
function fizzBuzz() {
    
    for (let i = 1; i <= 15; i++){
        
        let str = "";

        if (i % 3 === 0) {
            str += 'fizz';
        }
        if (i % 5 === 0) {
            str += 'buzz';
        }
        if (str == "") {
            str += i;
        }
        
        console.log(str);
    }
}

fizzBuzz();