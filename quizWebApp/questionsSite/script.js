window.onload = assignValueInitial;

const htmlQuestions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Text Markup Language", "Hyperlink and Text Markup Language", "Hyper Transfer Markup Language"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Which tag is used to define an unordered list in HTML?",
        options: ["<ul>", "<ol>", "<li>", "<list>"],
        answer: "<ul>"
    },
    {
        question: "What is the correct HTML for creating a hyperlink?",
        options: ["<a href='http://www.example.com'>link text</a>", "<link href='http://www.example.com'>link text</link>", "<href='http://www.example.com'>link text</href>", "<hyperlink='http://www.example.com'>link text</hyperlink>"],
        answer: "<a href='http://www.example.com'>link text</a>"
    },
    {
        question: "Which HTML tag is used to define the structure of a table?",
        options: ["<table>", "<tr>", "<td>", "<th>"],
        answer: "<table>"
    },
    {
        question: "Which attribute is used to specify that an input field must be filled out in HTML?",
        options: ["required", "validate", "mandatory", "compulsory"],
        answer: "required"
    },
    {
        question: "What does the <img> tag stand for in HTML?",
        options: ["image", "input image", "insert image", "image source"],
        answer: "image"
    },
    {
        question: "Which HTML element is used to specify a footer for a document or section?",
        options: ["<footer>", "<bottom>", "<end>", "<foot>"],
        answer: "<footer>"
    },
    {
        question: "Which tag is used to create a line break in HTML?",
        options: ["<br>", "<lb>", "<break>", "<newline>"],
        answer: "<br>"
    },
    {
        question: "In HTML, what does the <head> tag contain?",
        options: ["Content visible on the web page", "Metadata about the document", "Document structure", "Scripts and stylesheets"],
        answer: "Metadata about the document"
    },
    {
        question: "Which of the following is not a valid HTML element?",
        options: ["<section>", "<div>", "<paragraph>", "<span>"],
        answer: "<paragraph>"
    }
];

const cssQuestions = [
    {
        question: "What does CSS stand for?",
        options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
        answer: "Cascading Style Sheets"
    },
    {
        question: "How do you apply a background color to an element in CSS?",
        options: ["background-color:", "bg-color:", "color-background:", "background:"],
        answer: "background-color:"
    },
    {
        question: "Which property is used to control the space between lines of text in CSS?",
        options: ["line-height", "text-spacing", "letter-spacing", "word-spacing"],
        answer: "line-height"
    },
    {
        question: "How do you target an element with a specific class in CSS?",
        options: [".classname {}", "#classname {}", "classname {}", "element.classname {}"],
        answer: ".classname {}"
    },
    {
        question: "Which CSS property is used to make text italic?",
        options: ["font-style", "text-decoration", "font-weight", "italicize"],
        answer: "font-style"
    },
    {
        question: "How do you specify an external CSS file in HTML?",
        options: ["<link rel='stylesheet' href='style.css'>", "<style src='style.css'>", "<css href='style.css'>", "<stylesheet link='style.css'>"],
        answer: "<link rel='stylesheet' href='style.css'>"
    },
    {
        question: "Which CSS property is used to control the size of an element's border?",
        options: ["border-width", "border-size", "border-thickness", "border-style"],
        answer: "border-width"
    },
    {
        question: "What does the CSS property 'display: none;' do?",
        options: ["Makes the element invisible but still takes up space", "Completely removes the element from the document flow", "Hides the element until activated by JavaScript", "Displays the element with a transparent background"],
        answer: "Completely removes the element from the document flow"
    },
    {
        question: "Which CSS property is used to add shadows to text?",
        options: ["text-shadow", "shadow-text", "text-effect", "text-outline"],
        answer: "text-shadow"
    },
    {
        question: "How do you center an element horizontally in CSS?",
        options: ["margin: auto;", "align: center;", "justify-content: center;", "float: center;"],
        answer: "margin: auto;"
    }
];

