// This component is the home screen. It displays the user's stats of the day or any chosen day //

import React from "react";
import { View } from "react-native";
import Header from "../components/Header";

export default function HomeScreen() {
	return (
		<View>
			<Header screen="Home" />
		</View>
	);
}