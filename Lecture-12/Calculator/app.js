const buttons = document.querySelectorAll('button');
const screen = document.getElementById('inp');



for (let button of buttons) {
    
    button.addEventListener('click', function (e) {
        
        let buttonText = e.target.innerText;

        if (buttonText == 'x') {
            screen.value += '*';
        }
        else if (buttonText == 'C') {
            screen.value = "";
        }
        else if (buttonText == '=') {

            try {
                screen.value=eval(screen.value);   
            }
            catch (e) {
                screen.value = "Invalid Operation.";
                console.log(e.message);
            }

        }
        else {
            screen.value += buttonText;
        }

    });

}
