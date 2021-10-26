// here I am providing 10 JavaScript related questions so I can use them in my app.
const dataBase = [
  {question: 'Inside which HTML element do we put the JavaScript?', answer: [{text: '<script>', value: true}, {text: '<scripting>', value:false}, {text:'<javascript>', value: false}, {text: '<js>', value: false}]}, {question: 'How do you write "Hello World" in an alert box?', answer: [{text: 'msgBox("Hello World")', value:false}, {text:'msg("Hello World")', value: false}, {text: 'alert("Hello World")', value: true}, {text: 'alertBox("Hello World")', value: false}]}, {question: 'How do you create a function in JavaScript?', answer: [{text: 'myFunction() = function', value:false}, {text:'function myFunction()', value: true}, {text: 'function:myFunction()', value: false}, {text: 'function = myFunction()', value: false}]}, {question: 'How do you call a function named "myFunction"?', answer: [{text: 'myFunction()', value: true}, {text: 'myFunction', value:false}, {text:'call function myFunction()', value: false}, {text: 'call myFunction()', value: false}]}, {question: 'How to write an IF statement in JavaScript?', answer: [{text: 'if i == 5 then', value:false}, {text:'if i = 5', value: false}, {text: 'if i = 5 then', value: false}, {text: 'if (i == 5)', value: true}]}, {question: 'How does a FOR loop start?', answer: [{text: 'for (i = 0; i <= 5)', value:false}, {text: 'for (i = 0; i <= 5; i++)', value: true}, {text:'for (i <= 5; i++)', value: false}, {text: 'for i = 1 to 5', value: false}]}, {question: 'What is the correct way to write a JavaScript array?', answer: [{text: 'var colors = "red", "green", "blue"', value:false}, {text:'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")', value: false}, {text: 'var colors = ["red", "green", "blue"]', value: true}, {text: 'var colors = (1:"red", 2:"green", 3:"blue")', value: false}]}, {question: 'How do you round the number 7.25, to the nearest integer?', answer: [{text: 'rnd(7.25)', value:false}, {text:'Math.rnd(7.25)', value: false}, {text: 'round(7.25)', value: false}, {text: 'Math.round(7.25)', value: true}]}, {question: 'How do you find the number with the highest value of x and y?', answer: [{text: 'Math.max(x, y)', value: true}, {text: 'ceil(x, y)', value:false}, {text:'top(x, y)', value: false}, {text: 'Math.ceil(x, y)', value: false}]}, {question: 'What is the correct JavaScript syntax to change the content of the HTML element "<p id="demo">This is a demonstration.</p>"?', answer: [{text: 'document.getElementByName("p").innerHTML = "Hello World!";', value:false}, {text:'#demo.innerHTML = "Hello World!";', value: false}, {text: 'document.getElementById("demo").innerHTML = "Hello World!";', value: true}, {text: 'document.getElement("p").innerHTML = "Hello World!";', value: false}]}];
