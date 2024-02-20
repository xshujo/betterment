import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

export default function Note({ date, content }) {
    return (
        <View style={styles.note}>
            <Text style={styles.date}>{date}</Text>
            <Text>{content}</Text>
        </View>
    );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    note: {
        width: width * 0.9,
        backgroundColor: 'white',
        marginBottom: 16,
        borderRadius: 16,
        padding: 16,
    },
    date: {
        fontWeight: 'bold',
        marginBottom: 8
    }
});