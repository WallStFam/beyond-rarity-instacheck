import React from "react";
// import "../styles.css";
import Instacheck from "../components/widgets/Instacheck";

export default {
	title: "Beyond Rarity/Widgets",
	component: Instacheck,
	parameters: {
		layout: "centered",
	},
};

const Template = (args) => <Instacheck {...args} />;

export const _Instacheck = Template.bind({});

_Instacheck.args = {
	collectionId: "wallstmoms",
	theme: "light",
	startTokenId: 1,
	endTokenId: 3000,
};

_Instacheck.argTypes = {
	theme: {
		options: ["light", "dark"],
		control: { type: "radio" },
	},
};
