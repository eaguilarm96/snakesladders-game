import Game from "./models/Game";
import Player from "./models/Player";
import { Interface } from "readline";

export function playGame(players: Player[], rl: Interface): void {
  const game = new Game(players);

  function playTurn(): void {
    game.printCurrentTurn();

    const steps = Math.floor(Math.random() * 6) + 1;
    console.log(`Rolled ${steps}.`);

    game.movePlayer(steps);

    game.printPlayerPosition();

    game.switchTurn();

    for (const player of players) {
      if (player.position === 100) {
        console.log(`${player.name} wins!`);
        rl.close();
        return;
      }
    }

    console.log("----------------------------");
    rl.question("Next player's turn, press Enter to roll the dice...", () => {
      console.clear();
      playTurn();
    });
  }

  console.log("----------------------------");
  console.log("Snakes and Ladders Game");
  console.log("----------------------------");
  playTurn();
}
