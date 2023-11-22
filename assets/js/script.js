

let quiz = document.getElementById('quiz');

let questions = ['Sassy to grown-ups.',
    'Excitable, impulsive.',
    'Wants to run things.',
    'Carries a chip on their shoulder.',
    'Difficulty in learning.',
    'Restless in the “squirmy” sense.',
    'Fearful (of new situations, new people or places).',
    'Restless, always up and on the go.',
    'Destructive.',
    'Shy.',
    'Denies mistakes, or blames others.',
    'Quarrelsome.',
    'Fails to finish things.',
    'Bullies others.',
    'Childish or immature (clings, needs constant reassurance).',
    'Distractibility or attention span a problem',
    'Headaches',
    'Mood changes quickly and drastically.',
    'Fights constantly.',
    'Easily frustrated in efforts.',
    'Basically an unhappy child.',
    'Stomach aches.',
    'Other aches and pains.',
    'Vomiting or nausea.' ]

    i = 0;
   

function displayQuestions() {
    
    
    if (i < questions.length) { 
        let displayedQuestion = document.getElementById('quiz');
        document.getElementById('submit').style.visibility = 'collapse';
        displayedQuestion.innerHTML = `<label for="each-question" id="test">${questions[i]}</label>
        <select id="each-question">
            <option value='0'>Never</option>
            <option value='1'>Just a Little</option>
            <option value='2'>Pretty Much</option>
            <option value='3'>Very Much</option>
        </select>`  
        document.getElementById('start').innerText = 'Next Question!';
        i++
        ;  
        
        return (document.getElementsByTagName('option').value);
             
    } else {
        document.getElementById('submit').style.visibility = 'visible';
    }
    
    
}



function previousQuestion() {
   if (i > 0) {
    i--;
    let displayedQuestion = document.getElementById('quiz');
        displayedQuestion.innerHTML = `<label for="each-question" id="test">${questions[i]}</label>
        <select id="each-question">
            <option value=0 tabindex='1'>Never</option>
            <option value=1 tabindex='2'>Just a Little</option>
            <option value=2 tabindex='3'>Pretty Much</option>
            <option value=1 tabindex='4'>Very Much</option>
        </select>`  ;
        
   }
}

let test = parseFloat(displayQuestions);
console.log(test)

function submitAnswers() {
    
        document.getElementById('score').innerHTML = `<p>test</p>`;
    } 
