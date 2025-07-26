import { useState } from "react";
import type { IconThemeType } from "../../const/types";
import Card from "../Card";
import Container from "../Container";
import styles from "./StartView.module.css";

function StartView() {
	const [iconTheme, setIconTheme] = useState<IconThemeType>("numbers");

	return (
		<Container bg="dark">
			<h1 className={styles.heading}>memory</h1>
			<Card>
				<form action="" className={styles.form}>
					<fieldset>
						<legend>Select Theme</legend>
						<div className={styles.themeButtonsContainer}>
							<label>
								<input
									type="radio"
									name="value-theme"
									id="value-numbers"
									value="numbers"
									checked={iconTheme === "numbers"}
									onChange={() => setIconTheme("numbers")}
								/>
								<span>Numbers</span>
							</label>
							<label>
								<input
									type="radio"
									name="value-theme"
									id="value-icons"
									value="icons"
									checked={iconTheme === "icons"}
									onChange={() => setIconTheme("icons")}
								/>
								<span>Icons</span>
							</label>
						</div>
					</fieldset>
				</form>
			</Card>
		</Container>
	);
}

export default StartView;
