window.addEventListener('load', function() {

    document.getElementsByTagName('label')[0].innerHTML = 'Sassy to grown-ups.' ;
    document.getElementsByTagName('label')[1].innerHTML = 'Excitable, impulsive.' ;
    document.getElementsByTagName('label')[2].innerHTML = 'Wants to run things.' ;
    document.getElementsByTagName('label')[3].innerHTML = 'Carries a chip on their shoulder.' ;
    document.getElementsByTagName('label')[4].innerHTML = 'Difficulty in learning.' ;
    document.getElementsByTagName('label')[5].innerHTML = 'Restless in the “squirmy” sense.' ;

    let button = document.getElementsByTagName('button');
    button[0].style.visibility = 'hidden';
    button[1].addEventListener('click', function(event) {
        event.preventDefault();
        let qOne = document.getElementById('one-one');
        let qTwo = document.getElementById('one-two');
        let qThree = document.getElementById('one-three');
        let qFour = document.getElementById('one-four');
        let qFive = document.getElementById('one-five');
        let qSix = document.getElementById('one-six');
        let questionOne = parseInt(document.getElementById('q1').value);
        let questionTwo = parseInt(document.getElementById('q2').value);
        let questionThree = parseInt(document.getElementById('q3').value);
        let questionFour = parseInt(document.getElementById('q4').value);
        let questionFive = parseInt(document.getElementById('q5').value);
        let questionSix = parseInt(document.getElementById('q6').value);
        let qOneScore = questionTwo + questionFive + questionSix;
        qOne.innerHTML = qOneScore;
        qTwo.innerHTML = questionOne + questionFour;
        qThree.innerHTML = questionFive;
        qFour.innerHTML = 0;
        qFive.innerHTML = questionTwo + questionThree + questionSix;
        qSix.innerHTML = 0;
        roundTwo();
    } )
})
   

function roundTwo() {
    document.getElementsByTagName('label')[0].innerHTML = 'Fearful (of new situations, new people or places).' ;
    document.getElementsByTagName('label')[1].innerHTML = 'Restless, always up and on the go.' ;
    document.getElementsByTagName('label')[2].innerHTML = 'Destructive.' ;
    document.getElementsByTagName('label')[3].innerHTML = 'Shy.' ;
    document.getElementsByTagName('label')[4].innerHTML = 'Denies mistakes, or blames others.' ;
    document.getElementsByTagName('label')[5].innerHTML = 'Quarrelsome.' ;

    let button = document.getElementsByTagName('button');
    button[0].style.visibility = 'visible';
    button[1].addEventListener('click', function(event) {
        event.preventDefault();
        let qOne = document.getElementById('two-one');
        let qTwo = document.getElementById('two-two');
        let qThree = document.getElementById('two-three');
        let qFour = document.getElementById('two-four');
        let qFive = document.getElementById('two-five');
        let qSix = document.getElementById('two-six');
        let questionOne = parseInt(document.getElementById('q1').value);
        let questionTwo = parseInt(document.getElementById('q2').value);
        let questionThree = parseInt(document.getElementById('q3').value);
        let questionFour = parseInt(document.getElementById('q4').value);
        let questionFive = parseInt(document.getElementById('q5').value);
        let questionSix = parseInt(document.getElementById('q6').value);
        qOne.innerHTML = questionTwo + questionFive;
        qTwo.innerHTML = questionThree + questionFive + questionSix;
        qThree.innerHTML = 0;
        qFour.innerHTML = 0;
        qFive.innerHTML = questionTwo;
        qSix.innerHTML = questionOne + questionFour;
        roundThree();
})
}

function roundThree() {
    document.getElementsByTagName('label')[0].innerHTML = 'Fails to finish things.' ;
    document.getElementsByTagName('label')[1].innerHTML = 'Bullies others.' ;
    document.getElementsByTagName('label')[2].innerHTML = 'Childish or immature (clings, needs constant reassurance).' ;
    document.getElementsByTagName('label')[3].innerHTML = 'Distractibility or attention span a problem' ;
    document.getElementsByTagName('label')[4].innerHTML = 'Headaches' ;
    document.getElementsByTagName('label')[5].innerHTML = 'Mood changes quickly and drastically.' ;

    let button = document.getElementsByTagName('button');
    button[0].style.visibility = 'visible';
    button[1].addEventListener('click', function(event) {
        event.preventDefault();
        let qOne = document.getElementById('three-one');
        let qTwo = document.getElementById('three-two');
        let qThree = document.getElementById('three-three');
        let qFour = document.getElementById('three-four');
        let qFive = document.getElementById('three-five');
        let qSix = document.getElementById('three-six');
        let questionOne = parseInt(document.getElementById('q1').value);
        let questionTwo = parseInt(document.getElementById('q2').value);
        let questionThree = parseInt(document.getElementById('q3').value);
        let questionFour = parseInt(document.getElementById('q4').value);
        let questionFive = parseInt(document.getElementById('q5').value);
        let questionSix = parseInt(document.getElementById('q6').value);
        qOne.innerHTML = questionOne + questionThree + questionFour + questionFive;
        qTwo.innerHTML = questionTwo;
        qThree.innerHTML = questionOne + questionFour;
        qFour.innerHTML = questionFive;
        qFive.innerHTML = 0;
        qSix.innerHTML = 0;
        roundFour();
})
}

function roundFour() {
    document.getElementsByTagName('label')[0].innerHTML = 'Fights constantly.' ;
    document.getElementsByTagName('label')[1].innerHTML = 'Easily frustrated in efforts.' ;
    document.getElementsByTagName('label')[2].innerHTML = 'Basically an unhappy child.' ;
    document.getElementsByTagName('label')[3].innerHTML = 'Stomach aches.' ;
    document.getElementsByTagName('label')[4].innerHTML = 'Other aches and pains.' ;
    document.getElementsByTagName('label')[5].innerHTML = 'Vomiting or nausea.' ;

    let button = document.getElementsByTagName('button');
    button[0].style.visibility = 'visible';
    button[1].addEventListener('click', function(event) {
        event.preventDefault();
        let qOne = document.getElementById('four-one');
        let qTwo = document.getElementById('four-two');
        let qThree = document.getElementById('four-three');
        let qFour = document.getElementById('four-four');
        let qFive = document.getElementById('four-five');
        let qSix = document.getElementById('four-six');
        let questionOne = parseInt(document.getElementById('q1').value);
        let questionTwo = parseInt(document.getElementById('q2').value);
        let questionThree = parseInt(document.getElementById('q3').value);
        let questionFour = parseInt(document.getElementById('q4').value);
        let questionFive = parseInt(document.getElementById('q5').value);
        let questionSix = parseInt(document.getElementById('q6').value);
        qOne.innerHTML = questionTwo;
        qTwo.innerHTML = questionOne + questionThree;
        qThree.innerHTML = questionTwo;
        qFour.innerHTML = questionFour + questionFive + questionSix;
        qFive.innerHTML = 0;
        qSix.innerHTML = 0;
})
}