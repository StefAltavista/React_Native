import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import { withOrientation } from "react-navigation";

const HomeScreen = (props) => {
    //console.log(props.navigation);
    return (
        <View>
            <Text
                style={styles.text}
                onPress={() => {
                    console.log("TEXT Pressed");
                }}
            >
                HELLO BELLO!
            </Text>
            <Button
                onPress={() => {
                    props.navigation.navigate("Components");
                }}
                style={styles.button}
                title="Go to Components Demo"
            />
            <Button
                title="Go to List Demo"
                onPress={() => {
                    props.navigation.navigate("List");
                }}
            />
            <Button
                title="Go to Images Demo"
                onPress={() => {
                    props.navigation.navigate("Images");
                }}
            />
            <Button
                title="Go to Counter Demo"
                onPress={() => {
                    props.navigation.navigate("Counter");
                }}
            />
            <Button
                title="Go to Color Demo"
                onPress={() => {
                    props.navigation.navigate("Color");
                }}
            />
            <Button
                title="Go to Square Demo"
                onPress={() => {
                    props.navigation.navigate("Square");
                }}
            />
            {/* <TouchableOpacity
                onPress={() => {
                    props.navigation.navigate("List");
                }}
            >
                <Text>LIST</Text>
            </TouchableOpacity> */}
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        color: "red",
        textAlign: "center",
    },
    button: {
        backgroundColor: "gray",
    },
});

export default HomeScreen;
