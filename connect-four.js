import { Game } from './game.js';

let game = undefined;
let boardHolder = document.getElementById("board-holder");
let gameName = document.getElementById("game-name");

function updateUI() {
    if (game === undefined) {
        boardHolder.classList.add("is-invisible");
    } else {
        boardHolder.classList.remove("is-invisible");
        gameName.innerHTML = game.getName();
    }
}

window.addEventListener("DOMContentLoaded", () => {
    let playerOne = document.getElementById('player-1-name')
    let playerTwo = document.getElementById('player-2-name')
    let newGame = document.getElementById('new-game')
    playerOne.addEventListener("keyup", () => {
        playerTwo.addEventListener("keyup", () => {
            if (playerOne.value && playerTwo.value) {
                newGame.disabled = false
            } else {
                newGame.disabled = true;
            }
        })
    })

    newGame.addEventListener("click", () => {
        game = new Game(playerOne.value, playerTwo.value)
        playerOne.value = "";
        playerTwo.value = "";
        newGame.disabled = true;
        updateUI();
    })

})
