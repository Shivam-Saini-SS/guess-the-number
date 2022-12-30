let computerGuess
let userGuess = []
let userGuessUpdate = document.getElementById("text-output")
let userNumberUpdate = document.getElementById("input-box")
let footer = document.getElementById("footer")
let audioNumberGuess = new Audio("./audio/number-guess.wav")
let audioWinGame = new Audio("./audio/game-win.wav")
let audioLoseGame = new Audio("./audio/game-lose.wav")
let audioNewGame = new Audio("./audio/new-game.wav")

const init = () => {
  document.getElementById("new-game-button").style.display = "none"
  document.getElementById("welcome-screen").style.display = "block"
  document.getElementById("game-area").style.display = "none"
  document.getElementById("instructions").style.display = "none"
}

const startGame = () => {
  audioNewGame.play()
  footer.classList.add("hide")
  document.getElementById("playground").style.display = "none"
  document.getElementById("welcome-screen").style.display = "none"
  document.getElementById("game-area").style.display = "block"
  document.getElementById("instructions").style.display = "none"
  document.getElementById("new-game-button").style.display = "none"
  document.getElementById("event-section").style.display = "block"
}

// how to play
const showInstructions = () => {
  footer.classList.add("hide")
  document.getElementById("welcome-screen").style.display = "none"
  document.getElementById("game-area").style.display = "none"
  document.getElementById("instructions").style.display = "block"
}

// reload the page
// const newGameBegin = () => {
//   audioNewGame.play()
//   window.location.reload()
// }

// start a new game
const startNewGame = () => {
  document.getElementById("new-game-button").style.display = "inline"
  document.getElementById("guesses").innerHTML = " - "
  document.getElementById("attempts").innerHTML = " - "
}

// main logic of our app
const compareGuess = () => {
  audioNumberGuess.play()
  const userNumber = Number(document.getElementById("input-box").value)
  userGuess = [...userGuess, userNumber]
  document.getElementById("guesses").innerHTML = userGuess
  document.getElementById("attempts").innerHTML = maxGuess - userGuess.length

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
      userGuessUpdate.innerHTML = `You Win!! 😃<br>The correct number was ${computerGuess}`
      userNumberUpdate.classList.add("hide")
      userNumberUpdate.value = ""
      userGuess = []
      startNewGame()
    }
  } else if (userNumber === computerGuess) {
    audioWinGame.play()
    userGuessUpdate.innerHTML = `You Win 😃!!<br>The correct number was ${computerGuess}`
    userNumberUpdate.classList.add("hide")
    userNumberUpdate.value = ""
    userGuess = []
    startNewGame()
  } else {
    audioLoseGame.play()
    userGuessUpdate.innerHTML = `You Lose!! 😢<br>The correct number was ${computerGuess}`
    userNumberUpdate.classList.add("hide")
    userNumberUpdate.value = ""
    userGuess = []
    startNewGame()
  }

  // document.getElementById("attempts").innerHTML = maxGuess - userGuess.length
}

const easyMode = () => {
  maxGuess = 10
  computerGuess = Math.floor(Math.random() * 100)
  document.getElementById("attempts").innerHTML = maxGuess
  computerGuess = Math.floor(Math.random() * 100)
  document.getElementById("playground").style.display = "block"
  document.getElementById("event-section").style.display = "none"
  userNumberUpdate.classList.remove("hide")
  userNumberUpdate.value = ""
  userGuessUpdate.innerHTML = "All the Best!"
}

const hardMode = () => {
  maxGuess = 5
  computerGuess = Math.floor(Math.random() * 100)
  document.getElementById("attempts").innerHTML = maxGuess
  computerGuess = Math.floor(Math.random() * 100)
  document.getElementById("playground").style.display = "block"
  document.getElementById("event-section").style.display = "none"
  userNumberUpdate.classList.remove("hide")
  userNumberUpdate.value = ""
  userGuessUpdate.innerHTML = "All the Best!"
}

const playHow = () => {
  showInstructions()
}
