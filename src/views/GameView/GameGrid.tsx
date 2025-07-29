import { useEffect, useState } from "react";
import useGameStateStore from "../../store/gameStateStore";
import styles from "./GameGrid.module.css";
import GameGridButton from "./GameGridButton";

function GameGrid() {
	const { gameBoard } = useGameStateStore();
	const [playerGuesses, setPlayerGuesses] = useState<string[]>([]);

	useEffect(() => console.log(playerGuesses), [playerGuesses]);

	const handlePlayerGuess = (i: number, j: number) => {
		const coordinatesAsString = `${i}${j}`;

		if (playerGuesses.length >= 2) return;
		if (playerGuesses.length > 0 && playerGuesses[0] === coordinatesAsString)
			return;

		if (playerGuesses.length === 0)
			setPlayerGuesses((state) => state.concat(coordinatesAsString));
		else {
			setPlayerGuesses((state) => state.concat(coordinatesAsString));
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
