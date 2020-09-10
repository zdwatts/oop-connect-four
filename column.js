export class Column {
    constructor(tokens) {
        this.tokens = [];
    }

    add() {
        for (let j = 0; j < 7; j++) {
            for (let i = 5; i >= 0; i--) {
                let square = `square-${i}-${j}`;
                if (square.innerHTML === "") {
                    console.log(square)
                }
            }
        }
    }

    getTokenAt() {

    }
}
