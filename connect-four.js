class Game {

}

let game = undefined;

window.addEventListener("DOMContentLoaded", () => {
    // let form = document.getElementById('form-holder')
    // form.addEventListener("click", event => {
    // })
    let playerOne = document.getElementById('player-1-name')
    let playerTwo = document.getElementById('player-2-name')
    let newGame = document.getElementById('new-game')
    playerOne.addEventListener("keyup", () => {
        playerTwo.addEventListener("keyup", () => {
            if (playerOne.value && playerTwo.value) {
                newGame.disabled = false
            }
        })
    })
    // document.getElementById("player-2-name")
    //         let newGame = document.getElementById('new-game')
    //         let playerOne = document.getElementById('player-1-name').value
    //         let playerTwo = document.getElementById('player-2-name').value
    //         if (playerOne && playerTwo) {
    //             newGame.disabled = false
    //         }
    //     })
})
