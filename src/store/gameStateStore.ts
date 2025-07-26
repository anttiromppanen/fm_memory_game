/**
 * IN PROGRESS
 * This file is not yet complete and is a work in progress.
 * It is not ready for production use.
 */

import { create } from "zustand";
import type { PlayerType } from "../const/types";

interface IGameStateStore {
	gameScore: Partial<Record<PlayerType, number>>;

	setGameScore: (numOfPlayers: number) => void;
	resetGameState: () => void;
	addPlayerScore: (player: PlayerType) => void;
}

const useGameStateStore = create((set) => ({}));
