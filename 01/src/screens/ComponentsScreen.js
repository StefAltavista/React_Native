import React from "react";
import { Text, Button, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
    const name = "Altavista";
    return (
        <View>
            <Text style={styles.textStyle}>
                Getting Started with this Shit!
            </Text>
            <Text>
                My Name is <Text style={styles.nameStyle}>{name}</Text>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: { fontSize: 50 },
    nameStyle: { fontWeight: "bold" },
});

export default ComponentsScreen;
