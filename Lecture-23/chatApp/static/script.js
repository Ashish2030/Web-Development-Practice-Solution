const socket = io();

setTimeout(() => {
    console.log(socket.id);
}, 500)


$('#chat').hide();

$('#send-btn').click(() => {
    socket.emit('send-msg', {
        msg:$('#inp').val()
    })
    $('#inp').val("");
})

socket.on('received-msg', (data) => {
    $('#list').append(`<li>${data.name} : ${data.msg}</li>`);
})

$('#login-btn').click(() => {
    socket.emit('login', {
        name:$('#login-inp').val()
    })

    $('#login').hide();
    $('#chat').show();

})