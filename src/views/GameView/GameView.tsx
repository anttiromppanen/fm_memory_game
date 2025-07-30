import Container from "../../components/Container";
import CountdownTimer from "../../components/CountdownTimer";
import usePairGuessStateStore from "../../store/pairGuessStateStore";
import GameGrid from "./GameGrid";

function GameView() {
	const { guessedPairsTotal } = usePairGuessStateStore();

	return (
		<Container>
			<h1>Game View</h1>
			<GameGrid />
			<CountdownTimer />
			<div>
				<span>{guessedPairsTotal}</span>
			</div>
		</Container>
	);
}

export default GameView;
