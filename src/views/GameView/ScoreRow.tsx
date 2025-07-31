import CountdownTimer from "../../components/CountdownTimer";
import useGameSettingsStore from "../../store/gameSettingsStore";
import usePairGuessStateStore from "../../store/pairGuessStateStore";
import ScoreCard from "./ScoreCard";
import styles from "./ScoreRow.module.css";

function SingleplayerRow({
	moves,
	numOfPlayers,
}: {
	moves: number;
	numOfPlayers: number;
}) {
	return (
		<>
			<ScoreCard heading="Time" numOfPlayers={numOfPlayers}>
				<CountdownTimer />
			</ScoreCard>
			<ScoreCard heading="Moves" value={moves} numOfPlayers={numOfPlayers} />
		</>
	);
}

function ScoreRow() {
	const { numOfPlayers } = useGameSettingsStore();
	const { numOfGuesses } = usePairGuessStateStore();

	const isSinglePlayer = numOfPlayers === 1;

	return (
		<section
			className={`${styles.scoreRow} ${isSinglePlayer && styles.singleplayer}`}
		>
			{numOfPlayers === 1 ? (
				<SingleplayerRow moves={numOfGuesses} numOfPlayers={numOfPlayers} />
			) : (
				<span>Multiplayer test</span>
			)}
		</section>
	);
}

export default ScoreRow;
