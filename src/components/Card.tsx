import type React from "react";
import styles from "./Card.module.css";

function Card({ children }: { children: React.ReactNode }) {
	return <article className={styles.card}>{children}</article>;
}

export default Card;
