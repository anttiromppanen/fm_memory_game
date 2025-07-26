import { beforeEach, describe, expect, it } from "vitest";
import { GRID_SIZES, ICON_THEMES, MAX_PLAYERS } from "../const/const";
import useGameSettingsStore from "./gameSettingsStore";

describe("Game Settings Store", () => {
	beforeEach(() => {
		// Reset the store before each test
		useGameSettingsStore.setState({
			numOfPlayers: 1,
			iconTheme: ICON_THEMES[0],
			gridSize: GRID_SIZES[0],
		});
	});

	it("should initialize with default values", () => {
		const { numOfPlayers, gridSize, iconTheme } =
			useGameSettingsStore.getState();

		const expectedValues = {
			numOfPlayers: 1,
			iconTheme: ICON_THEMES[0],
			gridSize: GRID_SIZES[0],
		};

		expect(expectedValues).toEqual({
			numOfPlayers,
			gridSize,
			iconTheme,
		});
	});

	it("should set number of players", () => {
		const newNumOfPlayers = 3;
		useGameSettingsStore.getState().setNumOfPlayers(newNumOfPlayers);
		expect(useGameSettingsStore.getState().numOfPlayers).toBe(newNumOfPlayers);
	});

	it("should fail when setting invalid number of players", () => {
		const invalidMinNumOfPlayers = 0; // Invalid because it is less than 1
		const invalidMaxNumOfPlayers = MAX_PLAYERS + 1; // Invalid because it exceeds MAX_PLAYERS

		useGameSettingsStore.getState().setNumOfPlayers(invalidMinNumOfPlayers);
		expect(useGameSettingsStore.getState().numOfPlayers).toBe(1); // Default value should remain unchanged

		useGameSettingsStore.getState().setNumOfPlayers(invalidMaxNumOfPlayers);
		expect(useGameSettingsStore.getState().numOfPlayers).toBe(1); // Default value should remain unchanged
	});
});
