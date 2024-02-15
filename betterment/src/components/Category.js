import React from "react";
import { Text, View } from "react-native";

export default function Category({ title, value, summary }) {
    return (
        <View>
            <Text>{title}</Text>
            <Text>{value}</Text>
            <Text>{summary}</Text>
        </View>
    );
}