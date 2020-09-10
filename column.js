import { Game } from "./game.js"

export class Column {
    constructor() {
        this.tokens = [null, null, null, null, null, null];
    }

    add(currentPlayer) {
        for (let i = 5; i >= 0; i--) {
            if (i === null) {
                i = currentPlayer
            }
        }
    }

    getTokenAt(rowNum) {
        return this.tokens[rowNum];
    }
}
