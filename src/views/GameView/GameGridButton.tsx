import styles from "./GameGridButton.module.css";

interface GameGridButtonProps {
	rowI: number;
	colJ: number;
	value: number;
	playerGuesses: number[][];
	handleOnClick: (i: number, j: number, value: number) => void;
}

function DefaultButton({
	rowI,
	colJ,
	value,
	handleOnClick,
}: GameGridButtonProps) {
	return (
		<button
			type="button"
			key={crypto.randomUUID()}
			onClick={() => handleOnClick(rowI, colJ, value)}
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
	const guessIsIncluded = playerGuesses.find(
		([i, j, _]) => rowI === i && colJ === j,
	);

	if (guessIsIncluded) return <ActiveGuessButton value={value} />;

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
