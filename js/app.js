'use strict';

var YES = 'y';
var NO = 'n';

function evaluateQuestion(question, expected, onTrue, onFalse) {
  var answer = getAnswer(question);
  if (answer === expected) {
    console.log(`User answered question "${question}" correctly!`);
    onTrue();
    return 1;
  }
  console.log(`User answered question "${question}" incorrectly... :(`);
  onFalse();
  return 0;
}

function getAnswer(question) {
  var prefix = prompt(question).toLowerCase()[0];
  if (prefix !== YES && prefix !== NO) {
    alert('You must answer yes, or no (y/n)... try again...');
    return getAnswer(question);
  }
  return prefix;
}

function quiz() {

  var points = 0;

  points += evaluateQuestion('Is my name Kevin?', NO,
    () => alert('Correct! I am NOT named Kevin....'),
    () => alert('Wrong! How dare you call me Kevin!'));

  points += evaluateQuestion('Have I been writing Java code for 10 years?', NO,
    () => alert('Correct! I\'ve only been writing Java code for 9 or so years. (close enough though, right?)'),
    () => alert('Wrong! I\'ve only been coding for about 8-9 years.'));

  points += evaluateQuestion('Do I like the game RuneScape?', YES,
    () => alert('Correct! I do indeed like playing RuneScape!'),
    () => alert('Wrong! I do like RuneScape...'));

  points += evaluateQuestion('Did I start out programming by making franken-bots?', YES,
    () => alert('Correct! I did indeed make franken-bots, all of which were pretty terrible too.'),
    () => alert('Wrong! I did start out making franken-bots...'));

  points += evaluateQuestion('Do I like web-design?', NO,
    () => alert('Correct! I am typically not a fan of designing web pages.'),
    () => alert('Wrong! I definitely prefer to work on the back end rather than the front end...'));

  var score = (points / 5) * 100;
  console.log(`User recieved ${points} of 5 points, scoring ${score}%`);
  alert(`Congratz! You got ${points} out of 5 points, for a score of ${score}%. Yay!`);
}

//alert('Carefully read the paragraph below, then press "Take Quiz" to take the quiz.');
