import React from "react";
import { View } from "react-native";
import SearchNotes from "../components/SearchNotes";
import Note from "../components/Note";

export default function JournalScreen() {
    return (
        <View>
            <SearchNotes />
            <Note date="19022024" content="Here are more thoughts" />
            <Note date="18022024" content="Here are my thoughts" />
        </View>
    );
}