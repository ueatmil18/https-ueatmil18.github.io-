//@ts-check
import { Quiz } from "./models/Quiz.js";
import { UI } from "./models/UI.js";
import { questM1D1, questM2D1, questM2D2 } from "./data/questions.js";

// Renderring the page
const renderPage = (quiz, ui) => {
  if (quiz.isEnded()) {
    ui.showScores(quiz.score);
  } else {
    console.log(quiz);
    ui.showQuestion(quiz.getQuestionIndex().text);
    ui.showProgress(quiz.questionIndex + 1, quiz.questions.length);
    ui.showChoices(quiz.getQuestionIndex().choices, (currenChoice) => {
      quiz.guess(currenChoice);
      renderPage(quiz, ui);
    });
  }
};

function main() {
  const ui = new UI();
  var qq = null;
  if(auxQuiz==1){
    console.log("Preguntas = 1");
    qq = questM1D1;
  };
  if(auxmod==2 && auxQuiz==1){
    console.log("Preguntas = 1");
    qq = questM2D1;
  };
  if(auxmod==2 && auxQuiz==2){
    console.log("Preguntas = 2");
    qq = questM2D2;
  };

  const quiz = new Quiz(qq);
  renderPage(quiz, ui); 

}

//console.log("Parametro:"+auxQuiz);
main();
