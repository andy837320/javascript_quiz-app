const quizDB = [
  {
    question: "Q1: Who is the prime minister of India",
    a: "Probal Dey",
    b: "Ritikesh Shah",
    c: "Narendra Modi",
    d: "Bimal Bhat",
    ans: "ans3",
  },
  {
    question: "Q2:what is the capital of florida",
    a: "Bijang",
    b: "Tallahassee ",
    c: "Orlando",
    d: "Kolkata",
    ans: "ans2",
  },
  {
    question: "Q3: how many bones are in the human body",
    a: "206 bones",
    b: "344 bones  ",
    c: "211 bones",
    d: "552 bones",
    ans: "ans1",
  },
  {
    question: "Q4: what is the national bird in the usa",
    a: "The bald eagle",
    b: "Parrot ",
    c: "Peocock",
    d: "Sparrow ",
    ans: "ans1",
  },
  {
    question: "Q5: How many teeth does an adult human have",
    a: "35 teeth",
    b: "33 teeth ",
    c: "43 teeth",
    d: "32 teeth ",
    ans: "ans4",
  },
  {
    question: "Q6: What is the biggest state in America?",
    a: "Washinton",
    b: "Alaska ",
    c: "New York",
    d: "Bejing ",
    ans: "ans2",
  },
  {
    question: "Q7:What's the biggest animal in the world? ",
    a: "The bald eagle",
    b: "Parrot ",
    c: "Blue Whale",
    d: "Crow",
    ans: "ans3",
  },
  {
    question: "Q8: Which planet is closest to the sun?",
    a: "Jupitar",
    b: "Earth ",
    c: "Venus",
    d: "Mercury ",
    ans: "ans4",
  },
  {
    question: "Q9: What is the largest country in the world?",
    a: "Russia",
    b: "USA ",
    c: "Poland",
    d: "India",
    ans: "ans1",
  },
  {
    question: "Q10: What's a baby rabbit called?",
    a: "piggy",
    b: "Kittens ",
    c: "lamb",
    d: "Sparrow ",
    ans: "ans2",
  },
  {
    question: "Q11: What is the smallest country in the world?",
    a: "Russia",
    b: "USA",
    c: "Vatican City",
    d: "New Zealand ",
    ans: "ans3",
  },
  {
    question: "Q12: In which direction does the sunrise?",
    a: "West",
    b: " East ",
    c: "South",
    d: "North ",
    ans: "ans2",
  },
  {
    question: "Q13: Which is the world’s largest flower?",
    a: "Marrigold",
    b: "Lotus ",
    c: "Rose",
    d: " Rafflesia ",
    ans: "ans4",
  },
  {
    question: "Q14: How many hours are there in two days?",
    a: "32 hrs",
    b: "48 hrs ",
    c: "24 hrs",
    d: "52 hrs",
    ans: "ans2",
  },
  {
    question: "Q15:  Which are the colors in a rainbow?",
    a: "Violet,green, blue,purple,orange",
    b: "Pink, green, white",
    c: "Red, yellow, pink",
    d: "Violet, Indigo, Blue, Green, Yellow, Orange, Red ",
    ans: "ans4",
  },
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#Submit");
const answers = document.querySelectorAll(".answer");
const showScore = document.querySelector("#showScore");

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
  const questionList = quizDB[questionCount];
  question.innerText = questionList.question;

  option1.innerText = questionList.a;
  option2.innerText = questionList.b;
  option3.innerText = questionList.c;
  option4.innerText = questionList.d;
};

loadQuestion();
const getCheckAnswer = () => {
  let answer;

  answers.forEach((curAnsElem) => {
    if (curAnsElem.checked) {
      answer = curAnsElem.id;
    }
  });
  return answer;
};

const deselectAll = () => {
  answers.forEach((curAnsElem) => (curAnsElem.checked = false));
};

submit.addEventListener("click", () => {
  const checkedAnswer = getCheckAnswer();
  if (checkedAnswer === quizDB[questionCount].ans) {
    score++;
  }

  questionCount++;
  deselectAll();

  if (questionCount < quizDB.length) {
    loadQuestion();
  } else {
    if (score > 11) {
      alert("you are genious");
    } else {
      alert("keep working!!");
    }
    showScore.innerHTML = `
      <h3> you Scored ${score} / ${quizDB.length}
      
      </h3>
      
      <button class= "btn" onClick="location.reload()"> 
         Wanna Play Again??
       </button>      
      

      `;

    showScore.classList.remove("scoreArea");
  }
});
