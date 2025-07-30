import { create } from "zustand";
import { GRID_SIZES_SET } from "../const/const";
import { initialize2dGameBoard } from "../helpers/gameHelpers";
import { errorLogger } from "../helpers/logger";
import { isValidGridSize } from "../helpers/validation";

interface IPairGuessStateStore {
	pairGuessState: number[][];
	guessedPairsTotal: number;
	numOfGuesses: number;

	initializePairGuessState: (gridSize: number) => void;
	getGuessStateByCell: (i: number, j: number) => number | undefined;
	addGuessedPair: (i1: number, j1: number, i2: number, j2: number) => void;
	incrementNumOfGuesses: (numOfPlayers: number) => void;
}

function isOutOfBounds(i: number, j: number, guessArray: number[][]) {
	return i > guessArray.length - 1 || j > guessArray[i].length - 1;
}

const usePairGuessStateStore = create<IPairGuessStateStore>((set, get) => ({
	pairGuessState: [],
	guessedPairsTotal: 0,
	numOfGuesses: 0,

	initializePairGuessState: (gridSize: number) => {
		let gridSizeHelper = gridSize;
		if (!isValidGridSize(gridSize, GRID_SIZES_SET)) {
			gridSizeHelper = 4;
		}
		set({ pairGuessState: initialize2dGameBoard(gridSizeHelper) });
	},

	getGuessStateByCell: (i: number, j: number) => {
		const state = get();
		if (isOutOfBounds(i, j, state.pairGuessState)) {
			errorLogger("getGuessStateByCell out of bounds");
			return;
		}
		return state.pairGuessState[i][j];
	},

	addGuessedPair: (i1: number, j1: number, i2: number, j2: number) => {
		const state = get();
		if (
			isOutOfBounds(i1, j1, state.pairGuessState) ||
			isOutOfBounds(i2, j2, state.pairGuessState)
		) {
			errorLogger("getGuessStateByCell out of bounds");
			return;
		}
		set((state) => {
			const newPairGuessState = [...state.pairGuessState];

			newPairGuessState[i1] = [...newPairGuessState[i1]];
			newPairGuessState[i2] = [...newPairGuessState[i2]];

			newPairGuessState[i1][j1] = 1;
			newPairGuessState[i2][j2] = 1;

			return {
				pairGuessState: newPairGuessState,
				guessedPairsTotal: state.guessedPairsTotal + 1,
			};
		});
	},

	incrementNumOfGuesses: (numOfPlayers: number) => {
		// Total guesses only shown  on singleplayer mode
		if (numOfPlayers > 1) return;
		set((state) => ({ numOfGuesses: state.numOfGuesses + 1 }));
	},
}));

export default usePairGuessStateStore;
