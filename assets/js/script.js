window.addEventListener('load', function() {

    document.getElementsByTagName('label')[0].innerHTML = 'Sassy to grown-ups.' ;
    document.getElementsByTagName('label')[1].innerHTML = 'Excitable, impulsive.' ;
    document.getElementsByTagName('label')[2].innerHTML = 'Wants to run things.' ;
    document.getElementsByTagName('label')[3].innerHTML = 'Carries a chip on his shoulder.' ;
    document.getElementsByTagName('label')[4].innerHTML = 'Difficulty in learning.' ;
    document.getElementsByTagName('label')[5].innerHTML = 'Restless in the “squirmy” sense.' ;

    let button = document.getElementsByTagName('button');
    button[0].style.visibility = 'hidden';
    button[1].addEventListener('click', function() {
        roundTwo();
        let conOne = document.getElementById('con-one');
        let questionOne = document.getElementById('q1').value;
        conOne.innerHTML = questionOne;
    
    } )
})
   

function roundTwo(event) {
    document.getElementsByTagName('label')[0].innerHTML = 'Fearful (of new situations, new people or places).' ;
    document.getElementsByTagName('label')[1].innerHTML = 'Restless, always up and on the go.' ;
    document.getElementsByTagName('label')[2].innerHTML = 'Destructive.' ;
    document.getElementsByTagName('label')[3].innerHTML = 'Shy.' ;
    document.getElementsByTagName('label')[4].innerHTML = 'Denies mistakes, or blames others.' ;
    document.getElementsByTagName('label')[5].innerHTML = '. Quarrelsome.' ;

}
