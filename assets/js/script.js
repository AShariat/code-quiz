var question1 = {
  question: "1-Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, cumque, eius recusandae harum rem repudiandae quis fuga neque, eum autem explicabo illum. Accusantium voluptatem natus id architecto veniam dolor minima.",
  answer1: "B1",
  answer2: "C1",
  answer3: "D1",
  answer4: "E1"
};
var question2 = {
  question: "2-Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, cumque, eius recusandae harum rem repudiandae quis fuga neque, eum autem explicabo illum. Accusantium voluptatem natus id architecto veniam dolor minima.",
  answer1: "B2",
  answer2: "C2",
  answer3: "D2",
  answer4: "E2"
};
var question3 = {
  question: "3-Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, cumque, eius recusandae harum rem repudiandae quis fuga neque, eum autem explicabo illum. Accusantium voluptatem natus id architecto veniam dolor minima.",
  answer1: "B3",
  answer2: "C3",
  answer3: "D3",
  answer4: "E3"
};
var question4 = {
  question: "4-Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, cumque, eius recusandae harum rem repudiandae quis fuga neque, eum autem explicabo illum. Accusantium voluptatem natus id architecto veniam dolor minima.",
  answer1: "B4",
  answer2: "C4",
  answer3: "D4",
  answer4: "E4"
};
var question5 = {
  question: "5-Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, cumque, eius recusandae harum rem repudiandae quis fuga neque, eum autem explicabo illum. Accusantium voluptatem natus id architecto veniam dolor minima.",
  answer1: "B5",
  answer2: "C5",
  answer3: "D5",
  answer4: "E5"
};
var question6 = {
  question: "6-Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, cumque, eius recusandae harum rem repudiandae quis fuga neque, eum autem explicabo illum. Accusantium voluptatem natus id architecto veniam dolor minima.",
  answer1: "B6",
  answer2: "C6",
  answer3: "D6",
  answer4: "E6"
};
var questions = [question1, question2, question3, question4, question5, question6];
var quiz = function() {
  var question = document.getElementById('questions');
  for (var i = 0; i < questions.length; i++) {
    var questionEl = document.createElement('p');
    questionEl.textContent = (questions[i].question);
    question.appendChild(questionEl);
    var answer1El = document.createElement('button');
    answer1El.textContent = (questions[i].answer1);
    question.appendChild(answer1El);
    var answer2El = document.createElement('button');
    answer2El.textContent = (questions[i].answer2);
    question.appendChild(answer2El);
    var answer3El = document.createElement('button');
    answer3El.textContent = (questions[i].answer3);
    question.appendChild(answer3El);
    var answer4El = document.createElement('button');
    answer4El.textContent = (questions[i].answer4);
    question.appendChild(answer4El);
  }
};
var start = document.getElementById('start');
var startBtn = document.querySelector('#start-btn');
startBtn.addEventListener('click', function(){
  quiz();
  start.style.display = "none";
  // .style.display = "block";
});