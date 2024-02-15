import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import ProfilePic from "../assets/images/pfp.png";

export default function Header() {
    return (
        <View style={styles.header}>
            <View style={styles.profilePicContainer}>
                <Image source={ProfilePic} style={styles.profilePic} />
            </View>
            <Text style={styles.title}>
                What's on your mind?
            </Text>
            <Text>
                Write a note <Text>&gt;</Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 75,
        paddingHorizontal: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    profilePicContainer: {
        overflow: 'hidden',
        marginBottom: 20,
        borderLeftWidth: 5,
        borderLeftColor: 'white',
        borderRadius: 175,
        flexGrow: 0,
    },
    profilePic: {
        width: 175,
        height: 175,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#30200d',
        marginBottom: 10,
        flex: 0,
    },
});