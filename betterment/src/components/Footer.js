import React from "react";
import { Dimensions, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import Home from "../assets/images/icon.png";
import Log from "../assets/images/icon.png";
import AddPost from "../assets/images/icon.png";
import Journal from "../assets/images/icon.png";
import Profile from "../assets/images/icon.png";

export default function Footer() {
    return (
        <View style={styles.footer}>
            <TouchableOpacity>
                <Image source={Home} style={{ width: 32, height: 32 }} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={Log} style={{ width: 32, height: 32 }} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={AddPost} style={{ width: 32, height: 32 }} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={Journal} style={{ width: 32, height: 32 }} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={Profile} style={{ width: 32, height: 32 }} />
            </TouchableOpacity>
        </View>
    );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#d6bc9c',
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