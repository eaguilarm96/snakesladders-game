import readline from "readline";
import { createPlayers } from "./playerCreation";
import { playGame } from "./gameLogic";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const players = createPlayers();
playGame(players, rl);