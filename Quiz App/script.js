const quizData = [
    {
        question: "Which App is my favourite?",
        a: 'Instagram',
        b: 'Twitter',
        c: 'LinkedIN',
        d: 'Discord',
        correct: 'b'
    },
    {
        question: 'Which programming language was the most used language in 2019?',
        a: 'Java',
        b: 'Python',
        c: 'JavaScript',
        d: 'Ruby',
        correct: 'c'
    },
    {
        question: 'Who is the current president of US?',
        a: 'Trump',
        b: 'Joe Mama',
        c: 'Joe Biden',
        d: 'Luke Skywalker',
        correct: 'c'
    }, 
    {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Helicopters Terminals Motors Limited',
        c: 'Cascading Style Sheet',
        d: 'Application Programming Interface',
        correct: 'a'
    },
    {
        question: 'What year was JS launched in?',
        a: '1997',
        b: '2012',
        c: '2015',
        d: '1995',
        correct: 'd'
    }
]
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById('submit-button')
const quiz = document.getElementById('quiz')

// console.log(answerEl[1])
let currentQuiz = 0
let score = 0

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    // console.log()
    // const questionE = document.getElementById('question')
    
    const currentQuizData = quizData[currentQuiz];
    
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected(){
    let answer = undefined;
    
    answerEls.forEach((answerEl)=>{
        if(answerEl.checked){
            answer = answerEl.id
            // console.log('hi')
        }
    })
    return answer
}

function deselectAnswers(){
    answerEls.forEach((answerEl)=>{
        answerEl.checked = false
    })
}

submitBtn.addEventListener('click',()=>{
    const answer = getSelected();
    
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }
        
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz()
        } else{
            alert('You finished the quiz!! Get yourself a break while we get your score 😊')
            quiz.innerHTML = `
                <div class="quiz-header">
                    <h1 id="finished-head">Congratulations on completing the quiz!</h1>
                    <h2>Your score is ${score}/${quizData.length}. ${score > 3 ? 'Congrats': 'Better luck next time'}</h2>
                </div>
                <button onClick="location.reload()">Reload</button>
            `
            
        }
    }
    // currentQuiz++;
    // loadQuiz()
})