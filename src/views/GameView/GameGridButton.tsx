import styles from "./GameGridButton.module.css";

interface GameGridButtonProps {
	rowI: number;
	colJ: number;
	value: number;
	playerGuesses: string[];
	handleOnClick: (i: number, j: number) => void;
}

function DefaultButton({ rowI, colJ, handleOnClick }: GameGridButtonProps) {
	return (
		<button
			type="button"
			key={crypto.randomUUID()}
			onClick={() => handleOnClick(rowI, colJ)}
		/>
	);
}

function ActiveGuessButton({ value }: Pick<GameGridButtonProps, "value">) {
	return (
		<button
			type="button"
			key={crypto.randomUUID()}
			className={styles.activeGuessButton}
		>
			{value}
		</button>
	);
}

function GameGridButton({
	rowI,
	colJ,
	value,
	playerGuesses,
	handleOnClick,
}: GameGridButtonProps) {
	const coordinatesAsString = `${rowI}${colJ}`;

	if (playerGuesses.includes(coordinatesAsString))
		return <ActiveGuessButton value={value} />;

	return (
		<DefaultButton
			rowI={rowI}
			colJ={colJ}
			value={value}
			playerGuesses={playerGuesses}
			handleOnClick={handleOnClick}
		/>
	);
}

export default GameGridButton;
