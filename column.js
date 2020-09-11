import { Game } from "./game.js"

export class Column {
    constructor() {
        this.tokens = [null, null, null, null, null, null];
    }

    add(playerNum) {
        for (let i = 5; i >= 0; i--) {

            if (this.tokens[i] === null) {
                this.tokens[i] = playerNum;
                // console.log(this.tokens);
                break;
            }
        }
    }



    getTokenAt(rowNum) {
        return this.tokens[rowNum];
    }

    isFull() {
        return this.tokens[0] !== null;
    }
}
