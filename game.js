import { Column } from './column.js'

export class Game {
    constructor(playerOne, playerTwo, currentPlayer, winnerNumber) {
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
        this.winnerNumber = 0;
    }

    getName() {
        if (this.winnerNumber === 3) {
            return `${this.playerOne} ties with ${this.playerTwo}`
        }
        return `${this.playerOne} vs. ${this.playerTwo}`
    }

    getTokenAt(rowIndex, colIndex) {
        return this.columns[colIndex].getTokenAt(rowIndex);
    }


    checkforTie() {
       let newColumns = [];
       this.columns.every(function (column) {
           newColumns.push(column.isFull());
           console.log(column.isFull())
       })
        //console.log(newColumns);
        if (!newColumns.includes(false)) {
            return this.winnerNumber = 3;
        } else {
            return;
        }
    };




    playInColumn(colIndex) {
        this.columns[colIndex].add(this.currentPlayer);



        if (this.currentPlayer === 1) {
            this.currentPlayer = 2;
        } else {
            this.currentPlayer = 1;
        };

        this.checkforTie()

    }

    isColumnFull(colIndex) {
        return this.columns[colIndex].isFull();
    }
}
