import React from "react";
import { Dimensions, Image, StyleSheet, TouchableOpacity, View, Platform } from "react-native";
import Home from "../assets/images/icon.png";
import Log from "../assets/images/icon.png";
import AddPost from "../assets/images/icon.png";
import Journal from "../assets/images/icon.png";
import Profile from "../assets/images/icon.png";

import { useNavigation } from "@react-navigation/native";

export default function Footer() {

    const navigateToHome = () => {
        useNavigation().navigate('Home');
    };

    const navigateToLog = () => {
        useNavigation().navigate('Log');
    };

    const navigateToJournal = () => {
        useNavigation().navigate('Journal');
    };

    const navigateToProfile = () => {
        useNavigation().navigate('Profile');
    };
    return (
        <View style={styles.footer}>
            <TouchableOpacity onPress={navigateToHome}>
                <Image source={Home} style={{ width: 32, height: 32 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToLog}>
                <Image source={Log} style={{ width: 32, height: 32 }} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={AddPost} style={{ width: 32, height: 32 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToJournal}>
                <Image source={Journal} style={{ width: 32, height: 32 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToProfile}>
                <Image source={Profile} style={{ width: 32, height: 32 }} />
            </TouchableOpacity>
        </View>
    );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#d6bc9c',
        ...Platform.select({
            ios: {
                shadowColor: '#30200d',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 2,
            },
            android: {
                elevation: 2,
            },
        }),
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        paddingHorizontal: width * 0.05,
        paddingVertical: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
    }
});