import { create } from "zustand";
import {
	GRID_SIZES,
	GRID_SIZES_SET,
	type GridSizeType,
	ICON_THEMES,
	ICON_THEMES_SET,
	type IconThemeType,
	MAX_PLAYERS,
} from "../const/const";
import {
	isValidGridSize,
	isValidIconTheme,
	isValidNumOfPlayers,
} from "../helpers/validation";

interface IGameStateStore {
	numOfPlayers: number;
	iconTheme: IconThemeType;
	gridSize: GridSizeType;

	setNumOfPlayers: (num: number) => void;
	setIconTheme: (theme: IconThemeType) => void;
	setGridSize: (size: GridSizeType) => void;
}

const useGameSettingsStore = create<IGameStateStore>((set) => ({
	numOfPlayers: 1,
	iconTheme: ICON_THEMES[0],
	gridSize: GRID_SIZES[0],

	setNumOfPlayers: (num: number) =>
		isValidNumOfPlayers(num, MAX_PLAYERS) && set({ numOfPlayers: num }),

	setIconTheme: (theme: IconThemeType) =>
		isValidIconTheme(theme, ICON_THEMES_SET) && set({ iconTheme: theme }),

	setGridSize: (size: GridSizeType) =>
		isValidGridSize(size, GRID_SIZES_SET) && set({ gridSize: size }),
}));

export default useGameSettingsStore;
