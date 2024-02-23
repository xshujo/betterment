// This component displays the name of the current screen //

import React from "react";
import { Text, View } from "react-native";

export default function Header({screen}) {
    return (
        <View>
            <Text>{screen}</Text>
        </View>
    );
}