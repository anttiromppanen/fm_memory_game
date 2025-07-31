import AppBar from "../../components/AppBar";
import Container from "../../components/Container";
import GameGrid from "./GameGrid";
import ScoreRow from "./ScoreRow";

function GameView() {
	return (
		<Container>
			<AppBar />
			<GameGrid />
			<ScoreRow />
		</Container>
	);
}

export default GameView;
