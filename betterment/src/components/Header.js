import React from "react";
import { Image, View, Text } from "react-native";
import ProfilePic from "../assets/images/pfp.png";
import HomeToNote from "./HomeToNote";

export default function Header() {
    return (
        <View>
            <View>
                <Image source={ProfilePic} />
            </View>
            <Text>
                What's on your mind ?
            </Text>
            <HomeToNote />
        </View>
    );
}