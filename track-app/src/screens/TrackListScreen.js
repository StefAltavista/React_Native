import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

export default function TrackListScreen({ navigation }) {
    return (
        <>
            <Text>TrackListScreen</Text>
            <Button
                title="go to track Detail"
                onPress={() => navigation.navigate("TrackDetail")}
            ></Button>
        </>
    );
}

const styles = StyleSheet.create({});
