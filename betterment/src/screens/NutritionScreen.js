import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

export default function NutritionScreen() {
    return (
        <View style={styles.nutritionScreen}>
            <Text>Nutrition screen</Text>
        </View>
    );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    nutritionScreen: {
        width: width,
        height: height,
        backgroundColor: '#f3e7d8',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
