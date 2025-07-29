import useGameStateStore from "./store/gameStateStore";
import GameView from "./views/GameView/GameView";
import SetupView from "./views/SetupView/SetupView";

function App() {
	const { gameState, gameBoard, gameScore } = useGameStateStore();

	const viewSelector = () => {
		switch (gameState) {
			case "setup":
				return <SetupView />;
			case "playing":
				return <GameView />;
			default:
				return <SetupView />;
		}
	};

	return <main>{viewSelector()}</main>;
}

export default App;
