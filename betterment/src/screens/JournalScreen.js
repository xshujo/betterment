import React from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import Search from "../components/Search";
import Note from "../components/Note";

export default function JournalScreen() {
    return (
        <View style={styles.journalScreen}>
            <Search />
            <ScrollView style={styles.notes}>
                <Note date="19022024" content="Here are more thoughts" />
                <Note date="18022024" content="Here are my thoughts" />
                <Note date="18022024" content="Here are my thoughts" />
                <Note date="18022024" content="Here are my thoughts" />
                <Note date="18022024" content="Here are my thoughts" />
                <Note date="18022024" content="Here are my thoughts" />
                <Note date="18022024" content="Here are my thoughts" />
                <Note date="17022024" content="Here are some thoughts" />
            </ScrollView>
        </View>
    );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    journalScreen: {
        width: width,
        height: height,
        backgroundColor: '#f3e7d8',
        alignItems: 'center'
    },
    notes: {
        marginBottom: 50,
    },
});