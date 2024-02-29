import Player from "./Player";

class Game {
  private players: Player[] = [];
  public currentPlayerIndex: number = 0;
  private readonly winningSquare: number = 100;

  constructor(players: Player[]) {
    this.players = players;
  }

  movePlayer(steps: number): void {
    const currentPlayer = this.players[this.currentPlayerIndex];
    const newPosition = currentPlayer.position + steps;

    if (newPosition <= this.winningSquare) {
      currentPlayer.move(steps);
      console.log(`${currentPlayer.name} moves ${steps} spaces.`);
    } else {
      console.log(
        `${currentPlayer.name} cannot move ${steps} spaces. They would exceed the winning square.`
      );
    }

    if (currentPlayer.position === this.winningSquare) {
      console.log(`${currentPlayer.name} has won the game!`);
      return; //if player wins the game stops
    }
  }

  getCurrentPlayerPosition(): number {
    const currentPlayer = this.players[this.currentPlayerIndex];
    return currentPlayer.position;
  }

  switchTurn(): void {
    this.currentPlayerIndex =
      (this.currentPlayerIndex + 1) % this.players.length;
  }

  printCurrentTurn(): void {
    const currentPlayer = this.players[this.currentPlayerIndex];
    console.log(`It's ${currentPlayer.name}'s turn.`);
  }

  printPlayerPosition(): void {
    const currentPlayer = this.players[this.currentPlayerIndex];
    console.log(
      `${currentPlayer.name} is at position ${currentPlayer.position}.`
    );
  }
}

export default Game;
