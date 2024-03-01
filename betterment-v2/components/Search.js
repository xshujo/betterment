// This component is a search bar for the Log and Diary screens //

import React from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import SearchIcon from "../assets/images/icon.png";
import SortIcon from "../assets/images/icon.png";

export default function Search() {
    return (
        <View>
            <TouchableOpacity>
                <Image source={SearchIcon} />
            </TouchableOpacity>
            <TextInput />
            <TouchableOpacity>
                <Image source={SortIcon} />
            </TouchableOpacity>
        </View>
    );
}