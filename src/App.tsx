import useGameStateStore from "./store/gameStateStore";
import SetupView from "./views/SetupView/SetupView";

function App() {
	const { gameState } = useGameStateStore();
	console.log(gameState);
	return (
		<main>
			<SetupView />
		</main>
	);
}

export default App;
