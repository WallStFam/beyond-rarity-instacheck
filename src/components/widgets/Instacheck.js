import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import SubmitButton from "../buttons/SubmitButton";
import InfoButton from "../buttons/InfoButton";
import GoBeyondRarity from "../icons/GoBeyondRarity";
import InfoModal from "./InfoModal";
import ErrorMessage from "./ErrorMessage";
import { isInteger } from "../../lib";
import styles from "../../styles.module.css";

const Instacheck = ({ collectionId, startTokenId, endTokenId, theme }) => {
	const input = useRef();
	const [isModalOpen, setIsModalOpen] = useState();
	const [isValid, setIsValid] = useState(true);
	const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

	useEffect(() => {
		if (input.current) validateInput(input.current.value);
	}, [startTokenId, endTokenId]);

	useEffect(() => {
		// prevents focus on mount
		if (isModalOpen === undefined) return;
		if (!isModalOpen) input.current?.focus();
	}, [isModalOpen]);

	const isValueOutOfRange = (value) => {
		const intValue = Number(parseInt(value));
		return intValue < startTokenId || intValue > endTokenId;
	};

	const validateInput = (value) => {
		const inputHasError = value !== "" && (!isInteger(value) || isValueOutOfRange(value));

		if (inputHasError) {
			if (isValid) setIsValid(false);
			if (isSubmitEnabled) setIsSubmitEnabled(false);
		} else {
			if (!isValid) setIsValid(true);
			if (value !== "") {
				setIsSubmitEnabled(true);
			} else {
				setIsSubmitEnabled(false);
			}
		}
	};

	const onInputChange = (e) => {
		const { value } = e.target;
		validateInput(value);
	};

	// clears the input on ESC key, submits on ENTER key
	const onInputKeyDown = (e) => {
		if (e.keyCode === 13) onSubmit(e.target.value);
		if (e.keyCode === 27) input.current.value = "";
	};

	// sumbit button handler
	const onSubmitClick = (e) => {
		const { value } = input.current;
		if (isInteger(value)) onSubmit(value);
	};

	const onSubmit = (tokenId) => {
		window.open(`https://beyondrarity.com/c/${collectionId}/${tokenId}`);
		input.value = "";
	};

	const toggleModalOpen = () => {
		setIsModalOpen(!isModalOpen);
	};
	const themeClass = theme === "dark" ? "dark" : "light";

	return (
		<div className={`${styles.container} ${styles[themeClass]}`}>
			<h3 className={styles.title}>Check Your NFT Rankings:</h3>
			<div className={styles.inputContainer}>
				<input
					ref={input}
					type="phone"
					placeholder="# Token"
					className={styles.input}
					onChange={onInputChange}
					onKeyDown={onInputKeyDown}
				/>
				<SubmitButton onClick={onSubmitClick} enabled={isSubmitEnabled} />
				<GoBeyondRarity theme={theme} />
			</div>
			<InfoButton onClick={toggleModalOpen} isOpen={isModalOpen} />
			<InfoModal theme={theme} isOpen={isModalOpen} />
			<ErrorMessage
				message={`Should be between ${startTokenId} - ${endTokenId}`}
				visible={!isValid}
			/>
		</div>
	);
};

Instacheck.propTypes = {
	collectionId: PropTypes.string.isRequired,
	startTokenId: PropTypes.number.isRequired,
	endTokenId: PropTypes.number.isRequired,
	theme: PropTypes.oneOf(["light", "dark"]),
};

Instacheck.defaultProps = {
	theme: "light",
};

export default Instacheck;
