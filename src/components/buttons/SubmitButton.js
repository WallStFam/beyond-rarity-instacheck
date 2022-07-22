import React from "react";
import ArrowRight from "../icons/ArrowRight";
import styles from "../../styles.module.css";

const SubmitButton = ({ enabled, onClick }) => {
	const btnClassName = `${styles.submitBtn} ${!enabled ? styles.disabled : ""}`;
	return (
		<button className={btnClassName} onClick={onClick}>
			<ArrowRight />
		</button>
	);
};

export default SubmitButton;
