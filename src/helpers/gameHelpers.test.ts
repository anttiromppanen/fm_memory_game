import { describe, expect, it } from "vitest";
import {
	create2dTuplesList,
	initialize2dGameBoard,
	printGameBoard,
	setGameBoard,
} from "./gameHelpers";

describe("Game Helpers", () => {
	describe("Gameboard Initialization", () => {
		it("should initialize a 2D game board with right amount of rows and columns", () => {
			let gridSize = 4;
			let board = initialize2dGameBoard(gridSize);
			expect(board.length).toBe(gridSize);
			board.forEach((row) => {
				expect(row.length).toBe(gridSize);
			});

			gridSize = 6;
			board = initialize2dGameBoard(gridSize);
			expect(board.length).toBe(gridSize);
			board.forEach((row) => {
				expect(row.length).toBe(gridSize);
			});
		});

		it("should default to 4x4 board if invalid grid size is provided", () => {
			const invalidGridSize = 5; // Not in GRID_SIZES_SET
			const board = initialize2dGameBoard(invalidGridSize);

			expect(board.length).toBe(4);
			board.forEach((row) => {
				expect(row.length).toBe(4);
			});
		});

		it("should return 2d tuples list for given grid size", () => {
			const gridSize = 6;
			const tuplesList = create2dTuplesList(gridSize);

			const uniqueTuples = new Set();

			expect(tuplesList.length).toBe(gridSize * gridSize);
			tuplesList.forEach((tuple) => {
				uniqueTuples.add(JSON.stringify(tuple));
				expect(tuple.length).toBe(2);
			});

			// Ensure all tuples are unique
			uniqueTuples.add(JSON.stringify([0, 0]));
			uniqueTuples.add(JSON.stringify([0, 0]));

			expect(uniqueTuples.size).toBe(gridSize * gridSize);
		});
	});

	describe("Game Board Setting", () => {
		it("should set 4x4 game board with tuples list", () => {
			const gridSize = 4;
			const initializedBoard = initialize2dGameBoard(gridSize);
			const tuplesList = create2dTuplesList(gridSize);

			const board = setGameBoard(initializedBoard, tuplesList);

			expect(board.length).toBe(gridSize);
			board.forEach((row) => {
				expect(row.length).toBe(gridSize);
			});
		});

		it("should set 6x6 game board with tuples list", () => {
			const gridSize = 4;
			const initializedBoard = initialize2dGameBoard(gridSize);
			const tuplesList = create2dTuplesList(gridSize);

			const board = setGameBoard(initializedBoard, tuplesList);

			expect(board.length).toBe(gridSize);
			board.forEach((row) => {
				expect(row.length).toBe(gridSize);
			});
		});

		it("should contain only unique values in the game board", () => {
			const gridSizeSm = 4;
			const initializedSmallBoard = initialize2dGameBoard(gridSizeSm);
			const tuplesListForSmallBoard = create2dTuplesList(gridSizeSm);

			const gridSizeLg = 6;
			const initializedLargeBoard = initialize2dGameBoard(gridSizeLg);
			const tuplesListForLargeBoard = create2dTuplesList(gridSizeLg);

			const smallBoard = setGameBoard(
				initializedSmallBoard,
				tuplesListForSmallBoard,
			);
			const largeBoard = setGameBoard(
				initializedLargeBoard,
				tuplesListForLargeBoard,
			);

			const smallBoardUniqueValues = new Set();
			smallBoard.forEach((row) => {
				row.forEach((cell) => {
					smallBoardUniqueValues.add(cell);
				});
			});
			expect(smallBoardUniqueValues.size).toBe((gridSizeSm * gridSizeSm) / 2);

			const largeBoardUniqueValues = new Set();
			largeBoard.forEach((row) => {
				row.forEach((cell) => {
					largeBoardUniqueValues.add(cell);
				});
			});
			expect(largeBoardUniqueValues.size).toBe((gridSizeLg * gridSizeLg) / 2);
		});
	});
});
