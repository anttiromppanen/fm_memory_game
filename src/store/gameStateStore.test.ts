import { beforeEach, describe, expect, it } from "vitest";
import { MAX_PLAYERS, PLAYERS_SET, type PlayersType } from "../const/const";
import useGameStateStore from "./gameStateStore";

describe("GameStateStore", () => {
	beforeEach(() => {
		// Reset the store before each test
		useGameStateStore.setState({
			gameScore: { player1: 0 },
			gameBoard: [],
		});
	});

	it("should initialize with default values", () => {
		const { gameScore, gameBoard } = useGameStateStore.getState();
		expect(gameScore).toEqual({ player1: 0 });
		expect(gameBoard).toEqual([]);
	});

	it("should initialize game score for multiple players", () => {
		const numOfPlayers = MAX_PLAYERS;
		useGameStateStore.getState().initializeGameScore(numOfPlayers);

		const gameScore = useGameStateStore.getState().gameScore;
		const initializedPlayers = Object.keys(gameScore);

		expect(initializedPlayers.length).toBe(numOfPlayers);

		initializedPlayers.forEach((player) => {
			expect(gameScore[player as PlayersType]).toBe(0);
			expect(PLAYERS_SET.has(player as PlayersType)).toBe(true);
		});
	});

	it("should fail to initialize game score with invalid number of players", () => {
		const minNumOfPlayers = 0; // Invalid because it is less than 1
		const maxNumOfPlayers = MAX_PLAYERS + 1; // Invalid because it exceeds MAX_PLAYERS

		useGameStateStore.getState().initializeGameScore(minNumOfPlayers);
		expect(useGameStateStore.getState().gameScore).toEqual({ player1: 0 }); // Default value should remain unchanged
		useGameStateStore.getState().initializeGameScore(maxNumOfPlayers);
		expect(useGameStateStore.getState().gameScore).toEqual({ player1: 0 }); // Default value should remain unchanged
	});

	it("should update player score", () => {
		useGameStateStore.getState().initializeGameScore(2);

		useGameStateStore.getState().updatePlayerScore("player1");
		useGameStateStore.getState().updatePlayerScore("player1");
		expect(useGameStateStore.getState().gameScore.player1).toBe(2);

		useGameStateStore.getState().updatePlayerScore("player2");
		useGameStateStore.getState().updatePlayerScore("player2");
		useGameStateStore.getState().updatePlayerScore("player2");
		expect(useGameStateStore.getState().gameScore.player2).toBe(3);
	});

	it("should not update score for invalid player", () => {
		useGameStateStore.getState().updatePlayerScore("player2" as PlayersType);
		expect(useGameStateStore.getState().gameScore).toEqual({ player1: 0 });
	});
});
