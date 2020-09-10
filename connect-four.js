import { Game } from './game.js';
import { Column } from './column.js';

let game = undefined;
let boardHolder = document.getElementById("board-holder");
let gameName = document.getElementById("game-name");
let playerOne = document.getElementById('player-1-name')
let playerTwo = document.getElementById('player-2-name')
let newGame = document.getElementById('new-game')
let clickTargets = document.getElementById('click-targets')


function updateUI() {
    if (game === undefined) {
        boardHolder.classList.add("is-invisible");
    } else {
        boardHolder.classList.remove("is-invisible");
        gameName.innerHTML = game.getName();
    }

    if (game.currentPlayer === 1) {
        clickTargets.classList.remove('black')
        clickTargets.classList.add('red')
    } else if (game.currentPlayer === 2) {
        clickTargets.classList.remove('red')
        clickTargets.classList.add('black')
    }

    for (let i = 0; i < 7; i++) {
        let column = document.getElementById(`column-${i}`);
        if (game.isColumnFull()) {
            column.classList.add("full");
        } else {
            column.classList.remove("full");
        }
    }
}

window.addEventListener("DOMContentLoaded", () => {

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

    clickTargets.addEventListener('click', e => {
        let row = e.target.id;
        let rowNum = row.slice(7, 8);
        game.playInColumn()
        Column.getTokenAt(rowNum);
        updateUI()
    })

})
