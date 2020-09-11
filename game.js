import { Column } from './column.js'
import { ColumnWinInspector } from './column-win.js'
import { RowWinInspector } from './row-win.js';


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

    checkForRowWin() {
        if (this.winnerNumber !== 0) return;
        let slice1 = this.columns.slice(0, 4);
        let slice2 = this.columns.slice(1, 5);
        let slice3 = this.columns.slice(2, 6);
        let slice4 = this.columns.slice(3);

        let inspector = []
        inspector.push(slice1, slice2, slice3, slice4)
        inspector.forEach(function (slice) {
            let inspect = new RowWinInspector(slice);
            if (inspect.inspect() === 1) {
                this.winnerNumber = 1;

            } else if (inspect.inspect() === 2) {
                this.winnerNumber = 2;

            }
        })
        // let inspector1 = new RowWinInspector(slice1)
        // let inspector2 = new RowWinInspector(slice2)
        // let inspector3 = new RowWinInspector(slice3)
        // let inspector4 = new RowWinInspector(slice4)
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
        this.checkForColumnWin();
        this.checkForRowWin();

    }

    isColumnFull(colIndex) {
        if (this.winnerNumber === 1 || this.winnerNumber === 2) {
            return true;
        }
        return this.columns[colIndex].isFull();
    }
}
