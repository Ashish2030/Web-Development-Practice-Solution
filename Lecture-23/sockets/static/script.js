const socket = io();
const btn = document.getElementById('btn');



setTimeout(() => {
    console.log("Connected Successfully");
    console.log(socket.id);
}, 1000)


socket.on('successfull', (data) => {
    console.log(data.msg);
})

btn.addEventListener('click', () => {
    socket.emit('btn-clicked');
})

socket.on('click-success', () => {
    console.log('Someone clicked the button');
})



