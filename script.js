const quizData = [
    {
        question: "1. What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "2. Which HTML tag is used to define a hyperlink?",
        a: "<link>",
        b: "<a>",
        c: "<href>",
        d: "<nav>",
        correct: "b",
    },
    {
        question: "3. Which HTML tag is used to display an image?",
        a: "<img>",
        b: "<image>",
        c: "<picture>",
        d: "<photo>",
        correct: "a",
    },
    {
        question: "4. What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "5. What is the correct syntax for adding a comment in CSS?",
        a: "<!-- Comment -->",
        b: "/* Comment */",
        c: "// Comment //",
        d: "# Comment #",
        correct: "b",
    },
    {
        question: "6. How do you select an element with ID 'header' in CSS?",
        a: ".header",
        b: "header",
        c: "#header",
        d: "*header",
        correct: "c",
    },
    {
        question: "7. What year was JavaScript launched?",
        a: "1995",
        b: "1996",
        c: "1994",
        d: "none of the above",
        correct: "a",
    },
    {
        question: "8. Which language is most commonly used?",
        a: "HTML",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "9. Which language runs in a web browser?",
        a: "HTML",
        b: "CSS",
        c: "Javascript",
        d: "Python",
        correct: "C",
    },
    {
        question: "10. Which method is used to write content into an HTML document?",
        a: "console.log()",
        b: "document.write()",
        c: "window.alert()",
        d: "document.log()",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <a href="viewanswers.html"><button id="submit">View answers</button></a>
   
                <style>
        body {
            display: flex;
            justify-content: bottom;
            align-items: center;
            height: 100vh;
            background-color: #f4f4f4;
            font-family: Arial, sans-serif;
        }
        .thank-you-message {
            text-align: center;
            background: #fff;
            padding: 20px
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .thank-you-message h1 {
            margin-bottom: 10px;
            color: #333;
        }
        .thank-you-message p {
            color: #666;
        }
    </style>
</head>
<body>
    <div class="thank-you-message">
        <h1>Thank You!!!</h1>
        <p>Thankyou for attending the Quiz.We hope you enjoyed it!!</p>
    </div>
</body>
</html
            `
        }
        
        
    }
})
