export const PLAYER_NAMES = [
	"player1",
	"player2",
	"player3",
	"player4",
] as const;
export const ICON_THEMES = ["numbers", "icons"] as const;
export const GRID_SIZES = [4, 6] as const;
export const GAME_STATES = ["setup", "playing", "finished"] as const;
export const MAX_PLAYERS = PLAYER_NAMES.length;

export type IconThemeType = (typeof ICON_THEMES)[number];
export type PlayersType = (typeof PLAYER_NAMES)[number];
export type GridSizeType = (typeof GRID_SIZES)[number];
export type GameStateType = (typeof GAME_STATES)[number];

/**
 * Set of all player names for O(1) lookup.
 * Used for validation and ensuring consistency across the application.
 */
export const PLAYERS_SET = new Set<PlayersType>(PLAYER_NAMES);
/**
 * Set of all icon themes for O(1) lookup.
 * Used for validation and ensuring consistency across the application.
 */
export const ICON_THEMES_SET = new Set<IconThemeType>(ICON_THEMES);
/**
 * Set of all grid sizes for O(1) lookup.
 * Used for validation and ensuring consistency across the application.
 */
export const GRID_SIZES_SET = new Set<GridSizeType>(GRID_SIZES);
/**
 * Set of all game states for O(1) lookup.
 * Used for validation and ensuring consistency across the application.
 */
export const GAME_STATES_SET = new Set<GameStateType>(GAME_STATES);
