const dataBase = [
  {question: "1-Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, cumque, eius recusandae harum rem repudiandae quis fuga neque, eum autem explicabo illum. Accusantium voluptatem natus id architecto veniam dolor minima.", answer: [{text: "A1", value:false}, {text:"B1", value: false}, {text: "C1", value: false}, {text: "D1", value: true}]}, {question: "2-Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, cumque, eius recusandae harum rem repudiandae quis fuga neque, eum autem explicabo illum. Accusantium voluptatem natus id architecto veniam dolor minima.", answer: [{text: "A2", value:false}, {text:"B2", value: false}, {text: "C2", value: false}, {text: "D2", value: true}]}, {question: "3-Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, cumque, eius recusandae harum rem repudiandae quis fuga neque, eum autem explicabo illum. Accusantium voluptatem natus id architecto veniam dolor minima.", answer: [{text: "A3", value:false}, {text:"B3", value: false}, {text: "C3", value: false}, {text: "D3", value: true}]}, {question: "4-Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, cumque, eius recusandae harum rem repudiandae quis fuga neque, eum autem explicabo illum. Accusantium voluptatem natus id architecto veniam dolor minima.", answer: [{text: "A4", value:false}, {text:"B4", value: false}, {text: "C4", value: false}, {text: "D4", value: true}]}, {question: "5-Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, cumque, eius recusandae harum rem repudiandae quis fuga neque, eum autem explicabo illum. Accusantium voluptatem natus id architecto veniam dolor minima.", answer: [{text: "A5", value:false}, {text:"B5", value: false}, {text: "C5", value: false}, {text: "D5", value: true}]}, {question: "6-Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, cumque, eius recusandae harum rem repudiandae quis fuga neque, eum autem explicabo illum. Accusantium voluptatem natus id architecto veniam dolor minima.", answer: [{text: "A6", value:false}, {text:"B6", value: false}, {text: "C6", value: false}, {text: "D6", value: true}]}];
var start = document.getElementById('start');
var questions = document.getElementById('questions');
var quiz = function() {
  var i = 0;
  function questionBuilder() {
    if (i < dataBase.length) {
      var newDivEl = document.createElement('div');
      newDivEl.id = ('question');
      newDivEl.className = ('questions');
      questions.appendChild(newDivEl);
      var questionEl = document.createElement('p');
      questionEl.textContent = (dataBase[i].question);
      newDivEl.appendChild(questionEl);
      var answer1El = document.createElement('button');
      answer1El.textContent = (dataBase[i].answer[0].text);
      answer1El.id = ('answer1');
      answer1El.className = 'answers';
      newDivEl.appendChild(answer1El);
      var value1 = (dataBase[i].answer[0].value);
      answer1El.addEventListener('click', function() {
        if (value1) {
          console.log("TRUE");
          i++;
          newDivEl.style.display = "none";
          questionBuilder();
        } else if (!value1) {
          console.log("FALSE");
          i++;
          newDivEl.style.display = "none";
          questionBuilder();
        }
      });
      var answer2El = document.createElement('button');
      answer2El.textContent = (dataBase[i].answer[1].text);
      answer2El.id = ('answer2');
      answer2El.className = 'answers';
      newDivEl.appendChild(answer2El);
      var value2 = (dataBase[i].answer[1].value);
      answer2El.addEventListener('click', function() {
        if (value2) {
          console.log("TRUE");
          i++;
          newDivEl.style.display = "none";
          questionBuilder();
        } else if (!value2) {
          console.log("FALSE");
          i++;
          newDivEl.style.display = "none";
          questionBuilder();
        }
      });
      var answer3El = document.createElement('button');
      answer3El.textContent = (dataBase[i].answer[2].text);
      answer3El.id = ('answer3');
      answer3El.className = 'answers';
      newDivEl.appendChild(answer3El);
      var value3 = (dataBase[i].answer[2].value);
      answer3El.addEventListener('click', function() {
        if (value3) {
          console.log("TRUE");
          i++;
          newDivEl.style.display = "none";
          questionBuilder();
        } else if (!value3) {
          console.log("FALSE");
          i++;
          newDivEl.style.display = "none";
          questionBuilder();
        }
      });
      var answer4El = document.createElement('button');
      answer4El.textContent = (dataBase[i].answer[3].text);
      answer4El.id = ('answer4');
      answer4El.className = 'answers';
      newDivEl.appendChild(answer4El);
      var value4 = (dataBase[i].answer[3].value);
      answer4El.addEventListener('click', function() {
        if (value4) {
          console.log("TRUE");
          i++;
          newDivEl.style.display = "none";
          questionBuilder();
        } else if (!value4) {
          console.log("FALSE");
          i++;
          newDivEl.style.display = "none";
          questionBuilder();
        }
      });
    } else {
      noMore();
    }
  }
  questionBuilder(); 
};
function noMore() {
  clearInterval(intervalID);
  const timeDisplay = document.getElementById('time');
  var gameOver = document.querySelector('#questions');
  gameOver.id = 'gameOver';
  gameOver.className = 'gameOver';
  gameOver.innerHTML = '<span>No More Questions!</span>';
  var gameOverButton = document.createElement('button');
  gameOverButton.textContent = "Let's Record Your Score";
  gameOverButton.id = 'gameOver-btn';
  gameOverButton.className = 'gameOver-btn';
  gameOver.appendChild(gameOverButton);
}
function stopTimer() {
  clearInterval(intervalID);
  var gameOver = document.querySelector('#questions');
  gameOver.className = 'gameOver';
  gameOver.innerHTML = '<span>Time is up!</span>';
};
function startTimer() {
  const timeDisplay = document.getElementById('time');
  let timeRemaining = 10;
  intervalID = setInterval(function () {
    timeRemaining--;
    timeDisplay.innerText = "Time Remaining: " + timeRemaining + " s";
    if (timeRemaining <= 0) {
      stopTimer();
    }
  }, 1000);
}
var startBtn = document.querySelector('#start-btn');
startBtn.addEventListener('click', function(){
  start.style.display = "none";
  startTimer();
  quiz();
});