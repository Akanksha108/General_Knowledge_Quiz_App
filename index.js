var readlineSync = require("readline-sync");

var userName = readlineSync.question("May I know your name?\n");

console.log(`Welcome ${userName}, lets see how much do you know about India\n`);

var score = 0;

function quiz(question, answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer === answer){
    console.log("Your answer is correct!!!\n");
    score++;
  }
  else{
    console.log("Your answer is wrong\n");
    score--;
  }
}

var level_1 = [
  {
    question :"What is the capital of India?\n",
    answer: "Delhi"
  },
  {
    question :"Who was India's first woman President?\n",
    answer: "Pratibha Patil"
  },
  {
    question :"How many states are there in India?\n",
    answer: "29"
  },
  {
    question :"How many Union Territories are there in India?\n",
    answer: "7"
  },
  {
    question :"Which state is famous for weaving carpets?\n",
    answer: "Kashmir"
  }
];
var level_2 = [
  {
    question :"Where is Taj Mahal located?\n",
    answer: "Agra"
  },
  {
    question :"Which city in South India is also known as the City of Palaces?\n",
    answer: "Mysore"
  },
  {
    question :"Which city is known as the 'Electronic City of India'?\n",
    answer: "Bangalore"
  },
  {
    question :"Where is Gateway of India located?\n",
    answer: "Mumbai"
  },
  {
    question :"Which Indian state is famous for boating activities on its backwaters?\n",
    answer: "Kerala"
  }
];

var highScore = [
  {
    name: "Geeta",
    score : 9
  },
  {
    name: "Chinmay",
    score: 8
  }
];

for(var i = 0; i < level_1.length; i++){
  var currentQuestion = level_1[i];
  quiz(currentQuestion.question, currentQuestion.answer);
}
console.log(`Your Score is: ${score}`);

if(score >= 5){
    console.log("You are qualified for level 2\n");
    for(var i = 0; i < level_2.length; i++){
    var currentQuestion = level_2[i];
    quiz(currentQuestion.question, currentQuestion.answer);
    }
    console.log(`Your Score is: ${score}`);
  }
  else{
    console.log("You didn't clear level one");
  }


console.log(`Highest Score: ${highScore[0].score}`);

if(score > highScore[0].score){
  console.log("Congratulations, you have made a new high score\nTo ensure that you have beaten the high score, please send us a screenshot\n");
}
else{
  console.log("You have not beaten the high score\nBetter luck next time!");
}