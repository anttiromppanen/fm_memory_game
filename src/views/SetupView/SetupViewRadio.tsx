interface StartViewRadioProps {
	name: string;
	id: string;
	value: string | number;
	text: string;
	defaultChecked?: boolean;
}

function StartViewRadio({
	name,
	id,
	value,
	text,
	defaultChecked = false,
}: StartViewRadioProps) {
	return (
		<label htmlFor={id}>
			<input
				type="radio"
				name={name}
				id={id}
				value={value}
				defaultChecked={defaultChecked}
			/>
			<span>{text}</span>
		</label>
	);
}

export default StartViewRadio;
