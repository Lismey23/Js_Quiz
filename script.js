// Grabbing elements from the quiz.html page

var question = document.querySelector("#question");
var answerType= document.querySelector("#answerType");
var startbutton = document.querySelector("start-button")

// Creating Questions and Choices 

var question = [
{
    question:"Commonly used data types Do Not Include: ",
    choice1: "String",
    choice2: "Booleans",
    choice3: "Alerts",
    choice4: "Numbers",
},

{
    question:"The condition in an if /else statement is enclosed within ___________",
    choice1: "Quotes",
    choice2: "Curly brackets",
    choice3: "Parentheses",
    choice4: "Square brackets",
},
{
    question:"Arrays in Java Script can be used to store __________",
    choice1: "Numbers and Strings",
    choice2: "Other Arrays",
    choice3: "Booleans",
    choice4: "All of the above ",
},
{
    question:"String values must be enclosed within ______ when being assigned to variables.",
    choice1: "Quotes",
    choice2: "Curly brackets",
    choice3: "Parentheses",
    choice4: "Square brackets",
},

{
    question:"A very useful tool used during development and debugging for printing content to the debugger is:",
    choice1: "JavaScript",
    choice2: "Terminal/bash",
    choice3: "For loops",
    choice4: "console.log",
},
]
//

    for (let i = 0; i < question.length; i++) {
        console.log(question);
        
        
    }













