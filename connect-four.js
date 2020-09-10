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

    console.log('this happens before the loop');

    for (let rowIndex = 0; rowIndex <= 5; rowIndex++){
        for (let colIndex = 0; colIndex <= 6; colIndex++){
            const square = document.querySelector(`#square-${rowIndex}-${colIndex}`);
            square.innerHTML = "";



            let playerNumber = game.getTokenAt(rowIndex, colIndex);
            if (playerNumber === 1) {
                const token = document.createElement("div");
                token.classList.add("token")
                token.classList.add("red")
                square.appendChild(token);

            } else if (playerNumber === 2) {
                const token = document.createElement("div");
                token.classList.add("token")
                token.classList.add("black")
                square.appendChild(token);
            }
        }
    }

    if (game.currentPlayer === 1) {
        clickTargets.classList.remove('black')
        clickTargets.classList.add('red')
    } else if (game.currentPlayer === 2) {
        clickTargets.classList.remove('red')
        clickTargets.classList.add('black')
    }

    for (let colIndex = 0; colIndex < 7; colIndex++) {
        let column = document.getElementById(`column-${colIndex}`);
        if (game.isColumnFull(colIndex)) {
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
        let targetId = e.target.id;
        if (!targetId.startsWith('column-')) return;
        const columnIndex = Number.parseInt(targetId[targetId.length - 1]);
        game.playInColumn(columnIndex);
        updateUI();
    })

})
