

//let answers = ['Never', 'A Little Bit', 'Pretty Much', 'Very Much'];

let quiz = document.getElementById('quiz');

function displayQuestions() {
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
    
    let i = 0;
    
    if (i < questions.length) {
        let displayedQuestion = document.getElementById('quiz');
        displayedQuestion.innerHTML = `<label for="each-question" id="test">${questions[i]}</label>
        <select id="each-question">
            <option value=0>Never</option>
            <option value=1>Just a Little</option>
            <option value=2>Pretty Much</option>
            <option value=1>Very Much</option>
        </select>`  
        document.getElementById('start').innerText = 'Next Question!';
        i++          
    }
}
   // }
   // document.getElementById('start').addEventListener('click', function() {
        
     //   displayQuestions();
   // })
    //     let nextQuestion = document.getElementById('start');
       // document.getElementById('start').innerHTML = 'Next Question!';
    //     if (i < questions.length) {
    //     nextQuestion.addEventListener('click', function() {
            
    //         displayedQuestion.innerHTML = `<label for="each-question" id="test">${questions[i]}</label>
    //         <select id="each-question">
    //             <option value=0>Never</option>
    //             <option value=1>Just a Little</option>
    //             <option value=2>Pretty Much</option>
    //             <option value=1>Very Much</option>
    //         </select>`
    //         i++
    //     })
    // }
    // }
    // }
    
    
    


