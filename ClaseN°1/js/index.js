   // Tu código JavaScript va aqui.
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    var guesses = document.querySelector('.guesses');
    var lastResult = document.querySelector('.lastResult');
    var lowOrHi = document.querySelector('.lowOrHi');
    var guessSubmit = document.querySelector('.guessSubmit');
    var guessField = document.querySelector('.guessField');
    var guessCount = 1;
    var resetButton;

    function checkGuess() {
      var userGuess = Number(guessField.value);
      if (guessCount === 1) {
        guesses.textContent = 'Intentos anteriores: ';
      }

      guesses.textContent += userGuess + ' ';

      if (userGuess === randomNumber) {
        lastResult.textContent = '¡Felicidades! ¡Lo adivinaste!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
      } else if (guessCount === 10) {
        lastResult.textContent = '¡¡¡Fin del juego!!!';
        lowOrHi.textContent = '';
        setGameOver();
      } else {
        lastResult.textContent = '¡Equivocado!';
        lastResult.style.backgroundColor = 'red';
        if(userGuess < randomNumber) {
          lowOrHi.textContent='¡El numero es muy bajo!' ;
        } else if(userGuess > randomNumber) {
          lowOrHi.textContent = 'El numero es muy grande!';
        }
      }

      guessCount++;
      guessField.value = '';
    }

    guessSubmit.addEventListener('click', checkGuess);

    function setGameOver() {
      guessField.disabled = true;
      guessSubmit.disabled = true;
      resetButton = document.createElement('button');
      resetButton.textContent = 'Iniciar nuevo juego';
      document.body.appendChild(resetButton);
      resetButton.addEventListener('click', resetGame);
    }

    function resetGame() {
      guessCount = 1;
      var resetParas = document.querySelectorAll('.resultParas p');
      for(let i = 0 ; i < resetParas.length ; i++) {
        resetParas[i].textContent='';
      }

      resetButton.parentNode.removeChild(resetButton);
      guessField.disabled = false;
      guessSubmit.disabled = false;
      guessField.value='';
      guessField.focus();
      lastResult.style.backgroundColor='white';
      randomNumber=Math.floor(Math.random() * 100) + 1;
    }
const para = document.querySelector('h2');

para.addEventListener('click', updateName);

function updateName() {
  let name = prompt('Ingresa un nuevo nombre');
  para.textContent = 'Player 1: ' + name;
}