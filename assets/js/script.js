
// the area for the quiz to display
let quiz = document.getElementById('quiz');

//array of questions
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

//array for storing answers and different metrics for scoring
let answerArray = [];
let adhdScore = 0;
let conductScore = 0;
let learningScore = 0;
let psychosomaticScore = 0;
let hyperScore = 0;
let anxietyScore = 0;
//index number 
i = 0;

//function that displays current question and next question
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
        i++;  
        
        
        let answer = document.getElementById('each-question');
        let btn = document.getElementById('submit');
        btn.addEventListener("click", function() {
        
        gatherScore = answer.value;
        //console.log(gatherScore);
        answerArray.push(gatherScore);
        //console.log(answerArray); 
        calculateScores();              
        })     
    } else {
        document.getElementById('submit').style.visibility = 'visible';
    }
}  

//function for navigating to previous questions
function previousQuestion() {
   
    if (i > 0) {
        i--;
        let displayedQuestion = document.getElementById('quiz');
        displayedQuestion.innerHTML = `<label for="each-question" id="test">${questions[i]}</label>
        <select id="each-question">
            <option value='0'>Never</option>
            <option value='1'>Just a Little</option>
            <option value='2'>Pretty Much</option>
            <option value='3'>Very Much</option>
        </select>` 
        
   }
}
//adding up all the scores in their own metric
function calculateScores() {
    console.log(answerArray);
    adhdScore = parseInt(answerArray[1]) + parseInt(answerArray[4]) + parseInt(answerArray[5]) + parseInt(answerArray[7]) + parseInt(answerArray[10]) + parseInt(answerArray[12]) + parseInt(answerArray[14]) + parseInt(answerArray[15]) + parseInt(answerArray[17]) + parseInt(answerArray[19]);
    conductScore = parseInt(answerArray[0]) + parseInt(answerArray[3]) + parseInt(answerArray[8]) + parseInt(answerArray[10]) + parseInt(answerArray[11]) + parseInt(answerArray[13]) + parseInt(answerArray[18]) + parseInt(answerArray[20]);
    learningScore = parseInt(answerArray[4]) + parseInt(answerArray[12]) + parseInt(answerArray[15]) + parseInt(answerArray[19]);
    psychosomaticScore = parseInt(answerArray[16]) + parseInt(answerArray[21]) + parseInt(answerArray[22]) + parseInt(answerArray[23]);
    hyperScore = parseInt(answerArray[1]) + parseInt(answerArray[2]) + parseInt(answerArray[5]) + parseInt(answerArray[7]);
    anxietyScore = parseInt(answerArray[6]) + parseInt(answerArray[9]);
    
    console.log(adhdScore);
    console.log(conductScore);
    console.log(learningScore);
    console.log(psychosomaticScore);
    console.log(hyperScore);
    console.log(anxietyScore);
}

