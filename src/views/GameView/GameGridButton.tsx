import styles from "./GameGridButton.module.css";

interface GameGridButtonProps {
	rowI: number;
	colJ: number;
	value: number;
	cellIsGuessed: boolean;
	guessStateForCell: number;
	gridSize: number;
	handleOnClick: (i: number, j: number, value: number) => void;
}

interface ButtonProps {
	rowI: number;
	colJ: number;
	value: number;
	smallButton: boolean;
	handleOnClick: (i: number, j: number, value: number) => void;
}

function DefaultButton({
	rowI,
	colJ,
	value,
	smallButton,
	handleOnClick,
}: ButtonProps) {
	return (
		<button
			type="button"
			key={crypto.randomUUID()}
			onClick={() => handleOnClick(rowI, colJ, value)}
			className={`${styles.gameGridButton} ${smallButton && styles.smallButton}`}
		/>
	);
}

function ActiveGuessButton({
	value,
	smallButton,
}: Pick<ButtonProps, "value" | "smallButton">) {
	return (
		<button
			type="button"
			key={crypto.randomUUID()}
			className={`${styles.gameGridButton} ${styles.activeGuessButton} ${smallButton && styles.smallButton}`}
		>
			{value}
		</button>
	);
}

function DisabledButton({
	value,
	smallButton,
}: Pick<ButtonProps, "value" | "smallButton">) {
	return (
		<button
			type="button"
			key={crypto.randomUUID()}
			className={`${styles.gameGridButton} ${styles.activeGuessButton} ${smallButton && styles.smallButton}`}
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
	gridSize,
	handleOnClick,
}: GameGridButtonProps) {
	const isSmallButton = gridSize === 6;

	if (guessStateForCell === 1)
		return <DisabledButton value={value} smallButton={isSmallButton} />;
	if (cellIsGuessed)
		return <ActiveGuessButton value={value} smallButton={isSmallButton} />;

	return (
		<DefaultButton
			rowI={rowI}
			colJ={colJ}
			value={value}
			smallButton={isSmallButton}
			handleOnClick={handleOnClick}
		/>
	);
}

export default GameGridButton;
