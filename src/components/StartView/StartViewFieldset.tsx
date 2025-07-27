import styles from "./StartViewFieldset.module.css";

interface StartViewRadioProps {
	heading: string;
	children: React.ReactNode;
}

function StartViewFieldset({ heading, children }: StartViewRadioProps) {
	return (
		<fieldset>
			<legend>{heading}</legend>
			<div className={styles.container}>{children}</div>
		</fieldset>
	);
}

export default StartViewFieldset;
