import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import ProfilePic from "../assets/images/pfp.png";

const styles = StyleSheet.create({
    header: {
        flex: 1,
        paddingHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 30,
    },
    profilePicContainer: {
        borderLeftWidth: 5,
        borderLeftColor: 'white',
        borderRadius: 75,
        overflow: 'hidden',
    },
    profilePic: {
        width: 125,
        height: 125,
    },
    title: {

    },
});

export default function Header() {
    return (
        <View style={styles.header}>
            <View style={styles.profilePicContainer}>
                <Image source={ProfilePic} style={styles.profilePic} />
            </View>
            <View>
                <Text style={styles.title}>
                    What's on your mind?
                </Text>
                <Text>
                    Write a note <Text>&gt;</Text>
                </Text>
            </View>
        </View>
    );
}