/** All pairs are found when numPairsFound = half of total cells */
export const allPairsFound = (numPairsFound: number, gridSize: number) =>
	numPairsFound === (gridSize * gridSize) / 2;

/** Game is finished when timer runs out or all pairs are found
 * @param timerFinished only used on single player mode, otherwise set to false
 */
export const isGameFinished = (
	timerFinished: boolean,
	allPairsFound: boolean,
) => timerFinished || allPairsFound;
