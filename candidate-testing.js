const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "" ;


//TODO: Variables for Part 2
let questions = ['Who was the first American woman in space? ', 'True or false: 5 kilometer == 5000 meters? ', '(5 + 3)/2 * 10 = ? ', "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", 'What is the minimum crew size for the ISS? '];
let correctAnswers = ['Sally Ride','true','40','Trajectory','3' ];
let candidateAnswers;


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
let candidateName = input.question("Enter name here: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  //console.log(question);
  //let candidateAnswer = input.question("Enter answer:");
  for (let i = 0; i < questions.length; i++) {
   questions = input.question(question[i]);
   input = [];
   candidateAnswer.push(input);
  } 
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
//if (candidateAnswer = correctAnswer) {
//  console.log("Correct!");
//} else {
//  console.log("Incorrect, please try again!");
if (questions == questions[1] && candidateAnswer == correctAnswers[1]) {
  console.log(`You answered ${candidateAnswer[1]}. Which is correct!`);
} else {
  console.log(`You answered ${candidateAnswer[1]}. Which is the wrong answer the correct answer is ${correctAnswers[1]}.`);
}

if (questions == questions[2] && candidateAnswer == correctAnswers[2]) {
  console.log(`You answered ${candidateAnswer[2]}. Which is correct!`);
} else {
  console.log(`You answered ${candidateAnswer[2]}. Which is the wrong answer the correct answer is ${correctAnswers[2]}.`);
}

if (questions = questions[3] && candidateAnswer == correctAnswers[3]) {
  console.log(`You answered ${candidateAnswer[3]}. Which is correct!`);
} else {
  console.log(`You answered ${candidateAnswer[3]}. Which is the wrong answer the correct answer is ${correctAnswers[3]}.`);
}

if (questions == questions[4] && candidateAnswer == correctAnswers[4]) {
  console.log(`You answered ${candidateAnswer[4]}. Which is correct!`);
} else {
  console.log(`You answered ${candidateAnswer[4]}. Which is the wrong answer the correct answer is ${correctAnswers[4]}.`);
}

if (questions == questions[5] && candidateAnswer == correctAnswers[5]) {
  console.log(`You answered ${candidateAnswer[5]}. Which is correct!`);
} else {
  console.log(`You answered ${candidateAnswer[5]}. Which is the wrong answer the correct answer is ${correctAnswers[5]}.`);
}



  let grade;  //TODO 3.2 use this variable to calculate the candidates score.


  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Hello" + candidateName +"!");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};