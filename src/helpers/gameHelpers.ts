import { GRID_SIZES_SET } from "../const/const";
import { isValidGridSize } from "./validation";

/**
 * Initializes a 2D game board with zero's with the specified grid size.
 */
export const initialize2dGameBoard = (gridSize: number): number[][] => {
	let gridSizeHelper = gridSize;
	if (!isValidGridSize(gridSize, GRID_SIZES_SET)) {
		gridSizeHelper = 4; // Default to 4 if invalid
	}

	// Create a 2D array filled with zeros
	return Array.from({ length: gridSizeHelper }, () =>
		Array.from({ length: gridSizeHelper }, () => 0),
	);
};

export const printGameBoard = (board: number[][]): void => {
	console.log("");
	board.forEach((row) => {
		console.log(row.join(" | "));
	});
	console.log("");
};

/**
 * Shuffles an array using the Fisher-Yates algorithm.
 * This function modifies the original array and returns it.
 * @summary Used for the tuples list to randomize the order of coordinates.
 */
export const fisherYatesShuffle = (
	array: [number, number][],
): [number, number][] => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]]; // Swap elements
	}
	return array;
};

/**
 * Creates a list of 2D tuples representing (x, y) coordinates in a grid of the specified size.
 * The tuples are shuffled to randomize their order.
 */
export const create2dTuplesList = (gridSize: number): [number, number][] => {
	let gridSizeHelper = gridSize;
	if (!isValidGridSize(gridSize, GRID_SIZES_SET)) {
		gridSizeHelper = 4; // Default to 4 if invalid
	}

	const tuples: [number, number][] = [];
	for (let i = 0; i < gridSizeHelper; i++) {
		for (let j = 0; j < gridSizeHelper; j++) {
			tuples.push([i, j]);
		}
	}

	return fisherYatesShuffle(tuples); // Shuffle the tuples to randomize their order
};

export const setGameBoard = (
	board: number[][],
	tuplesList: [number, number][],
) => {
	let i = 0;
	while (tuplesList.length > 1) {
		const first = tuplesList.shift() as [number, number];
		const second = tuplesList.shift() as [number, number];
		board[first[0]][first[1]] = i;
		board[second[0]][second[1]] = i;
		i++;
	}
	return board;
};
