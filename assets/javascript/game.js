    var $game = document.getElementById("game")

    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
      "s", "t", "u", "v", "w", "x", "y", "z"
    ];

    var wins = 0;
    var losses = 0;
    var lettersGuessed = []
    var guessesLeft = 10;
    var guessesUsed = 0;

    // make a function that picks a new letter and starts a new game
    function newGame() {

      // pick new letter and store it 
      var alphabetIndex = Math.floor(Math.random() * computerChoices.length);
      computerLetter = computerChoices[alphabetIndex];

      // On newGame, reset these specific variables

      guessesLeft = 10;
      guessesUsed = 0;
      lettersGuessed = [];

      $game.innerHTML = `<div class = "text-light mt-3">
      <strong>You Guessed This Time:</strong><br/>
      <strong>You Have Previously Guessed:</strong> ${lettersGuessed}<br/>
      <Strong>Guesses Left:</strong> ${guessesLeft}<br/>
      <strong>Wins:</strong> ${wins}<br/>
      <strong>Losses:</strong> ${losses}<br/></div>
      `;
    }

    newGame();

    document.onkeyup = function (event) {
      var userGuess = event.key;

      // check if user pressed valid letter
      if (!computerChoices.includes(userGuess)) {
        alert("you didn't press the right key, press something a-z");
        return false;
      }

      lettersGuessed.push(userGuess);

      if (userGuess === computerLetter) {
        wins++;
        alert("Congratulations! You Are Psychic")
        newGame();
      } else if (userGuess != computerLetter) {
        guessesUsed++;
        guessesLeft--;


        $game.innerHTML = `<div class = "text-light mt-3">
    <strong>You Guessed This Time:</strong> ${userGuess}<br/>
    <strong class = "letterguess">You Have Previously Guessed:</strong> ${lettersGuessed}<br/>
    <Strong>Guesses Left:</strong> ${guessesLeft}<br/>
    <strong>Wins:</strong> ${wins}<br/>
    <strong>Losses:</strong> ${losses}<br/>
    `;
      }

      if (guessesLeft <= 0) {
        losses++;
        alert("You Are Not a Psychic!")
        newGame();
      }

    }