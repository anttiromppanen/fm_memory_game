import Countdown from "react-countdown";
import usePairGuessStateStore from "../store/pairGuessStateStore";
import styles from "./CountdownTimer.module.css";

const renderer = ({
	minutes,
	seconds,
}: {
	minutes: number;
	seconds: number;
}) => {
	// Format seconds to always have two digits
	const formattedSeconds = seconds.toString().padStart(2, "0");
	const isLastTenSeconds = minutes === 0 && seconds <= 10;

	return (
		<span className={isLastTenSeconds ? styles.lastTenSeconds : ""}>
			{minutes}:{formattedSeconds}
		</span>
	);
};

function CountdownTimer() {
	const { setTimeHasRanOut, timeHasRanOut } = usePairGuessStateStore();

	if (timeHasRanOut) return <span className={styles.lastTenSeconds}>0:00</span>;

	return (
		<Countdown
			date={Date.now() + 10_000 * 6 * 2}
			renderer={renderer}
			onComplete={() => setTimeHasRanOut(true)}
		/>
	);
}

export default CountdownTimer;