// I defined the global variables that I need to use them later in my functions.
var start = document.getElementById('start');
var questions = document.getElementById('content');
var highTime = document.getElementById('high-time');
var high = document.getElementById('high');
var list = document.getElementById('list');
var lastPage = document.getElementById('scores');
var hiddenTimeTracker = document.createElement('div');
hiddenTimeTracker.style.display = 'none';
highTime.appendChild(hiddenTimeTracker);
var feedback = document.getElementById('feedback');
var timeRemaining = 80;
var i = 0;
var answer;
var correctOrWrong;
// this function first clears the screen then depending on how many pairs of key/values are saved in the internal storage, starts creating list of those key/values and displays them to the user. I also added start over button and clear scores button so the user can access them right from this screen.
function highScores() {
  highTime.style.display = 'none';
  questions.style.display = 'none';
  var scores = [];
  for (var x = 0; x < localStorage.length; x++) {
    var key = localStorage.key(x);
    var value = localStorage.getItem(key);
    scores[x] = {name: key, score: value};
    var listScores = document.createElement('li');
    listScores.textContent = key + " : " + value;
    list.appendChild(listScores);
  }
  if (i > 0) {
    gameOver.style.display = 'none';
    feedback.style.display = 'none';
  } else if (i === 0) {
    start.style.display = 'none';
  }
  var StartOver = document.createElement('button');
  StartOver.textContent = "Start Over";
  StartOver.className = 'gameOver-btn';
  lastPage.appendChild(StartOver);
  StartOver.addEventListener('click', function() {
    window.location.reload();
  });
  var clear = document.createElement('button');
  clear.textContent = "Clear Scores";
  clear.className = 'gameOver-btn';
  lastPage.appendChild(clear);
  clear.addEventListener('click', function() {
    localStorage.clear();
    list.innerHTML = "Scores Are Cleared!"
  });
};
// this function is my main function that starts when user clicks on "Start Quiz" button.
var quiz = function() {
  // this function reads the value of the answer that was choosen then shows "Correct" or "Wrong" message to the user. it also adds 1 to i so it goes to the next question until there is no more questions left. if the answer is false it also penalize the time remaining by 10.
  function buildFeedback() {
    feedback.textContent = null;
    i++;
    if (answer) {
      correctOrWrong = "Correct!";
    } else {
      correctOrWrong = "Wrong!";
      timeRemaining = (timeRemaining - 10);
    };
    var showFeedback = document.createElement('span');
    showFeedback.textContent = correctOrWrong;
    feedback.appendChild(showFeedback);
    var timeDisplay = document.getElementById('time');
    timeRemaining = Math.max(0, timeRemaining);
    timeDisplay.innerText = "Time Remaining: " + timeRemaining + " s";
    hiddenTimeTracker.textContent = timeRemaining;
    questionBuilder();
  };
  // this is the first function that runs when the quiz function is started. its main duty is to build questions and displays them on the screen.
  function questionBuilder() {
    // first we check to see if i is still smaller than the number of questions we have. remember we set i to 0 before any function was started.
    if (i < dataBase.length) {
      // if i is less than the number of questions it means we still have questions to ask so we create our question page by picking a question from our question array.
      newDivEl = document.createElement('div');
      newDivEl.className = ('questions');
      questions.appendChild(newDivEl);
      var questionEl = document.createElement('p');
      questionEl.textContent = (dataBase[i].question);
      newDivEl.appendChild(questionEl);
      // here depending on the question that is displayed we create four buttons that each of them holds a text content that user can see and also a value that user can not see and that value determines if the answer is true or false. after each user selection we jump into another function that depending on the user choice do different things.
      var answer1El = document.createElement('button');
      answer1El.textContent = (dataBase[i].answer[0].text);
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
          buildFeedback();
        }
      });
      var answer2El = document.createElement('button');
      answer2El.textContent = (dataBase[i].answer[1].text);
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
          buildFeedback();
        }
      });
      var answer3El = document.createElement('button');
      answer3El.textContent = (dataBase[i].answer[2].text);
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
          buildFeedback();
        }
      });
      var answer4El = document.createElement('button');
      answer4El.textContent = (dataBase[i].answer[3].text);
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
          buildFeedback();
        }
      });
    // if there is no more questions left we need to check to see if there is any time remaining so we can save the score. if no time is remaining the quiz is over and there is no score to be saved.
    } else if (timeRemaining === 0) {
      stopTimer();
    } else {
      noMore();
    }
  }
  questionBuilder();
};
// this function is called when there is no more questions left but still some time is left.
function noMore() {
  // first we stop the timer so the score is read.
  clearInterval(intervalID);
  // then display the page that has the score that user earned and function to save it into local storage.
  var gameOver = document.querySelector('#content');
  gameOver.id = 'gameOver';
  gameOver.className = 'gameOver';
  gameOver.textContent = "No More Questions!";
  var scoreDisplay = document.createElement('span');
  scoreDisplay.textContent = "Your final score is: " + hiddenTimeTracker.textContent;
  scoreDisplay.className = 'score-display';
  gameOver.appendChild(scoreDisplay);
  var scoreEl = document.createElement('div');
  scoreEl.id = 'score';
  gameOver.appendChild(scoreEl);
  var nameEl = document.createElement('input');
  nameEl.id = 'name';
  nameEl.placeholder = "Your Name Here!";
  scoreEl.appendChild(nameEl);
  var gameOverButton = document.createElement('button');
  gameOverButton.textContent = "Save Score";
  gameOverButton.id = 'gameOver-btn';
  gameOverButton.className = 'gameOver-btn';
  scoreEl.appendChild(gameOverButton);
  // this function saves the score earned with the name user typed into the input element. I am also using a hidden element that reads the value from my timer and I can use its text content globaly. 
  gameOverButton.addEventListener('click', function() {
    localStorage.setItem(nameEl.value, hiddenTimeTracker.textContent);
    scoreEl.innerHTML = "Saved!";
    var highDisplay = document.createElement('button');
    highDisplay.textContent = "View High Scores";
    highDisplay.className = 'gameOver-btn';
    gameOver.appendChild(highDisplay);
    highDisplay.addEventListener('click', function() {
      highScores();
    });
  });
  // I also added start over button so the user can access it right from this screen.
  var gameOverStartOver = document.createElement('button');
  gameOverStartOver.textContent = "Start Over";
  gameOverStartOver.id = 'gameOver-sobtn';
  gameOverStartOver.className = 'gameOver-btn';
  gameOver.appendChild(gameOverStartOver);
  gameOverStartOver.addEventListener('click', function() {
    window.location.reload();
  });
};
// this function is called when there is no time left but all questions are not answered. I also added start over button so the user can access it right from this screen.
function stopTimer() {
  clearInterval(intervalID);
  var gameOver = document.querySelector('#content');
  gameOver.className = 'gameOver';
  gameOver.innerHTML = '<span>Time is up!</span>';
  feedback.textContent = null;
  var startOver = document.createElement('button');
  startOver.textContent = "Start Over";
  startOver.className = 'startOver-btn'
  gameOver.appendChild(startOver);
  startOver.addEventListener('click', function() {
    window.location.reload();
  });
};
// this is my timer function. It is set to never go negative.
function startTimer() {
  var timeDisplay = document.getElementById('time');
  intervalID = setInterval(function () {
    timeRemaining--;
    timeRemaining = Math.max(0, timeRemaining);
    timeDisplay.innerText = "Time Remaining: " + timeRemaining + " s";
    if (timeRemaining <= 0) {
      stopTimer();
    }
  }, 1000);
};
// this event listener is calling the high score function when user clicks on "View High Scores".
var highClick = high.addEventListener('click', highScores);
// and finally this is the start button that first clears the screen then calls our start timer and quiz functions.
var startBtn = document.querySelector('#start-btn');
startBtn.addEventListener('click', function(){
  start.style.display = "none";
  startTimer();
  quiz();
});