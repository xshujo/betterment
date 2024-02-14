import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import ProfilePic from "../assets/images/pfp.png";

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 15
    },
    profilePic: {
        width: 125,
        height: 125,
        borderRadius: 75,
    },
});

export default function Header() {
    return (
        <View style={styles.header}>
            <Image source={ProfilePic} style={styles.profilePic} />
            <View>
                <Text>
                    What's on your mind?
                </Text>
                <Text>
                    Write a note <Text>&gt;</Text>
                </Text>
            </View>
        </View>
    );
}