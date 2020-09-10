import { Game } from "./game.js"

export class Column {
    constructor() {
        this.tokens = [null, null, null, null, null, null];
    }

    add(playerNum) {
        for (let i = 5; i >= 0; i--) {
            if (i === null) {
                i = playerNum
            }
        }
    }

    getTokenAt(rowNum) {
        return this.tokens[rowNum];
    }

    isFull() {
        if (!this.tokens.includes(null)) {
            return true;
        } else {
            return false;
        }
    }
}
 