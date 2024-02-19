import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Header from "../components/Header";
import Category from "../components/Category";

export default function HomeScreen() {
    return (
        <View>
            <Header />
            <View style={styles.categories}>
                <Category title="Activity" value="5465 steps" summary="4535 steps to go" />
                <Category title="Nutrition" value="680 calories" summary="770 calories remaining" />
                <Category title="Sleep" value="8h45m" summary="22h05 - 6h50" />
                <Category title="Measurements" value="155 lbs" summary="8 lbs to be lost" />
            </View>
        </View>
    );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    categories: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 12
    }
});