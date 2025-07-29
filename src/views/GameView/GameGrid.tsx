import { useEffect, useState } from "react";
import useGameStateStore from "../../store/gameStateStore";
import usePairGuessStateStore from "../../store/pairGuessStateStore";
import styles from "./GameGrid.module.css";
import GameGridButton from "./GameGridButton";

function GameGrid() {
	const { gameBoard } = useGameStateStore();
	const { addGuessedPair, getGuessStateByCell } = usePairGuessStateStore();
	const [playerGuesses, setPlayerGuesses] = useState<number[][]>([]); // [i, j, value]

	useEffect(() => {
		if (
			playerGuesses.length === 2 &&
			playerGuesses[0][2] === playerGuesses[1][2]
		) {
			addGuessedPair(
				playerGuesses[0][0],
				playerGuesses[0][1],
				playerGuesses[1][0],
				playerGuesses[1][1],
			);
		}
	}, [playerGuesses, addGuessedPair]);

	const handlePlayerGuess = (i: number, j: number, value: number) => {
		if (playerGuesses.length >= 2) return;
		if (
			playerGuesses.length > 0 &&
			playerGuesses[0][0] === i &&
			playerGuesses[0][1] === j
		)
			return;

		if (playerGuesses.length === 0)
			setPlayerGuesses((state) => [...state, [i, j, value]]);
		else {
			setPlayerGuesses((state) => [...state, [i, j, value]]);
			setTimeout(() => {
				setPlayerGuesses([]);
			}, 500);
		}
	};

	return (
		<div className={styles.gameGrid}>
			{gameBoard.map((row, i) =>
				row.map((cell, j) => (
					<GameGridButton
						key={crypto.randomUUID()}
						rowI={i}
						colJ={j}
						value={cell}
						playerGuesses={playerGuesses}
						handleOnClick={handlePlayerGuess}
					/>
				)),
			)}
		</div>
	);
}

export default GameGrid;
