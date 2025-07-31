import type React from "react";
import styles from "./ScoreCard.module.css";

interface ScoreCardProps {
	heading: string;
	value?: string | number;
	numOfPlayers: number;
	children?: React.ReactNode;
}

function SinglePlayerCard() {}

function MultiplayerCard() {}

function ScoreCard({ heading, value, numOfPlayers, children }: ScoreCardProps) {
	const isSinglePlayer = numOfPlayers === 1;

	return (
		<article>
			<dl
				className={`${styles.scoreCard} ${isSinglePlayer ? styles.singleplayer : styles.multiplayer}`}
			>
				<dt>{heading}</dt>
				<dd>{children ? children : value}</dd>
			</dl>
		</article>
	);
}

export default ScoreCard;
