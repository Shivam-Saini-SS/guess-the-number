let computerGuess
let userGuess = []
let userGuessUpdate = document.getElementById("text-output")
let userNumberUpdate = document.getElementById("input-box")
let audioNumberGuess = new Audio("./audio/number-guess.wav")
let audioWinGame = new Audio("./audio/game-win.wav")
let audioLoseGame = new Audio("./audio/game-lose.wav")
let audioNewGame = new Audio("./audio/new-game.wav")

const init = () => {
  computerGuess = Math.floor(Math.random() * 100)
  document.getElementById("new-game-button").style.display = "none"
  document.getElementById("game-area").style.display = "none"
}

const startGame = () => {
  audioNewGame.play()
  document.getElementById("welcome-screen").style.display = "none"
  document.getElementById("game-area").style.display = "block"
}

// reload the page
const newGameBegin = () => {
  audioNewGame.play()
  window.location.reload()
}

// start a new game
const startNewGame = () => {
  document.getElementById("new-game-button").style.display = "inline"
  userNumberUpdate.setAttribute("disabled", true)
}

// main logic of our app
const compareGuess = () => {
  audioNumberGuess.play()
  const userNumber = Number(document.getElementById("input-box").value)
  userGuess = [...userGuess, userNumber]
  document.getElementById("guesses").innerHTML = userGuess

  // check the value low or high
  if (userGuess.length < maxGuess) {
    if (userNumber > computerGuess) {
      userGuessUpdate.innerHTML = "Your Guess is High 😲"
      userNumberUpdate.value = ""
    } else if (userNumber < computerGuess) {
      userGuessUpdate.innerHTML = "Your Guess is Low 😔"
      userNumberUpdate.value = ""
    } else {
      audioWinGame.play()
      userGuessUpdate.innerHTML = "Yay! It's correct 😃"
      userNumberUpdate.value = ""
      startNewGame()
    }
  } else {
    if (userNumber > computerGuess) {
      audioLoseGame.play()
      userGuessUpdate.innerHTML = `You Lose!! The correct number was ${computerGuess}`
      userNumberUpdate.value = ""
      startNewGame()
    } else if (userNumber === computerGuess) {
      audioWinGame.play()
      userGuessUpdate.innerHTML = "Yay! It's correct 😃"
      userNumberUpdate.value = ""
      startNewGame()
    } else {
      audioLoseGame.play()
      userGuessUpdate.innerHTML = `You Lose!! The correct number was ${computerGuess}`
      userNumberUpdate.value = ""
      startNewGame()
    }
  }

  document.getElementById("attempts").innerHTML = userGuess.length
}

const easyMode = () => {
  audioNumberGuess.play()
  maxGuess = 10
  startGame()
}

const hardMode = () => {
  audioNumberGuess.play()
  maxGuess = 5
  startGame()
}
