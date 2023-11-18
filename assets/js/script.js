document.addEventListener("DOMContentLoaded", function() {
    document.getElementsByTagName('label')[0].innerHTML = 'test' ;
    document.getElementsByTagName('label')[1].innerHTML = 'test' ;
    document.getElementsByTagName('label')[2].innerHTML = 'test' ;
    document.getElementsByTagName('label')[3].innerHTML = 'test' ;
    document.getElementsByTagName('label')[4].innerHTML = 'test' ;
    document.getElementsByTagName('label')[5].innerHTML = 'test' ;
})

let button = document.getElementsByTagName('button');
button[1].addEventListener('click', function() {
    let questionOne = document.getElementById('q1').value;
    console.log(questionOne);
} )

