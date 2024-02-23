import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

export const Dim = {
    vpWidth: width,
    vpHeight: height,
    sidePadding: width * 0.05,
};