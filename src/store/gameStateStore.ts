/**
 * IN PROGRESS
 * This file is not yet complete and is a work in progress.
 * It is not ready for production use.
 */

import { create } from "zustand";
import type { PlayersType } from "../const/const";

interface IGameStateStore {
	gameScore: Partial<Record<PlayersType, number>>;
	gameBoard: string[][];

	setGameScore: (numOfPlayers: number) => void;
	resetGameState: () => void;
	addPlayerScore: (player: PlayersType) => void;
}

const useGameStateStore = create<IGameStateStore>((set) => ({
	gameScore: { player1: 0 },
	gameBoard: [],

	setGameScore: (numOfPlayers: number) => {},
	resetGameState: () => set({ gameScore: { player1: 0 } }),
	addPlayerScore: (player: PlayersType) => {},
}));
