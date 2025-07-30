import Countdown from "react-countdown";

const renderer = ({
	minutes,
	seconds,
}: {
	minutes: number;
	seconds: number;
}) => {
	// Format seconds to always have two digits
	const formattedSeconds = seconds.toString().padStart(2, "0");

	return (
		<span>
			{minutes}:{formattedSeconds}
		</span>
	);
};

function CountdownTimer() {
	return <Countdown date={Date.now() + 10_000 * 6 * 2} renderer={renderer} />;
}

export default CountdownTimer;
