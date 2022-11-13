export class UI {
  constructor() {}

  /**
   *
   * @param {sting} text
   */
  showQuestion(text) {
    const questionTitle = document.getElementById("question");
    questionTitle.innerHTML = text;
  }

  /**
   *
   * @param {string[]} choices
   */
  showChoices(choices, callback) {
    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = "";

    for (let i = 0; i < choices.length; i++) {
      const button = document.createElement("button");
      button.addEventListener("click", () => callback(choices[i]));
      button.className = "button";
      button.innerText = choices[i];

      choicesContainer.append(button);
    }
  }

  showScores(score) {
    var ImgScore="";
    if(score<3 || score ==3) {
      ImgScore="florkLoca.jpg";
    }else if(score>3 || score<7){
      ImgScore="florkOk.jpg";
    }else {
      ImgScore="florkNice.jpg";
    }

    ImgScore="florkNice.jpg";
    console.log("img:"+ImgScore);
    const gameOverHTML = `
      <h1>Resultados</h1>
      <h2 id="score">Tus Puntos: ${score}</h2>
      <img style="width:100px;height:100px;" src="imgs/${ImgScore}">`;
   
    const element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
  }

  showProgress(currentIndex, total) {
    var element = document.getElementById("progress");
    element.innerHTML = `Question ${currentIndex} of ${total}`;
  }
}
