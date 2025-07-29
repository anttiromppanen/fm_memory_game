import { errorLogger } from "./logger";

/** numOfPlayers variable is compared to validation set of all possible players */
export const isValidNumOfPlayers = (
	numOfPlayers: number,
	playerListLength: number,
): boolean => {
	if (numOfPlayers < 1 || numOfPlayers > playerListLength) {
		errorLogger(
			`Invalid number of players: ${numOfPlayers}. Must be between 1 and ${playerListLength}.`,
		);
		return false;
	}
	return true;
};

export const isValidPlayer = (
	player: string,
	playerValidationSet: Set<string>,
) => {
	if (!playerValidationSet.has(player)) {
		errorLogger(
			`Invalid player: ${player}. Must be one of: ${Array.from(playerValidationSet).join(", ")}.`,
		);
		return false;
	}
	return true;
};

/** theme variable is compared to validation set of all possible themes */
export const isValidIconTheme = (
	theme: string,
	themeValidationSet: Set<string>,
) => {
	if (!themeValidationSet.has(theme)) {
		errorLogger(
			`Invalid icon theme: ${theme}. Must be one of: ${Array.from(themeValidationSet).join(", ")}.`,
		);
		return false;
	}
	return true;
};

/** gridSize variable is compared to validation set of all possible gridSizes */
export const isValidGridSize = (
	gridSize: number,
	gridSizeValidationSet: Set<number>,
) => {
	if (!gridSizeValidationSet.has(gridSize)) {
		errorLogger(
			`Invalid grid size: ${gridSize}. Must be one of: ${Array.from(gridSizeValidationSet).join(", ")}.`,
		);
		return false;
	}
	return true;
};

export const isValidGameState = (
	gameState: string,
	gameStateValidationSet: Set<string>,
): boolean => {
	if (!gameStateValidationSet.has(gameState)) {
		errorLogger(
			`Invalid game state: ${gameState}. Must be one of: ${Array.from(gameStateValidationSet).join(", ")}.`,
		);
		return false;
	}
	return true;
};
