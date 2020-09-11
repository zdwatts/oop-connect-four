export class ColumnWinInspector {
    constructor(Column) {
        this.Column = Column;
    }

    inspect() {
        for (let i = 0; i < 6; i += 7) {
            if (
                this.Column[i] === this.Column[i + 1] &&
                this.Column[i] === this.Column[i + 2] &&
                this.Column[i] === this.Column[i + 3]
            ) { return this.Column[i] }
        }
    }
}