const jsQuestions = [
    {
        question: "What is JavaScript primarily used for in web development?",
        options: ["Styling web pages", "Adding interactivity and behavior to web pages", "Structuring web pages", "Defining the layout of web pages"],
        answer: "Adding interactivity and behavior to web pages"
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["var", "variable", "let", "const"],
        answer: "var"
    },
    {
        question: "What does DOM stand for in JavaScript?",
        options: ["Document Object Model", "Data Object Model", "Document Object Method", "Data Object Method"],
        answer: "Document Object Model"
    },
    {
        question: "How do you comment a single line in JavaScript?",
        options: ["// comment", "/* comment */", "<!-- comment -->", "%% comment %%"],
        answer: "// comment"
    },
    {
        question: "Which function is used to print something in the console in JavaScript?",
        options: ["console.print()", "console.log()", "print()", "log()"],
        answer: "console.log()"
    },
    {
        question: "What is the purpose of the 'typeof' operator in JavaScript?",
        options: ["To check the type of a variable", "To define a new type", "To compare two variables", "To convert a variable to a different type"],
        answer: "To check the type of a variable"
    },
    {
        question: "Which method is used to add a new item to the end of an array in JavaScript?",
        options: ["push()", "pop()", "append()", "addToEnd()"],
        answer: "push()"
    },
    {
        question: "What does the 'NaN' stand for in JavaScript?",
        options: ["Not a Null", "Not a Number", "No applicable Number", "Null and None"],
        answer: "Not a Number"
    },
    {
        question: "Which of the following is not a valid JavaScript data type?",
        options: ["string", "boolean", "number", "float"],
        answer: "float"
    },
    {
        question: "How do you declare a function in JavaScript?",
        options: ["function myFunction() {}", "def myFunction() {}", "void myFunction() {}", "func myFunction() {}"],
        answer: "function myFunction() {}"
    }
];


var htmlQue = document.querySelector("#html .box h2");
var cssQue = document.querySelector("#css .box h2");
var jsQue = document.querySelector("#js .box h2");

var optionOneHTML = document.querySelector("#html #optionOne");
var optionTwoHTML = document.querySelector("#html #optionTwo");
var optionThreeHTML = document.querySelector("#html #optionThree");
var optionFourHTML = document.querySelector("#html #optionFour");

var optionOneCSS = document.querySelector("#css #optionOne");
var optionTwoCSS = document.querySelector("#css #optionTwo");
var optionThreeCSS = document.querySelector("#css #optionThree");
var optionFourCSS = document.querySelector("#css #optionFour");

var optionOneJS = document.querySelector("#js #optionOne");
var optionTwoJS = document.querySelector("#js #optionTwo");
var optionThreeJS = document.querySelector("#js #optionThree");
var optionFourJS = document.querySelector("#js #optionFour");

var nextButtonHTML = document.querySelector("#html #next");
var prevButtonHTML = document.querySelector("#html #prev");

var nextButtonCSS = document.querySelector("#css #next");
var prevButtonCSS = document.querySelector("#css #prev");

var nextButtonJS = document.querySelector("#js #next");
var prevButtonJS = document.querySelector("#js #prev");



var scoreHTML = 0;
var scoreCSS = 0;
var scoreJS = 0;

var currentQuestionIndexHTML = 0;
var currentQuestionIndexCSS = 0;
var currentQuestionIndexJS = 0;

nextButtonHTML.addEventListener("click", () => {
    currentQuestionIndexHTML++;
    if(currentQuestionIndexHTML > 9){
        currentQuestionIndexHTML = 9;
    }
    assignValue(htmlQuestions[currentQuestionIndexHTML], htmlQue, "htmlQuiz");
})

prevButtonHTML.addEventListener("click", () => {
    currentQuestionIndexHTML--;
    if(currentQuestionIndexHTML < 0){
        currentQuestionIndexHTML = 0;
    }
    assignValue(htmlQuestions[currentQuestionIndexHTML], htmlQue, "htmlQuiz");
})

nextButtonCSS.addEventListener("click", () => {
    currentQuestionIndexCSS++;
    if(currentQuestionIndexCSS > 9){
        currentQuestionIndexCSS = 9;
    }
    assignValue(cssQuestions[currentQuestionIndexCSS], cssQue, "cssQuiz");
})

prevButtonCSS.addEventListener("click", () => {
    currentQuestionIndexCSS--;
    if(currentQuestionIndexCSS < 0){
        currentQuestionIndexCSS = 0;
    }
    assignValue(cssQuestions[currentQuestionIndexCSS], cssQue, "cssQuiz");
})

nextButtonJS.addEventListener("click", () => {
    currentQuestionIndexJS++;
    if(currentQuestionIndexJS > 9){
        currentQuestionIndexJS = 9;
    }
    assignValue(jsQuestions[currentQuestionIndexJS], jsQue, "jsQuiz");
})

prevButtonJS.addEventListener("click", () => {
    currentQuestionIndexJS--;
    if(currentQuestionIndexJS < 0){
        currentQuestionIndexJS = 0;
    }
    assignValue(jsQuestions[currentQuestionIndexJS], jsQue, "jsQuiz");
})

