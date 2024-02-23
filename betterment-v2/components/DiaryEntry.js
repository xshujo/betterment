import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dim } from "../constants/Dimensions";

export default function DiaryEntry({ date, content }) {
	return (
		<View style={styles.container}>
			<Text>{date}</Text>
			<View>{/* Emojies */}</View>
			<Text>{content}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: Dim.vpWidth,
	}
});