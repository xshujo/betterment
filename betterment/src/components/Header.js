import React from "react";
import { Image, View, Text, StyleSheet, Dimensions } from "react-native";
import ProfilePic from "../assets/images/pfp.png";
import HomeToNote from "./HomeToNote";

export default function Header() {
    return (
        <View style={styles.header}>
            <View style={styles.profilePicContainer} >
                <Image source={ProfilePic} style={styles.profilePic} />
            </View>
            <View>
                <Text style={styles.noteText}>
                    What's on your mind ?
                </Text>
                <HomeToNote />
            </View>
        </View>
    );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    header: {
        width: width,
        marginBottom: 32,
        paddingHorizontal: width * 0.05,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    profilePicContainer: {
        width: width * 0.35 + 5,
        maxWidth: 200,
        height: width * 0.35,
        maxHeight: 200,
        marginRight: width * 0.05,
        overflow: 'hidden',
        borderLeftWidth: 5,
        borderLeftColor: 'white',
        borderRadius: 175,
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 0,
    },
    profilePic: {
        width: width * 0.35,
        height: width * 0.35,
    },
    noteText: {
        maxWidth: width * 0.5,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#30200d'
    }
});