
const h2 = `<h2>This is a h2 </h2>`;
const image=`<img  src='https://images.unsplash.com/photo-1615473192518-cfa9e27e7a39?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'>`

$('h1').after(h2);
$('p').before(image);

$('button').click(function () {
    $('div').slideToggle();
})