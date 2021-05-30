$(() => {
    
    function refreshTodo() {
    
        $('#list').empty();
        // Sending AJAX GET Request
        $.get('/todo', (data) => {
            for (let todo of data) {
                $('#list').append(`<li>${todo}</li>`);
            }
        });
    
    }
    
    refreshTodo();
    
    
    $('#btn').click(() => {
        
        const todo=$('#inp').val()
       
        $.post('/todo', { todo }, (data) => {
            console.log("Done");
            refreshTodo();
        });

        $('#inp').val("");
    })

})

