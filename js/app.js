'use strict';

var YES = 'y';
var NO = 'n';
var score = 0;
function askQuestion(question, answer, correctGuess, wrongGuess){
  var guess;
  while (!(guess = prompt(question).toLowerCase()) || ((guess=guess[0])!==YES && guess !==NO));

  if( guess === answer){
    alert(correctGuess);
    score++;
  }
  else{ 
    alert(wrongGuess);
  }
}
function quiz(){


var name = prompt('What\'s your name?');

while (name.length < 2) {
  name = prompt('No really, what\'s your name?');
}

var i;

var ynQuestions = [
  ['Is my name Kevin?', NO, 'Correct! I am not called Kevin.', 'No my name isn\'t KEVIN!'],
  ['Have I been writing Java for 11 or more years?', NO, 'Correct, I have only been programming for about 9 or so years.', 'Wrong. I\'ve only been doing it for about 9 or so years.'],
  ['Do I like the game RuneScape?', YES, 'Correct! I do indeed like playing RuneScape!', 'Wrong! I do like RuneScape...'],
  ['Did I start out programming by making franken-bots?', YES, 'Correct! I did indeed make franken-bots, all of which were pretty terrible too.', 'Wrong! I did start out making franken-bots...'],
  ['Do I like web-design?', NO, 'Correct! I am typically not a fan of designing web pages.', 'Wrong! I definitely prefer to work on the back end rather than the front end...']
];




for (i = 0; i < ynQuestions.length; i++) {
  askQuestion(ynQuestions[i][0], ynQuestions[i][1],ynQuestions[i][2],ynQuestions[i][3]);
  
}

alert('Now for a little guessing game! You\'ve got 4 guesses, so give it your best!');

var number = ~~(Math.random() * 33); //~~ == Double NOT operator. Is fast Math.floor and always returns number, never NaN (0 if would be NaN)
var guess;

console.log(`Expecting number: ${number}`);
for (i = 0; i < 4; i++) {
  guess = parseInt(prompt('What number am I thinking of? (0-32)'));
  console.log(`User guessed: ${guess}, actually: ${number}`);
  if (guess < number) {
    alert('Too low! ' + (i < 3 ? 'Try again!' : 'Better luck next time!'));
  } else if (guess > number) {
    alert('Too high! ' + (i < 3 ? 'Try again!' : 'Better luck next time!'));
  } else if (isNaN(guess) || guess === Infinity) {
    alert('That\'s not even a real number! ' + (i < 3 ? 'Try again!' : 'Better luck next time!'));
  } else {
    alert('You got it! Awesome!');
    score++;
    break;
  }
}

var knownLanguages = ['java', 'python', 'c', 'html', 'javascript', 'css', 'php'];
var answers = '';

for (i = 0; i < knownLanguages.length; i++) {
  answers += (i === 0 ? '' : ', ') + knownLanguages[i];
}

alert('Finally, another little guessing game (but a lot less random!). Guess a programming language that I know.\nYou\'ve got 6 guesses, so give it your best!');
for (i = 0; i < 6; i++) {
  guess = prompt('Guess a language.').toLowerCase();
  console.log(`User guessed: ${guess}, expecting one of: ${knownLanguages}`);
  if (knownLanguages.indexOf(guess) >= 0) {
    break;
  }
  alert('Nope! Try again...');
}
if (i === 6) {
  alert(`Too bad! The correct answers are: ${answers}.`);
} else {
  alert(`Yay! A list of all correct answers is: ${answers}.`);
  score++;
}

if (score === 7) {
  alert(`Wow, ${name}, you scored all 7 points! Are you stalking me? ;)`);
} else if (score <= 2) {
  alert(`You scored ${score} of 7 points, you really don't know a thing about me, ${name}! this page will help!`);
} else {
  alert(`Nice, ${name}! You scored ${score} out of 7 points! Not bad!`);
}
}
quiz();