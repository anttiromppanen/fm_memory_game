import useGameSettingsStore from "../store/gameSettingsStore";
import useGameStateStore from "../store/gameStateStore";
import styles from "./AppBar.module.css";

function AppBar() {
	const { updateGameState } = useGameStateStore();
	const { resetGameSettings } = useGameSettingsStore();

	const handleNewGameClick = () => {
		updateGameState("setup");
		resetGameSettings();
	};

	return (
		<header className={styles.appBar}>
			<h1>memory</h1>
			<nav>
				<button type="button" className={styles.restartButton}>
					Restart
				</button>
				<button
					type="button"
					onClick={handleNewGameClick}
					className={styles.newGameButton}
				>
					New Game
				</button>
			</nav>
		</header>
	);
}

export default AppBar;
