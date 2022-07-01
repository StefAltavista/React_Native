import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function ColorCounter(props) {
    return (
        <View>
            <Text>{props.color}</Text>
            <Button onPress={props.inc} title={`Increase ${props.color}`} />
            <Button onPress={props.dec} title={`Decrease ${props.color}`} />
        </View>
    );
}
const style = StyleSheet.create({});
