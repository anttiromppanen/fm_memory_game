import type { GridSizeType } from "../../const/const";
import styles from "./GameGrid.module.css";

const createGameGrid = (gridSize: GridSizeType) => {
	const row = Array(gridSize).fill(0);
	const grid = Array(gridSize)
		.fill(row)
		.map(() => [...row]);
	return grid;
};

function GameGrid({ gridSize }: { gridSize: GridSizeType }) {
	const grid = createGameGrid(gridSize);

	return (
		<div className={styles.gameGrid}>
			{grid.map((row, i) =>
				row.map((cell, j) => (
					<span key={crypto.randomUUID()}>{`[${i} ${j}]`}</span>
				)),
			)}
		</div>
	);
}

export default GameGrid;
