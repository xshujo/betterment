// This component is a screen that displays the user's informations and allows them to set their goals //

import React from "react";
import { View } from "react-native";
import Header from "../components/Header";

export default function ProfileScreen() {
    return (
        <View>
            <Header screen="Profile" />
        </View>
    );
}