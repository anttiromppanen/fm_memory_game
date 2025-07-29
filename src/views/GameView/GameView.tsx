import Container from "../../components/Container";
import GameGrid from "./GameGrid";

function GameView() {
	return (
		<Container>
			<h1>Game View</h1>
			<GameGrid gridSize={4} />
		</Container>
	);
}

export default GameView;
