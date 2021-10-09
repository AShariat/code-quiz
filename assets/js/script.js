const dataBase = [
  {question: "1-Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, cumque, eius recusandae harum rem repudiandae quis fuga neque, eum autem explicabo illum. Accusantium voluptatem natus id architecto veniam dolor minima.", answer1: "B1", answer2: "C1", answer3: "D1", answer4: "E1"},
  {question: "2-Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, cumque, eius recusandae harum rem repudiandae quis fuga neque, eum autem explicabo illum. Accusantium voluptatem natus id architecto veniam dolor minima.", answer1: "B2", answer2: "C2", answer3: "D2", answer4: "E2"},
  {question: "3-Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, cumque, eius recusandae harum rem repudiandae quis fuga neque, eum autem explicabo illum. Accusantium voluptatem natus id architecto veniam dolor minima.", answer1: "B3", answer2: "C3", answer3: "D3", answer4: "E3"},
  {question: "4-Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, cumque, eius recusandae harum rem repudiandae quis fuga neque, eum autem explicabo illum. Accusantium voluptatem natus id architecto veniam dolor minima.", answer1: "B4", answer2: "C4", answer3: "D4", answer4: "E4"},
  {question: "5-Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, cumque, eius recusandae harum rem repudiandae quis fuga neque, eum autem explicabo illum. Accusantium voluptatem natus id architecto veniam dolor minima.", answer1: "B5", answer2: "C5", answer3: "D5", answer4: "E5"},
  {question: "6-Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, cumque, eius recusandae harum rem repudiandae quis fuga neque, eum autem explicabo illum. Accusantium voluptatem natus id architecto veniam dolor minima.", answer1: "B6", answer2: "C6", answer3: "D6", answer4: "E6"}];
var start = document.getElementById('start');
var questions = document.getElementById('questions');
var quiz = function() {
  for (var i = 0; i < dataBase.length; i++) {
    var newDivEl = document.createElement('div');
    newDivEl.id = ('question');
    newDivEl.className = ('questions');
    questions.appendChild(newDivEl);
    var questionEl = document.createElement('p');
    questionEl.textContent = (dataBase[i].question);
    newDivEl.appendChild(questionEl);
    var answer1El = document.createElement('button');
    answer1El.textContent = (dataBase[i].answer1);
    answer1El.id = ('answer1');
    answer1El.className = 'answers';
    newDivEl.appendChild(answer1El);
    var answer2El = document.createElement('button');
    answer2El.textContent = (dataBase[i].answer2);
    answer2El.id = ('answer2');
    answer2El.className = 'answers';
    newDivEl.appendChild(answer2El);
    var answer3El = document.createElement('button');
    answer3El.textContent = (dataBase[i].answer3);
    answer3El.id = ('answer3');
    answer3El.className = 'answers';
    newDivEl.appendChild(answer3El);
    var answer4El = document.createElement('button');
    answer4El.textContent = (dataBase[i].answer4);
    answer4El.id = ('answer4');
    answer4El.className = 'answers';
    newDivEl.appendChild(answer4El);
  }
};
function stopTimer() {
  clearInterval(intervalID);
  document.querySelector('#questions').innerHTML = '<span>Time is up!</span>';
};
function startTimer() {
  const timeDisplay = document.getElementById('time');
  let timeRemaining = 60;
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