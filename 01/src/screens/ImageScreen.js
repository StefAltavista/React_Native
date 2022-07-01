import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

export default function ImageScreen() {
    return (
        <View>
            <ImageDetail
                title="Forest"
                imageSource={require("../../assets/forest.jpg")}
                score={9}
            />
            <ImageDetail
                title="Ocean"
                imageSource={require("../../assets/ocean.jpeg")}
                score={12}
            />
            <ImageDetail
                title="Desert"
                imageSource={require("../../assets/desert.jpg")}
                score={7}
            />
        </View>
    );
}
const styles = StyleSheet.create({});
