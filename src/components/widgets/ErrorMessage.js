import React from "react";
import styles from "../../styles.module.css";

const ErrorMessage = ({ message, visible }) => {
	const className = `${styles.errorMsg} ${visible ? styles.visible : ""}`;

	return <div className={className}>{message}</div>;
};

export default ErrorMessage;
