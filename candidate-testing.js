const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = '';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = '';


//TODO: Variables for Part 2
let questions = ['Who was the first American woman in space? ', 'True or false: 5 kilometer == 5000 meters? ', '(5 + 3)/2 * 10 = ? ', "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", 'What is the minimum crew size for the ISS? '];
let correctAnswers = ['Sally Ride', 'true', '40', 'Trajectory', '3'];
let candidateAnswers = '';


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  let candidateName = input.question("Enter name here: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

  for (let i = 0; i < questions.length; i++) {
    questions = input.question(question[i]);
    userInput = [];
    candidateAnswers.toLowerCase().push(userInput);
  }
}

//let correct = 0;

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  //for (let i = 0; i < candidateAnswers.length; i++) {
    //if (candidateAnswers[i] == correctAnswers[i]) {
      //candidateAnswers[i].toLowerCase();
      //console.log(`Correct! Your answer: ${candidateAnswers[i]}. Correct answer: ${correctAnswers[i]}.`);
      //score++;
    //} else {
      //console.log(`Incorrect! Your answer: ${candidateAnswers[i]}. Correct answer: ${correctAnswers[i]}.`);
    //}
    //}
//for (let i = 0; i < 5; i++) {
  //if (candidateAnswers[i] == correctAnswers[i]) {
    //correct = correct + 1;
    //console.log(`Correct! Your answer: ${candidateAnswers[i]}. Correct answer: ${correctAnswers[i]}.`);
  //} else {
    //console.log(`Incorrect! Your answer: ${candidateAnswers[i]}. Correct answer: ${correctAnswers[i]}.`);
  //}
//}
let grade// = (correct/questions.length) * 100; //TODO 3.2 use this variable to calculate the candidates score.
//if (correct == 0) {
  //grade;
  //console.log("Sorry. You've failed the quiz.");
//} else if (correct == 5) {
 //grade;
 //console.log(`Congradulations! You've passed with a ${grade}.`);
//} else if (correct == 1) {
// grade;
 //console.log(`Sorry. You've failed with a ${grade}.`);
//} else if (correct == 2) {
 //grade;
 //console.log(`Sorry. You've failed with a ${grade}.`);
//} else if (correct == 3) {
 //grade;
 //console.log(`Sorry. You've failed with a ${grade}.`);
//} else if (correct == 4) {
 //grade;
 //console.log(`Congradulations! You've passed with a ${grade}.`);
//}
return grade;
}


function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
  console.log(`Hello ${candidateName}!`);
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