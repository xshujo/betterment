import React from "react";
import { Dimensions, Image, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import Sort from "../assets/images/icon.png";
import SearchIcon from "../assets/images/icon.png";

export default function Search() {
    return (
        <View style={styles.search}>
            <TouchableOpacity>
                <Image source={Sort} style={{ width: 24, height: 24, }} />
            </TouchableOpacity>
            <View style={styles.searchBar}>
                <TextInput placeholder="Search notes..." style={styles.textInput} />
                <TouchableOpacity style={styles.searchButton}>
                    <Image source={SearchIcon} style={{ width: 24, height: 24, }} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    search: {
        width: width,
        backgroundColor: '#f3e7d8',
        paddingTop: 48,
        paddingBottom: 16,
        paddingHorizontal: width * 0.05,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    searchBar: {
        width: width * 0.7,
        backgroundColor: '#d6bc9c',
        borderRadius: 24,
        paddingLeft: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textInput: {
        width: width * 0.7 - 16,
        padding: 8,
    },
    searchButton: {
        position: 'absolute',
        right: 16,
    }
});