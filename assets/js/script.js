const dataBase = [
  {question: 'Inside which HTML element do we put the JavaScript?', answer: [{text: '<script>', value: true}, {text: '<scripting>', value:false}, {text:'<javascript>', value: false}, {text: '<js>', value: false}]}, {question: 'How do you write "Hello World" in an alert box?', answer: [{text: 'msgBox("Hello World")', value:false}, {text:'msg("Hello World")', value: false}, {text: 'alertBox("Hello World")', value: false}, {text: 'alert("Hello World")', value: true}]}, {question: 'How do you create a function in JavaScript?', answer: [{text: 'myFunction() = function', value:false}, {text:'function myFunction()', value: true}, {text: 'function:myFunction()', value: false}, {text: 'function = myFunction()', value: false}]}, {question: 'How do you call a function named "myFunction"?', answer: [{text: 'myFunction', value:false}, {text:'call function myFunction()', value: false}, {text: 'call myFunction()', value: false}, {text: 'myFunction()', value: true}]}, {question: 'How to write an IF statement in JavaScript?', answer: [{text: 'if i == 5 then', value:false}, {text:'if i = 5', value: false}, {text: 'if i = 5 then', value: false}, {text: 'if (i == 5)', value: true}]}, {question: 'How does a FOR loop start?', answer: [{text: 'for (i = 0; i <= 5)', value:false}, {text:'for (i <= 5; i++)', value: false}, {text: 'for i = 1 to 5', value: false}, {text: 'for (i = 0; i <= 5; i++)', value: true}]}, {question: 'What is the correct way to write a JavaScript array?', answer: [{text: 'var colors = "red", "green", "blue"', value:false}, {text:'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")', value: false}, {text: 'var colors = (1:"red", 2:"green", 3:"blue")', value: false}, {text: 'var colors = ["red", "green", "blue"]', value: true}]}, {question: 'How do you round the number 7.25, to the nearest integer?', answer: [{text: 'rnd(7.25)', value:false}, {text:'Math.rnd(7.25)', value: false}, {text: 'round(7.25)', value: false}, {text: 'Math.round(7.25)', value: true}]}, {question: 'How do you find the number with the highest value of x and y?', answer: [{text: 'ceil(x, y)', value:false}, {text:'top(x, y)', value: false}, {text: 'Math.ceil(x, y)', value: false}, {text: 'Math.max(x, y)', value: true}]}, {question: 'What is the correct JavaScript syntax to change the content of the HTML element "<p id="demo">This is a demonstration.</p>"?', answer: [{text: 'document.getElementByName("p").innerHTML = "Hello World!";', value:false}, {text:'#demo.innerHTML = "Hello World!";', value: false}, {text: 'document.getElement("p").innerHTML = "Hello World!";', value: false}, {text: 'document.getElementById("demo").innerHTML = "Hello World!";', value: true}]}];
var start = document.getElementById('start');
var questions = document.getElementById('questions');
var timeRemaining = 80;
var highTime = document.getElementById('high-time');
var hiddenTimeTracker = document.createElement('div');
var feedback = document.getElementById('showfeedback');
var answer;
var correctOrWrong;
hiddenTimeTracker.id = 'hidden';
hiddenTimeTracker.className = 'hidden';
highTime.appendChild(hiddenTimeTracker);
var quiz = function() {
  var i = 0;
  function buildFeedback() {
    feedback.textContent = null;
    console.log(answer);
    i++;
    if (answer) {
      correctOrWrong = "Correct!";
    } else {
      correctOrWrong = "Wrong!";
    };
    var showFeedback = document.createElement('span');
    showFeedback.textContent = correctOrWrong;
    feedback.appendChild(showFeedback);
    questionBuilder();
  };
  function questionBuilder() {
    if (i < dataBase.length) {
      newDivEl = document.createElement('div');
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
          answer = true;
          newDivEl.style.display = "none";
          buildFeedback();
        } else if (!value1) {
          answer = false;
          newDivEl.style.display = "none";
          timeRemaining = (timeRemaining - 10);
          buildFeedback();
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
          answer = true;
          newDivEl.style.display = "none";
          buildFeedback();
        } else if (!value2) {
          answer = false;
          newDivEl.style.display = "none";
          timeRemaining = (timeRemaining - 10);
          buildFeedback();
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
          answer = true;
          newDivEl.style.display = "none";
          buildFeedback();
        } else if (!value3) {
          answer = false;
          newDivEl.style.display = "none";
          timeRemaining = (timeRemaining - 10);
          buildFeedback();
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
          answer = true;
          newDivEl.style.display = "none";
          buildFeedback();
        } else if (!value4) {
          answer = false;
          newDivEl.style.display = "none";
          timeRemaining = (timeRemaining - 10);
          buildFeedback();
        }
      });
      return timeRemaining;
    } else {
      noMore();
    }
  }
  questionBuilder();
  return timeRemaining;
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
  console.log(hiddenTimeTracker);
}
function stopTimer() {
  clearInterval(intervalID);
  var gameOver = document.querySelector('#questions');
  gameOver.className = 'gameOver';
  gameOver.innerHTML = '<span>Time is up!</span>';
  feedback.textContent = null;
};
function startTimer() {
  const timeDisplay = document.getElementById('time');
  // let timeRemaining = 60;
  intervalID = setInterval(function () {
    timeRemaining--;
    timeRemaining = Math.max(0, timeRemaining);
    hiddenTimeTracker.textContent = timeRemaining;
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