import React from "react";
import { Text, TouchableOpacity } from "react-native";

export default function HomeToNote() {
    return (
        <TouchableOpacity>
            <Text>
                Write a note <Text>&gt;</Text>
            </Text>
        </TouchableOpacity>
    );
}