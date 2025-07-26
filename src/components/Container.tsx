import type React from "react";
import styles from "./Container.module.css";

function Container({
	children,
	bg = "light",
}: {
	children: React.ReactNode;
	bg?: "light" | "dark";
}) {
	return (
		<div
			className={`${styles.container} ${bg === "light" ? styles.light : styles.dark}`}
		>
			{children}
		</div>
	);
}

export default Container;
