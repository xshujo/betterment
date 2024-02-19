import React from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import Sort from "../assets/images/icon.png";
import Search from "../assets/images/icon.png";

export default function SearchNotes() {
    return (
        <View>
            <TouchableOpacity>
                <Image source={Sort} />
            </TouchableOpacity>
            <View>
                <TextInput />
                <TouchableOpacity>
                    <Image source={Search} />
                </TouchableOpacity>
            </View>
        </View>
    );
}