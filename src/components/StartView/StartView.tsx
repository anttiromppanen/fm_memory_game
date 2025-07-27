import { useState } from "react";
import type { IconThemeType } from "../../const/const";
import Card from "../Card";
import Container from "../Container";
import styles from "./StartView.module.css";
import StartViewFieldset from "./StartViewFieldset";
import StartViewRadio from "./StartViewRadio";

function StartView() {
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		console.log("Selected theme:", formData.get("value-theme"));
	};

	return (
		<Container bg="dark">
			<h1 className={styles.heading}>memory</h1>
			<Card>
				<form action="" className={styles.form} onSubmit={handleSubmit}>
					<StartViewFieldset heading="Select theme">
						<StartViewRadio
							name="value-theme"
							id="value-numbers"
							value="numbers"
							text="Numbers"
							defaultChecked
						/>
						<StartViewRadio
							name="value-theme"
							id="value-icons"
							value="icons"
							text="Icons"
						/>
					</StartViewFieldset>
					<button type="submit">Submit</button>
				</form>
			</Card>
		</Container>
	);
}

export default StartView;
