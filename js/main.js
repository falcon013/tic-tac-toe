let boxes = Array.from(document.getElementsByClassName('item'))
let playText = document.getElementById('playText')


let spaces = []
const O_TEXT = "O"
const X_TEST = "X"
let currentPlayer = O_TEXT

const drawBoard = () => {
  boxes.forEach((box, index) => {
    var styleString = ""
    if (index < 3) {
      styleString += `border-bottom: 5px solid blue;`;
    }
    if (index % 3 === 0) {
      styleString += `border-right: 5px solid blue;`;
    }
    if (index % 3 === 2) {
     styleString += `border-left: 5px solid blue;`;
    }
    if (index > 5) {
      styleString += `border-top: 5px solid blue;`;
    }
    box.style = styleString;
    box.addEventListener('click',clickedBox)
  })
}

const clickedBox = (e) => {
  var id = e.target.id
  if (!spaces[id]) {
    spaces[id] = currentPlayer
    e.target.innerText = currentPlayer

    if (playerHasWon()) {
      playText.innerText = `${currentPlayer}: HAS WON!!!`
      setTimeout(()=> {
        restart()
      },3000)
      return
    }
    currentPlayer = currentPlayer === O_TEXT ? X_TEST : O_TEXT
  }
}

const playerHasWon = () => {
  if (spaces[0] === currentPlayer) {
    if (spaces[1] === currentPlayer && spaces[2] === currentPlayer) {
      return true
    }
    if (spaces[3] === currentPlayer && spaces[6] === currentPlayer) {
      return true
    }
    if (spaces[4] === currentPlayer && spaces[8] === currentPlayer) {
      return true
    }
  }
  if (spaces[8] === currentPlayer) {
    if (spaces[6] === currentPlayer && spaces[7] === currentPlayer) {
      return true
    }
    if (spaces[2] === currentPlayer && spaces[5] === currentPlayer) {
      return true
    }
  }
  if (spaces[4] === currentPlayer) {
    if (spaces[1] === currentPlayer && spaces[7]) {
     return  true
    }
    if (spaces[3] === currentPlayer && spaces[5]) {
     return  true
    }
    if (spaces[2] === currentPlayer && spaces[6]) {
      return  true
    }
  }
}

 const restart = () => {
   spaces.forEach((space,index) => spaces[index] = null )
   boxes.forEach((box) => {
     box.innerText = ""
   })
   playText.innerText = "Lets play"
   currentPlayer = O_TEXT
 }
restart()
drawBoard()


