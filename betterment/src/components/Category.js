import React from "react";
import { Dimensions, StyleSheet, Text, View, Platform, TouchableOpacity } from "react-native";

export default function Category({ title, value, summary }) {
    return (
        <TouchableOpacity style={styles.section}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.value}>{value}</Text>
            <Text style={styles.summary}>{summary}</Text>
        </TouchableOpacity>
    );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    section: {
        width: width * 0.9,
        backgroundColor: 'white',
        ...Platform.select({
            ios: {
                shadowColor: '#30200d',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 1,
            },
            android: {
                elevation: 1,
            },
        }),
        borderRadius: 16,
        padding: 16,
    },
    title: {
        fontSize: 22,
        marginBottom: 12
    },
    value: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 6
    },
    summary: {
        fontSize: 16
    }
});