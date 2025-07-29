import Card from "../../components/Card";
import Container from "../../components/Container";
import useGameStateStore from "../../store/gameStateStore";
import usePairGuessStateStore from "../../store/pairGuessStateStore";
import styles from "./SetupView.module.css";
import SetupViewFieldset from "./SetupViewFieldset";
import SetupViewRadio from "./SetupViewRadio";

function StartView() {
	const { updateGameState, initializeGameScore, initializeGameBoard } =
		useGameStateStore();
	const { initializePairGuessState } = usePairGuessStateStore();

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const theme = formData.get("theme") as string;
		const players = parseInt(formData.get("players") as string, 10);
		const gridSize = parseInt(formData.get("grid-size") as string, 10);

		// Update game state and initialize scores
		updateGameState("playing");
		initializeGameScore(players);
		initializeGameBoard(gridSize);
		initializePairGuessState(gridSize);
	};

	return (
		<Container bg="dark">
			<h1 className={styles.heading}>memory</h1>
			<Card>
				<form action="" className={styles.form} onSubmit={handleSubmit}>
					<SetupViewFieldset heading="Select theme">
						<SetupViewRadio
							name="theme"
							id="theme-numbers"
							value="numbers"
							text="Numbers"
							defaultChecked
						/>
						<SetupViewRadio
							name="theme"
							id="theme-icons"
							value="icons"
							text="Icons"
						/>
					</SetupViewFieldset>

					<SetupViewFieldset heading="Number of Players">
						<SetupViewRadio
							name="players"
							id="players-1"
							value={1}
							text="1"
							defaultChecked
						/>
						<SetupViewRadio name="players" id="players-2" value={2} text="2" />
						<SetupViewRadio name="players" id="players-3" value={3} text="3" />
						<SetupViewRadio name="players" id="players-4" value={4} text="4" />
					</SetupViewFieldset>

					<SetupViewFieldset heading="Grid Size">
						<SetupViewRadio
							name="grid-size"
							id="grid-size-4"
							value={4}
							text="4x4"
							defaultChecked
						/>
						<SetupViewRadio
							name="grid-size"
							id="grid-size-6"
							value={6}
							text="6x6"
						/>
					</SetupViewFieldset>

					<button type="submit">Start Game</button>
				</form>
			</Card>
		</Container>
	);
}

export default StartView;
