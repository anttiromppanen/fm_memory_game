import { create } from "zustand";
import {
	type GameStateType,
	MAX_PLAYERS,
	PLAYERS_SET,
	type PlayersType,
} from "../const/const";
import { isValidNumOfPlayers, isValidPlayer } from "../helpers/validation";

interface IGameStateStore {
	gameState: GameStateType;
	gameScore: Partial<Record<PlayersType, number>>;
	gameBoard: string[][];

	initializeGameScore: (numOfPlayers: number) => void;
	resetGameState: () => void;
	updatePlayerScore: (player: PlayersType) => void;
}

const useGameStateStore = create<IGameStateStore>((set, get) => ({
	gameState: "setup",
	gameScore: { player1: 0 },
	gameBoard: [],

	resetGameState: () => set({ gameScore: { player1: 0 } }),

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
