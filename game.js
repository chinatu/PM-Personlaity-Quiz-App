export {High_Abstraction, Engineering_Facing, Bussiness_Facing, Low_Abstraction}
const question = document.getElementById('question');

const choices = Array.from(document.getElementsByClassName("choice-text"));
var resultchart = document.getElementById("result-chart");
var arrow_down = document.getElementById("arrow-down")
console.log(choices);

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0; 
let availableQuestions = []


let High_Abstraction = 0
let Engineering_Facing = 0;
let Bussiness_Facing = 0; 
let Low_Abstraction = 0;



let questions = [
    {
        question: "When you think of a product, which of the following comes to mind?",
        choice1: "The technicalities behind basic feature and how to make scale retention by improving features",
        choice2: "How a product fits into market interest, finding market fits. Identifying product gaps and utilizing analytics to achieve this.",
        //choice1: Engineering Facing
        //choice2: Bussiness Facing
    }, 
    {
        question: "Which of the following is required of you in your current role?",
        choice1: "To think of products from a technical pov, what technical departments were primarily involved in a product and features that will scale how a product is used and take care of managing user stories.",
        choice2: "To think of how a product fits into the market interest. Product gaps and how to track that with analytics.",
        //choice1: High abstraction engineering facing
        //choice2: Low abstraction business facing
    },
    {
        question: "Which of the following sounds like you?",
        choice1: "My focus is primarily on the customers, how they respond to product features and changes and satisfy user needs.",
        choice2: "My engineering team are my go to guys. I interact with them daily and I need to be in check with what they do and how they do it. Leading them to achieve success based on stated OKRs"
        //choice1: High abstraction business facing
        //choice2: Low abstraction business facing
    },
    {
        question: "Which of these best describe the needs of your user base?",
        choice1: "More engineering inclined. It\\'s centered on the use and technical functionalities of a product",
        choice2: "Business inclined. It is centered on an enterprise specialty software. Where you have to think about market impact, scalability, type of business model etc"
        //choice1: Low Abstraction 
        //choice2: Low abstraction business facing
    },
    {
        question:"How does management define success for your role as a PM?",
        
        choice1: "Building user stories, managing backlog and overseeing development team to build features",
        choice2: "Understanding and satisfying market interest and leading direction towards that goal."
        //choice1: Engineering Facing
        //choice2: Business Facing
    }

]




//CONSTANTS

const MAX_QUESTIONS = 5;

function startGame() {
    resultchart.style.display = "none";
    arrow_down.style.display = "none";
    questionCounter = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}

function getNewQuestion(){
    
    if(availableQuestions.length === 0 || questionCounter>=MAX_QUESTIONS){
        console.log("Enginerring Facing "+Engineering_Facing)
        console.log("Business Facing "+Bussiness_Facing)
        console.log("High Abstraction" +High_Abstraction)
        console.log("Low Abstraction "+Low_Abstraction)

        let pTotal = Engineering_Facing + Bussiness_Facing + High_Abstraction + Low_Abstraction;

        let Engineering_Facing_Per = Math.round(Engineering_Facing/pTotal * 100);
        let Bussiness_Facing_Per = Math.round(Bussiness_Facing/pTotal * 100);
        let High_Abstraction_Per = Math.round(High_Abstraction/pTotal * 100);
        let Low_Abstraction_Per = Math.round(Low_Abstraction/pTotal * 100);
        
        
        resultchart.style.display = "block";
        arrow_down.style.display = "block";
        var xValues = ["High Abstraction "+High_Abstraction_Per+"%", "Engineering-Facing "+Engineering_Facing_Per+"%", "Bussiness-Facing "+ Bussiness_Facing_Per+"%", "Low Abstraction "+Low_Abstraction_Per+"%"];
        var yValues = [High_Abstraction,Engineering_Facing,Bussiness_Facing,Low_Abstraction];
        // // var yValues = [High_Abstraction, Engineering_Facing, Bussiness_Facing, Low_Abstraction];
        var barColors = [
        "#b91d47",
        "#00aba9",
        "#2b5797",
        "#e8c3b9",
        ];

        new Chart("myChart", {
        type: "pie",
        data: {
            labels: xValues,
            datasets: [{
            backgroundColor: barColors,
            data: yValues
            }]
        },
        options: {
            title: {
            display: true,
            text: "Your Product Manager Spectrum",
            fontSize: 20,
            plugins:{         
                datalabels: {
                  formatter: function(value, context) {                  
                    return Math.round(value/context.chart.getDatasetMeta(0).total * 100) + "%" ;
                  }
                }
            }}
        }
        });
}

    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset["number"]
        choice.innerText = currentQuestion["choice" + number]
    })

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices .forEach(choice => {
    choice.addEventListener('click', e => {
        console.log(e.target);
        if(!acceptingAnswers) returns;

        acceptingAnswers = false;

        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        console.log(selectedChoice)
        
        if(selectedChoice.innerText === questions[0].choice1 || selectedChoice.innerText === questions[4].choice1){
            Engineering_Facing+=1;
        }else if(selectedChoice.innerText === questions[0].choice2 || selectedChoice.innerText === questions[4].choice2){
            Bussiness_Facing+=1;
        }else if(selectedChoice.innerText === questions[1].choice1){
            High_Abstraction+=1;
            Engineering_Facing+=1;
        }else if (selectedChoice.innerText === questions[2].choice1){
            High_Abstraction+=1;
            Bussiness_Facing+=1;
        }else if (selectedChoice.innerText === questions[1].choice2 || selectedChoice.innerText === questions[2].choice2
            || selectedChoice.innerText === questions[3].choice2){
                Low_Abstraction += 1;
                Bussiness_Facing += 1;
        }else if (selectedChoice.innerText === questions[3].choice1){
            Low_Abstraction +=1;
        }

        

        //questions[0].choice1 - Enginerring Facing
//questions[4].choice1 - Engineering Facing

//questions[0].choice2 - Bussiness Facing
//questions[4].choice2 - Bussiness Facing

//question[1].choice1 - High abstraction Engineering facing
//question[2].choice1 - High asbtraction Bussiness Facing

//question[1].choice2 - Low Abstraction Bussiness Facing
//question[2].choice2 - low Abstraction bussiness Facing
//question[3].choice2 - Low Abstraction bussiness Facing

//question[3].choice1 - Low Abstraction
        getNewQuestion();
    });

})

function gameResults(){
var xValues = ["High Abstraction", "Engineering-Facing", "Bussiness-Facing ", "Low Abstraction"];
var yValues = [2,1,2,2];
// console.log(High_Abstraction)
// // var yValues = [High_Abstraction, Engineering_Facing, Bussiness_Facing, Low_Abstraction];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
];

new Chart("myChart", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Your Product Manager Spectrum"
    }
  }
});
}



startGame(gameResults);










//High Abstraction
//Engineering-Facing
//Business-Facing 
//Low Abstraction

//Export values above