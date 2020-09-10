import { Column } from './column.js'

export class Game {
    constructor(playerOne, playerTwo, currentPlayer) {
        this.playerOne = playerOne;
        this.playerTwo = playerTwo;
        this.currentPlayer = 1;
        this.columns = [
            new Column(),
            new Column(),
            new Column(),
            new Column(),
            new Column(),
            new Column(),
            new Column(),
        ]
    }

    getName() {
        return `${this.playerOne} vs. ${this.playerTwo}`
    }

    getTokenAt(rowIndex, colIndex) {
        return this.columns[colIndex].getTokenAt[rowIndex];
    }

    playInColumn(colIndex) {
        this.columns[colIndex].add(this.currentPlayer);

        if (this.currentPlayer === 1) {
            this.currentPlayer = 2;
        } else {
            this.currentPlayer = 1;
        }
    }

    isColumnFull(colIndex) {
        return this.columns[colIndex].isFull();
    }
}
