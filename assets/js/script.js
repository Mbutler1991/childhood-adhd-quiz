
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
let adhdScore;
let conductScore;
let learningScore;
let psychosomaticScore;
let hyperScore;
let anxietyScore;
//index number 
i = 0;

document.getElementById('submit').style.display = 'none';
document.getElementById('previous').style.display = 'none';

//make all scores hidden

document.getElementById('adhd-result').style.display = 'none';
document.getElementById('conduct-result').style.display = 'none'; 
document.getElementById('learning-result').style.display = 'none';
document.getElementById('psychosomatic-result').style.display = 'none';
document.getElementById('hyper-result').style.display = 'none'; 
document.getElementById('anxiety-result').style.display = 'none';

//function that displays current question and next question
function displayQuestions() {
     
    if (i < questions.length) { 
        let displayedQuestion = document.getElementById('quiz');
        
        displayedQuestion.innerHTML = `<label for="each-question" id="test">${questions[i]}</label>
        <select id="each-question">
            <option value='0'>Never</option>
            <option value='1'>Just a Little</option>
            <option value='2'>Pretty Much</option>
            <option value='3'>Very Much</option>
        </select>`  
        document.getElementById('start').innerText = 'Next Question!';
        document.getElementById('previous').style.display = 'inline';
        i++;  
        
        let answer = document.getElementById('each-question');
        let btn = document.getElementById('submit');
        btn.addEventListener("click", function() {
        
        gatherScore = answer.value;
        //console.log(gatherScore);
        answerArray.push(gatherScore);
        document.getElementById('reveal').style.display = 'inline';
        //console.log(answerArray); 
        calculateScores();
        })     
    } else {
        document.getElementById('submit').style.display = 'inline';
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
    document.getElementById('a-score').innerHTML = `${adhdScore}`;
    conductScore = parseInt(answerArray[0]) + parseInt(answerArray[3]) + parseInt(answerArray[8]) + parseInt(answerArray[10]) + parseInt(answerArray[11]) + parseInt(answerArray[13]) + parseInt(answerArray[18]) + parseInt(answerArray[20]);
    document.getElementById('b-score').innerHTML = `${conductScore}`;
    learningScore = parseInt(answerArray[4]) + parseInt(answerArray[12]) + parseInt(answerArray[15]) + parseInt(answerArray[19]);
    document.getElementById('c-score').innerHTML = `${learningScore}`;
    psychosomaticScore = parseInt(answerArray[16]) + parseInt(answerArray[21]) + parseInt(answerArray[22]) + parseInt(answerArray[23]);
    document.getElementById('d-score').innerHTML = `${psychosomaticScore}`;
    hyperScore = parseInt(answerArray[1]) + parseInt(answerArray[2]) + parseInt(answerArray[5]) + parseInt(answerArray[7]);
    document.getElementById('e-score').innerHTML = `${hyperScore}`;
    anxietyScore = parseInt(answerArray[6]) + parseInt(answerArray[9]);
    document.getElementById('f-score').innerHTML = `${anxietyScore}`;
    
}

function displayResult() {
    document.getElementById('submit').style.display = 'none';
   // document.getElementsByClassName('quiz').style.display = 'none';
   // document.getElementById('quiz').style.display = 'none';
    document.getElementById('previous').style.display = 'none';
    document.getElementById('start').style.display = 'none';  

    adhdScore = parseInt(document.getElementById('a-score').innerHTML);
    conductScore = parseInt(document.getElementById('b-score').innerHTML);
    learningScore = parseInt(document.getElementById('c-score').innerHTML);
    psychosomaticScore = parseInt(document.getElementById('d-score').innerHTML);
    hyperScore = parseInt(document.getElementById('e-score').innerHTML);
    anxietyScore = parseInt(document.getElementById('f-score').innerHTML);
    
    if (adhdScore >= 18) {
        document.getElementById('adhd-result').style.display = 'block';
    } 
    
    if (conductScore >= 14) {
        document.getElementById('conduct-result').style.display = 'block';
    } 
    if (learningScore >= 7) {
        document.getElementById('learning-result').style.display = 'block';
    }
    if (psychosomaticScore >= 7) {
        document.getElementById('psychosomatic-result').style.display = 'block';
    } 
    if (hyperScore >= 7) {
        document.getElementById('hyper-result').style.display = 'block';
    } 
    if (anxietyScore >= 3) {
        document.getElementById('anxiety-result').style.display = 'block';
    } 
}   