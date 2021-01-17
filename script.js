// Grabbing elements from the quiz.html page


var answerType= document.querySelector(".answerType");
var choices = Array.from(document.querySelectorAll("#choice-text"));
var scoreDi = document.querySelector('.scoreDispl')


// Creating Questions and Choices 

var currentQuestion ={};
var availableQuestions = []
var questionCounter = 0;
var Score_Points = 0;
var score = 0
var acceptingAnswers = true

var questions = [
{
    question:"Commonly used data types Do Not Include: ",
    choice1: "String",
    choice2: "Booleans",
    choice3: "Alerts",
    choice4: "Numbers",
    answer: 3,
},

{
    question:"The condition in an if /else statement is enclosed within ___________",
    choice1: "Quotes",
    choice2: "Curly brackets",
    choice3: "Parentheses",
    choice4: "Square brackets",
    answer: 2
},
{
    question:"Arrays in Java Script can be used to store __________",
    choice1: "Numbers and Strings",
    choice2: "Other Arrays",
    choice3: "Booleans",
    choice4: "All of the above ",
    answer: 3
},
{
    question:"String values must be enclosed within ______ when being assigned to variables.",
    choice1: "Quotes",
    choice2: "Curly brackets",
    choice3: "Parentheses",
    choice4: "Square brackets",
    answer: 1
},

{
    question:"A very useful tool used during development and debugging for printing content to the debugger is:",
    choice1: "JavaScript",
    choice2: "Terminal/bash",
    choice3: "For loops",
    choice4: "console.log",
    answer: 4
},
]

var maxQuestions = 4

 startQuiz = () => {
    questionCounter=0;
    availableQuestions = [...questions]

    console.log(availableQuestions)
    getNewQuestion();
}

 getNewQuestion = () => {

    // when reached the max qty of questions end the Quiz
    if (availableQuestions.length === 0 || questionCounter > maxQuestions)  {
       localStorage.setItem('mostRecentScore',score)
       return window.location.assign('/highscores.html'); 
    }
questionCounter++;

var questionsIndex= Math.floor(Math.random()* availableQuestions.length)
currentQuestion = availableQuestions[questionsIndex]
console.log(currentQuestion)
console.log(currentQuestion.question)

var questionsDis = document.querySelector(".questionDisplayed");
questionsDis.innerText =currentQuestion.question


choices.forEach(choices => {
    var number = choices.dataset['number'];
    console.log(number)
    choices.innerText = currentQuestion['choice' + number]
 
})

availableQuestions.splice(questionsIndex, 1)
acceptingAnswers = true
} 

choices.forEach(choices => {

choices.addEventListener('click', function () {
    if (acceptingAnswers) return
    acceptingAnswers= false
    var selectedChoice=e.target
    var selectedAnswer = selectedChoice.dataset['number']
    
    var classToApply = acceptingAnswers == currentQuestion.answer
    answerType.innerText = ("Wrong");

    if (classToApply === 'correct') {
        incrementScore(Score_Points)
        console.log(Score_Points)
        answerType.innerText = ("Correct");
    }
    
    selectedChoice.parentElement.classList.add(classToApply)
    setTimeout(() => {
        
        selectedChoice.parentElement.classList.remove(classToApply)
        getNewQuestion();
        
    }, 1000)


})

})

incrementScore = num => {
  score =+num
  scoreDi.innerText=score
 

}

 
startQuiz();








   













