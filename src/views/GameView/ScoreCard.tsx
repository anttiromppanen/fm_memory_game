import styles from "./ScoreCard.module.css";

interface ScoreCardProps {
	heading: string;
	value: string | number;
	numOfPlayers: number;
}

function SinglePlayerCard() {}

function MultiplayerCard() {}

function ScoreCard({ heading, value, numOfPlayers }: ScoreCardProps) {
	const isSinglePlayer = numOfPlayers === 1;
	return (
		<article>
			<dl
				className={`${styles.scoreCard} ${isSinglePlayer ? styles.singleplayer : styles.multiplayer}`}
			>
				<dt>{heading}</dt>
				<dd>{value}</dd>
			</dl>
		</article>
	);
}

export default ScoreCard;