function assignValue(index, questionType, category){

    if(category === "htmlQuiz"){
        var currentQuestion = index;
        optionOneHTML.innerText = currentQuestion.options[0];
        optionTwoHTML.innerText = currentQuestion.options[1];
        optionThreeHTML.innerText = currentQuestion.options[2];
        optionFourHTML.innerText = currentQuestion.options[3];
        questionType.innerText = currentQuestion.question;
    }
    else if(category === "cssQuiz"){
        var currentQuestion = index;
        optionOneCSS.innerText = currentQuestion.options[0];
        optionTwoCSS.innerText = currentQuestion.options[1];
        optionThreeCSS.innerText = currentQuestion.options[2];
        optionFourCSS.innerText = currentQuestion.options[3];
        questionType.innerText = currentQuestion.question;
    }
    else if(category === "jsQuiz"){
        var currentQuestion = index;
        optionOneJS.innerText = currentQuestion.options[0];
        optionTwoJS.innerText = currentQuestion.options[1];
        optionThreeJS.innerText = currentQuestion.options[2];
        optionFourJS.innerText = currentQuestion.options[3];
        questionType.innerText = currentQuestion.question;
    }
}

optionOneHTML.addEventListener("click", () => {
    optionOneHTML.classList.add("ans");
})

function assignValueInitial(){
        //html initial values
        optionOneHTML.innerText = htmlQuestions[0].options[0];
        optionTwoHTML.innerText = htmlQuestions[0].options[1];
        optionThreeHTML.innerText = htmlQuestions[0].options[2];
        optionFourHTML.innerText = htmlQuestions[0].options[3];
        htmlQue.innerText = htmlQuestions[0].question;

        //css initial values
        optionOneCSS.innerText = cssQuestions[0].options[0];
        optionTwoCSS.innerText = cssQuestions[0].options[1];
        optionThreeCSS.innerText = cssQuestions[0].options[2];
        optionFourCSS.innerText = cssQuestions[0].options[3];
        cssQue.innerText = cssQuestions[0].question;

        //js initial values
        optionOneJS.innerText = jsQuestions[0].options[0];
        optionTwoJS.innerText = jsQuestions[0].options[1];
        optionThreeJS.innerText = jsQuestions[0].options[2];
        optionFourJS.innerText = jsQuestions[0].options[3];
        jsQue.innerText = jsQuestions[0].question;
}

var scoreHTML = 0;

const optionsHTML = document.querySelectorAll("#html .options>span");
optionsHTML.forEach((option,idx)=>{
    option.onclick = () =>{
        console.log(option.innerText);
        if(option.innerText === htmlQuestions[currentQuestionIndexHTML].answer){
            console.log("Correct answer")
            console.log("Current Score: " + ++scoreHTML)
        } else {
            console.log("Wrong Answer")
            console.log("Current Score: " + scoreHTML)
        }
    }
})

var scoreCSS = 0;

const optionsCSS = document.querySelectorAll("#css .options>span");
optionsCSS.forEach((option,idx)=>{
    option.onclick = () =>{
        console.log(option.innerText);
        if(option.innerText === cssQuestions[currentQuestionIndexCSS].answer){
            console.log("Correct answer")
            console.log("Current Score: " + ++scoreCSS)
        } else {
            console.log("Wrong Answer")
            console.log("Current Score: " + scoreCSS)
        }
    }
})

var scoreJS = 0;

const optionsJS = document.querySelectorAll("#js .options>span");
optionsJS.forEach((option,idx)=>{
    option.onclick = () =>{
        console.log(option.innerText);
        if(option.innerText === jsQuestions[currentQuestionIndexJS].answer){
            console.log("Correct answer")
            console.log("Current Score: " + ++scoreJS)
        } else {
            console.log("Wrong Answer")
            console.log("Current Score: " + scoreJS)
        }
    }
})

var toGetScore = document.getElementById("toGetScore");
var htmlScoreBoard = document.getElementById("htmlScore");
var cssScoreBoard = document.getElementById("cssScore");
var jsScoreBoard = document.getElementById("jsScore");

toGetScore.addEventListener("click", () => {
    htmlScoreBoard.innerText = scoreHTML;
    cssScoreBoard.innerText = scoreCSS;
    jsScoreBoard.innerText = scoreJS;
})

window.onload = assignValue;
window.onload = assignValueInitial;
