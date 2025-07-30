import Container from "../../components/Container";
import GameGrid from "./GameGrid";
import ScoreRow from "./ScoreRow";

function GameView() {
	return (
		<Container>
			<h1>Game View</h1>
			<GameGrid />
			<ScoreRow />
		</Container>
	);
}

export default GameView;
