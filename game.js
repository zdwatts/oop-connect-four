import { Column } from './column.js'
import { ColumnWinInspector } from './column-win.js'


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
        } else if (this.winnerNumber === 1) {
            return `${this.playerOne} wins!`
        } else if (this.winnerNumber === 2) {
            return `${this.playerTwo} wins!`
        }
        return `${this.playerOne} vs. ${this.playerTwo}`
    }

    getTokenAt(rowIndex, colIndex) {
        return this.columns[colIndex].getTokenAt(rowIndex);
    }


    checkforTie() {
        if (this.columns.every(column => column.isFull())) {
            this.winnerNumber = 3;
        }
    }

    checkForColumnWin() {
        if (this.winnerNumber !== 0) {
            return
        }
        for (let i = 0; i < this.columns.length; i++) {
            let column = this.columns[i];
            let inspectColumn = new ColumnWinInspector(column);
            console.log(inspectColumn);
            if (inspectColumn.inspect() === 1) {
                this.winnerNumber = 1
                break;
            } else if (inspectColumn.inspect() === 2) {
                this.winnerNumber = 2
                break;
            }
            console.log(inspectColumn.inspect())


        }
    }


    playInColumn(colIndex) {

        if (this.currentPlayer === 2) {
            this.currentPlayer = 1;
        } else {
            this.currentPlayer = 2;
        };

        console.log(this.columns[colIndex]);

        this.columns[colIndex].add(this.currentPlayer);
        this.checkforTie()
        this.checkForColumnWin(this.columns[colIndex]);

    }

    isColumnFull(colIndex) {
        if (this.winnerNumber === 1 || this.winnerNumber === 2) {
            return true;
        }
        return this.columns[colIndex].isFull();
    }
}
