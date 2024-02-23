import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

export const Dim = {
    vpWidth: width,
    vpHeight: height,
    sideSpace: width * 0.05,
    w90: width * 0.9,
    w35: width * 0.35,
};