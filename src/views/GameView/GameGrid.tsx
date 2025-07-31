import { useEffect, useState } from "react";
import useGameSettingsStore from "../../store/gameSettingsStore";
import useGameStateStore from "../../store/gameStateStore";
import usePairGuessStateStore from "../../store/pairGuessStateStore";
import styles from "./GameGrid.module.css";
import GameGridButton from "./GameGridButton";

function GameGrid() {
	const { gameBoard } = useGameStateStore();
	const { addGuessedPair, getGuessStateByCell, incrementNumOfGuesses } =
		usePairGuessStateStore();
	const { gridSize, numOfPlayers } = useGameSettingsStore();

	// supposed to hold the 2 guesses by a player
	const [playerGuesses, setPlayerGuesses] = useState<number[][]>([]); // [i, j, value]

	useEffect(() => {
		if (
			playerGuesses.length === 2 &&
			playerGuesses[0][2] === playerGuesses[1][2] // check if first & second guess values are equal
		) {
			// Pair found successfully
			const [firstGuessI, firstGuessJ, _firstValue] = playerGuesses[0];
			const [secondGuessI, secondGuessJ, _secondValue] = playerGuesses[1];
			addGuessedPair(firstGuessI, firstGuessJ, secondGuessI, secondGuessJ);
		}
	}, [playerGuesses, addGuessedPair]);

	const handlePlayerGuess = (i: number, j: number, value: number) => {
		// Handle cases where same cell is clicked and guesses can't go beyond 2
		if (playerGuesses.length >= 2) return;
		if (
			playerGuesses.length > 0 &&
			playerGuesses[0][0] === i &&
			playerGuesses[0][1] === j
		)
			return;

		// Num of guesses counter only for singleplayer mode
		if (numOfPlayers === 1) {
			incrementNumOfGuesses(numOfPlayers);
		}

		if (playerGuesses.length === 0)
			setPlayerGuesses((state) => [...state, [i, j, value]]);
		else {
			setPlayerGuesses((state) => [...state, [i, j, value]]);
			setTimeout(() => {
				setPlayerGuesses([]);
			}, 400);
		}
	};

	return (
		<div
			className={`${styles.gameGrid} ${gridSize === 4 ? styles.gameGridFourCols : styles.gameGridSixCols}`}
		>
			{gameBoard.map((row, i) =>
				row.map((cell, j) => {
					const guessStateForCell = getGuessStateByCell(i, j) as number;
					const cellIsGuessed = playerGuesses.some(
						([guessI, guessJ, _]) => guessI === i && guessJ === j,
					);

					return (
						<GameGridButton
							key={crypto.randomUUID()}
							rowI={i}
							colJ={j}
							value={cell}
							cellIsGuessed={cellIsGuessed}
							guessStateForCell={guessStateForCell}
							gridSize={gridSize}
							handleOnClick={handlePlayerGuess}
						/>
					);
				}),
			)}
		</div>
	);
}

export default GameGrid;
