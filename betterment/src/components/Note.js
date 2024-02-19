import React from "react";
import { Text, View } from "react-native";

export default function Note({ date, content }) {
    return (
        <View>
            <Text>{date}</Text>
            <Text>{content}</Text>
        </View>
    );
}