import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function BoxScreen() {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}>CHILD ONE</Text>
            <Text style={styles.textTwoStyle}>CHILD TWO</Text>
            <Text style={styles.textThreeStyle}>CHILD THREE</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        height: 200,
        borderWidth: 10,
        borderColor: "black",
        alignItems: "center",
        flexDirection: "row",
        overflow: "scroll",
        justifyContent: "center",
    },
    textOneStyle: {
        textAlign: "center",
        borderWidth: 10,
        borderColor: "red",
        margin: 10,
        padding: 10,
        flex: 1,
        alignSelf: "flex-start",
    },
    textTwoStyle: {
        textAlign: "center",
        borderWidth: 10,
        borderColor: "red",
        margin: 10,
        padding: 10,
        alignSelf: "flex-end",
        position: "absolute",
        ...StyleSheet.absoluteFillObject, //top,bottom,left,right =0
        backgroundColor: "transparent",
    },
    textThreeStyle: {
        textAlign: "center",
        borderWidth: 10,
        borderColor: "red",
        margin: 10,
        padding: 10,
        flex: 1,
    },
});
