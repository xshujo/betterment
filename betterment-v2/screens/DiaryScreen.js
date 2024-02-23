// This component is a screen that displays the user's diary entries //

import React from "react";
import { View } from "react-native";
import Header from "../components/Header";
import Search from "../components/Search";
import DiaryEntry from "../components/DiaryEntry";

export default function DiaryScreen() {
    return (
        <View>
            <Header screen="Dairy" />
            <Search />
            <View>
                <DiaryEntry />
            </View>
        </View>
    );
}