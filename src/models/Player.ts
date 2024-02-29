class Player {
    constructor(public name: string, public position: number = 1) {}

    move(steps: number): void {
        this.position += steps;
    }
}

export default Player;