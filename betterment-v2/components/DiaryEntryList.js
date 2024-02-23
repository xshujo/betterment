import React from "react";
import { ScrollView, View } from "react-native";
import DiaryEntry from "./DiaryEntry";

export default function DiaryEntryList() {
	return (
		<ScrollView>
			<DiaryEntry date="Feb 22, 2024" content="Here are some thoughts" />
			<DiaryEntry date="Feb 21, 2024" content="Here are some thoughts" />
			<DiaryEntry date="Feb 20, 2024" content="Here are some thoughts" />
		</ScrollView>
	);
}