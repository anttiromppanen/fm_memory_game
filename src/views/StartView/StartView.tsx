import Card from "../../components/Card";
import Container from "../../components/Container";
import styles from "./StartView.module.css";
import StartViewFieldset from "./StartViewFieldset";
import StartViewRadio from "./StartViewRadio";

function StartView() {
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const theme = formData.get("theme") as string;
		const players = parseInt(formData.get("players") as string, 10);
		const gridSize = parseInt(formData.get("grid-size") as string, 10);
		console.log(
			`Starting game with theme: ${theme}, players: ${players}, grid size: ${gridSize}`,
		);
	};

	return (
		<Container bg="dark">
			<h1 className={styles.heading}>memory</h1>
			<Card>
				<form action="" className={styles.form} onSubmit={handleSubmit}>
					<StartViewFieldset heading="Select theme">
						<StartViewRadio
							name="theme"
							id="theme-numbers"
							value="numbers"
							text="Numbers"
							defaultChecked
						/>
						<StartViewRadio
							name="theme"
							id="theme-icons"
							value="icons"
							text="Icons"
						/>
					</StartViewFieldset>

					<StartViewFieldset heading="Number of Players">
						<StartViewRadio
							name="players"
							id="players-1"
							value={1}
							text="1"
							defaultChecked
						/>
						<StartViewRadio name="players" id="players-2" value={2} text="2" />
						<StartViewRadio name="players" id="players-3" value={3} text="3" />
						<StartViewRadio name="players" id="players-4" value={4} text="4" />
					</StartViewFieldset>

					<StartViewFieldset heading="Grid Size">
						<StartViewRadio
							name="grid-size"
							id="grid-size-4"
							value={4}
							text="4x4"
							defaultChecked
						/>
						<StartViewRadio
							name="grid-size"
							id="grid-size-6"
							value={6}
							text="6x6"
						/>
					</StartViewFieldset>

					<button type="submit">Start Game</button>
				</form>
			</Card>
		</Container>
	);
}

export default StartView;
