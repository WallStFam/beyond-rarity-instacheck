import React from "react";
import InfoIcon from "../icons/InfoIcon";
import styles from "../../styles.module.css";

const InfoButton = ({ onClick, isOpen }) => {
	return (
		<div className={styles.infoBtn} onClick={onClick}>
			<div className={`${styles.infoIcon} ${isOpen ? styles.open : ""}`}>
				<InfoIcon width="16" height="16" />
			</div>
			<div
				className={`${styles.closeDash} ${styles.left} ${isOpen ? styles.open : ""}`}
			></div>
			<div
				className={`${styles.closeDash} ${styles.right} ${isOpen ? styles.open : ""}`}
			></div>
		</div>
	);
};

export default InfoButton;
