import useGameSettingsStore from "../store/gameSettingsStore";
import useGameStateStore from "../store/gameStateStore";
import usePairGuessStateStore from "../store/pairGuessStateStore";
import styles from "./AppBar.module.css";

function AppBar() {
  const { updateGameState, resetGameStateWithCurrentSettings } =
    useGameStateStore();
  const { resetGameSettings, gridSize, numOfPlayers } = useGameSettingsStore();
  const { resetPairGuessState } = usePairGuessStateStore();

  const handleNewGameClick = () => {
    updateGameState("setup");
    resetGameSettings();
    resetPairGuessState(gridSize);
  };

  // TODO: MOVE TIMER TO ZUSTAND STATE SO IT CAN BE RESET FROM HERE
  const handleRestartGameClick = () => {
    resetGameStateWithCurrentSettings(gridSize, numOfPlayers);
    resetPairGuessState(gridSize);
  };

  return (
    <header className={styles.appBar}>
      <h1>memory</h1>
      <nav>
        <button
          type="button"
          onClick={handleRestartGameClick}
          className={styles.restartButton}
        >
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
