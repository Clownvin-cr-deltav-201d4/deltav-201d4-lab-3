function quiz() {
  'use strict';

  const YES = 'y';
  const NO = 'n';

  const QUESTION_DATA = [
    ['Is my name Kevin?', NO, 'Correct! I am not called Kevin.', 'No my name isn\'t KEVIN!'],
    ['Have I been writing Java for 11 or more years?', NO, 'Correct, I have only been programming for about 9 or so years.', 'Wrong. I\'ve only been doing it for about 9 or so years.'],
    ['Do I like the game RuneScape?', YES, 'Correct! I do indeed like playing RuneScape!', 'Wrong! I do like RuneScape...'],
    ['Did I start out programming by making franken-bots?', YES, 'Correct! I did indeed make franken-bots, all of which were pretty terrible too.', 'Wrong! I did start out making franken-bots...'],
    ['Do I like web-design?', NO, 'Correct! I am typically not a fan of designing web pages.', 'Wrong! I definitely prefer to work on the back end rather than the front end...']
  ];
  /*
  NOTICE:
  I don't like that this is anonymous, usually I would advocate for code reusab-
  ility by suggestion a constructor function be made somewhere at least, to create
  more "score" object instances, but in this case we are only going to ever have
  the one score tracker, so this anonymous object declaration is fine. I guess.
  */
  var score = {
    points: 0,
    total: 0,
    add(inc = true) {
      console.log(`Incrementing points: ${inc}`);
      if (inc) {
        this.points++;
      }
      this.total++;
    },
    asPercent() {
      return this.points / this.total * 100;
    }
  };

  var name;

  //Array to hold all the question functions
  var questions = [];

  questions.push(() => {
    name = prompt('What\'s your name?');
    while (!name || name.length < 2) {
      name = prompt('No, really, what\'s your name?');
    }
  });

  QUESTION_DATA.forEach((question) => questions.push(() => {
    var guess;
    while (!(guess = prompt(question[0]).toLowerCase()) || !((guess = guess[0]) === YES || guess === NO));
    if (guess === question[1]) {
      alert(question[2]);
      score.add();
    } else {
      alert(question[3]);
      score.add(false);
    }
  }));

  questions.push(() => {
    alert('Now for a little guessing game! You\'ve got 4 guesses, so give it your best!');

    var number = ~~(Math.random() * 33); //~~ == Double NOT operator. Is "fast" Math.floor and always returns number, never NaN (0 if would be NaN)
    var guess;

    console.log(`Expecting number: ${number}`);
    for (var i = 0; i < 4; i++) {
      guess = parseInt(prompt('What number am I thinking of? (0-32)'));
      console.log(`User guessed: ${guess}, actually: ${number}`);
      if (!isNaN(guess) && guess !== number) {
        alert((guess < number ? 'Too low! ' : 'Too high! ') + (i < 3 ? 'Try again!' : 'Better luck next time!'));
      } else if (isNaN(guess)) {
        alert('That\'s not even a real number! ' + (i < 3 ? 'Try again!' : 'Better luck next time!'));
      } else {
        alert('You got it! Awesome!');
        break;
      }
    }
    score.add(i < 4);
  });

  questions.push(() => {

    var knownLanguages = ['java', 'python', 'c', 'html', 'javascript', 'css', 'php'];
    var answers = '';
    var guess;

    for (var i = 0; i < knownLanguages.length; i++) {
      answers += (i === 0 ? '' : ', ') + knownLanguages[i];
    }

    alert('Finally, another little guessing game (but a lot less random!). Guess a programming language that I know.\nYou\'ve got 6 guesses, so give it your best!');
    for (i = 0; i < 6; i++) {
      guess = prompt('Guess a language.').toLowerCase();
      console.log(`User guessed: ${guess}, expecting one of: ${knownLanguages}`);
      if (knownLanguages.indexOf(guess) >= 0) {
        break;
      }
      if (i < 5) {
        alert('Nope! Try again...');
      }
    }
    score.add(i < 6);
    if (i === 6) {
      alert(`Too bad! The correct answers are: ${answers}.`);
    } else {
      alert(`Yay! A list of all correct answers is: ${answers}.`);
    }
  });

  //Now that we're done building the array of question functions, it's time to call them all!
  questions.forEach((question) => question());

  console.log(`${name} scored ${score.asPercent()}%`);

  if (score.points === 7) {
    alert(`Wow, ${name}, you scored all ${score.points} points! Are you stalking me? ;)`);
  } else if (score.points <= 2) {
    alert(`You scored ${score.points} of ${score.total} points, you really don't know a thing about me, ${name}! this page will help!`);
  } else {
    alert(`Nice, ${name}! You scored ${score.points} out of 7 points! Not bad!`);
  }
}
quiz();
