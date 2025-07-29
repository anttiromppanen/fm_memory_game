import useGameStateStore from "./store/gameStateStore";
import SetupView from "./views/SetupView/SetupView";

function App() {
	const { gameState, gameBoard, gameScore } = useGameStateStore();
	console.log(gameState, gameScore);
	console.log(gameBoard);
	return (
		<main>
			<SetupView />
		</main>
	);
}

export default App;
