import React from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import SearchNotes from "../components/SearchNotes";
import Note from "../components/Note";

export default function JournalScreen() {
    return (
        <View>
            <SearchNotes />
            <ScrollView style={styles.notes}>
                <Note date="19022024" content="Here are more thoughts" />
                <Note date="18022024" content="Here are my thoughts" />
                <Note date="18022024" content="Here are my thoughts" />
                <Note date="18022024" content="Here are my thoughts" />
                <Note date="18022024" content="Here are my thoughts" />
                <Note date="18022024" content="Here are my thoughts" />
                <Note date="18022024" content="Here are my thoughts" />
                <Note date="18022024" content="Here are my thoughts" />
            </ScrollView>
        </View>
    );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    notes: {
        marginBottom: 75,
    },
});