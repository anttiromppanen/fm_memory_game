import styles from "./GameGridButton.module.css";

interface GameGridButtonProps {
	rowI: number;
	colJ: number;
	value: number;
	cellIsGuessed: boolean;
	guessStateForCell: number;
	handleOnClick: (i: number, j: number, value: number) => void;
}

function DefaultButton({
	rowI,
	colJ,
	value,
	handleOnClick,
}: Omit<GameGridButtonProps, "guessStateForCell" | "cellIsGuessed">) {
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

function DisabledButton({ value }: Pick<GameGridButtonProps, "value">) {
	return (
		<button
			type="button"
			key={crypto.randomUUID()}
			className={styles.activeGuessButton}
			disabled
		>
			{value}
		</button>
	);
}

function GameGridButton({
	rowI,
	colJ,
	value,
	cellIsGuessed,
	guessStateForCell,
	handleOnClick,
}: GameGridButtonProps) {
	if (guessStateForCell === 1) return <DisabledButton value={value} />;
	if (cellIsGuessed) return <ActiveGuessButton value={value} />;

	return (
		<DefaultButton
			rowI={rowI}
			colJ={colJ}
			value={value}
			handleOnClick={handleOnClick}
		/>
	);
}

export default GameGridButton;
