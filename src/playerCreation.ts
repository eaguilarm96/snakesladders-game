import Player from "./models/Player";

export function createPlayers(): Player[] {
    const player1 = new Player("Player 1");
    const player2 = new Player("Player 2");
    return [player1, player2];
}