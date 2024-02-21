import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

export default function LogScreen() {
    return (
        <View style={styles.logScreen}>
            <Text>Log screen</Text>
        </View>
    );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    logScreen: {
        width: width,
        height: height,
        backgroundColor: '#f3e7d8',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
