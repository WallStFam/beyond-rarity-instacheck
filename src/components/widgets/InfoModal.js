import React from "react";
import BeyondRarity from "../icons/BeyondRarity";
import styles from "../../styles.module.css";

const InfoModal = ({ theme, isOpen }) => {
	const modalClassName = `${styles.infoModal} ${styles[theme]} ${isOpen ? styles.open : ""}`;

	return (
		<div className={modalClassName}>
			<h3 className={styles.title}>
				Get your own Rarity Checker
				<br />
				for your project here:
			</h3>
			<a
				href="https://www.beyondrarity.com"
				target="_blank"
				rel="noopener"
				title="Beyond Rarity - https://www.beyondrarity.com"
				className={styles.brButton}
			>
				<BeyondRarity theme={theme} />
			</a>
		</div>
	);
};

export default InfoModal;
