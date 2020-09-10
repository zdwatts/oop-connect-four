export class Game {
    constructor(playerOne, playerTwo, currentPlayer) {
        this.playerOne = playerOne;
        this.playerTwo = playerTwo;
        this.currentPlayer = 1;
    }

    getName() {
        return `${this.playerOne} vs. ${this.playerTwo}`
    }

    playInColumn() {
        if (this.currentPlayer === 1) {
            this.currentPlayer = 2;
        } else {
            this.currentPlayer = 1;
        }
    }
}
