import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function ImageDetail(props) {
    return (
        <View>
            <Image style={styles.image} source={props.imageSource} />
            <Text>
                Title: {props.title}
                Score: {props.score}
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
    },
});
