import useGameSettingsStore from "../../store/gameSettingsStore";
import ScoreCard from "./ScoreCard";
import styles from "./ScoreRow.module.css";

function SingleplayerRow({ numOfPlayers }: { numOfPlayers: number }) {
	return (
		<>
			<ScoreCard heading="Time" value={0} numOfPlayers={numOfPlayers} />
			<ScoreCard heading="Moves" value={0} numOfPlayers={numOfPlayers} />
		</>
	);
}

function ScoreRow() {
	const { numOfPlayers } = useGameSettingsStore();
	const isSinglePlayer = numOfPlayers === 1;
	return (
		<section
			className={`${styles.scoreRow} ${isSinglePlayer && styles.singleplayer}`}
		>
			{numOfPlayers === 1 ? (
				<SingleplayerRow numOfPlayers={numOfPlayers} />
			) : (
				<span>Multiplayer test</span>
			)}
		</section>
	);
}

export default ScoreRow;
