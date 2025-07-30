import { create } from "zustand";
import {
	GAME_STATES_SET,
	type GameStateType,
	MAX_PLAYERS,
	PLAYERS_SET,
	type PlayersType,
} from "../const/const";
import {
	create2dTuplesList,
	initialize2dGameBoard,
	setGameBoard,
} from "../helpers/gameHelpers";
import {
	isValidGameState,
	isValidGridSize,
	isValidNumOfPlayers,
	isValidPlayer,
} from "../helpers/validation";

interface IGameStateStore {
	gameState: GameStateType;
	gameScore: Partial<Record<PlayersType, number>>;
	gameBoard: number[][];
	timer: number;

	updateGameState: (newState: GameStateType) => void;
	initializeGameBoard: (gridSize: number) => void;
	initializeGameScore: (numOfPlayers: number) => void;
	updatePlayerScore: (player: PlayersType) => void;
}

const useGameStateStore = create<IGameStateStore>((set, get) => ({
	gameState: "setup",
	gameScore: { player1: 0 },
	gameBoard: [],
	timer: Infinity,

	updateGameState: (newState: GameStateType) => {
		if (isValidGameState(newState, GAME_STATES_SET)) {
			set({ gameState: newState });
		}
	},

	initializeGameBoard: (gridSize: number) => {
		let gridSizeHelper = gridSize;
		if (!isValidGridSize) gridSizeHelper = 4; // Default to 4 if invalid

		const emptyBoard = initialize2dGameBoard(gridSizeHelper);
		const tuplesList = create2dTuplesList(gridSizeHelper);
		const filledBoard = setGameBoard(emptyBoard, tuplesList);

		if (!filledBoard) {
			throw new Error("Failed to initialize game board.");
		}

		set({ gameBoard: filledBoard });
	},

	initializeGameScore: (numOfPlayers: number) => {
		if (!isValidNumOfPlayers(numOfPlayers, MAX_PLAYERS)) {
			return;
		}

		for (let i = 0; i < numOfPlayers; i++) {
			const player = `player${i + 1}` as PlayersType;
			if (!isValidPlayer(player, PLAYERS_SET)) {
				return;
			}
			set((state) => ({
				gameScore: {
					...state.gameScore,
					[player]: 0,
				},
			}));
		}
	},

	updatePlayerScore: (player: PlayersType) => {
		const state = get();

		// Validate player before updating score
		if (!isValidPlayer(player, PLAYERS_SET) || !(player in state.gameScore)) {
			return;
		}

		set((state) => ({
			gameScore: {
				...state.gameScore,
				[player]: (state.gameScore[player] || 0) + 1,
			},
		}));
	},
}));

export default useGameStateStore;
