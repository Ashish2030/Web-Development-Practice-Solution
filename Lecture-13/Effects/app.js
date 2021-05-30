$('button').click(function () {
    console.log("Hello");
    $('div').fadeToggle(500, function () {
        console.log("Faded");
    });
})

$('h1').click(function () {
    $(this).fadeOut();
})