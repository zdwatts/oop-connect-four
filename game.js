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
            if (inspect(inspectColumn) === 1) {
                this.winnerNumber = 1
                break;
            } else if (inspect(inspectColumn) === 2) {
                this.winnerNumber = 2
                break;
            }
            console.log(inspect(inspectColumn))
        }
    }


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
