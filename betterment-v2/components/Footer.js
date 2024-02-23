import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import HomeIcon from "../assets/images/icon.png";
import LogIcon from "../assets/images/icon.png";
import AddIcon from "../assets/images/icon.png";
import DiaryIcon from "../assets/images/icon.png";
import ProfileIcon from "../assets/images/icon.png";

export default function Footer() {
	return (
		<View>
			<TouchableOpacity>
				<Image source={HomeIcon} />
			</TouchableOpacity>
			<TouchableOpacity>
				<Image source={LogIcon} />
			</TouchableOpacity>
			<TouchableOpacity>
				<Image source={AddIcon} />
			</TouchableOpacity>
			<TouchableOpacity>
				<Image source={DiaryIcon} />
			</TouchableOpacity>
			<TouchableOpacity>
				<Image source={ProfileIcon} />
			</TouchableOpacity>
		</View>
	);
}