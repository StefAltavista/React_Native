import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

export default function SearchBar({ term, onTermChange, onTermSubmit }) {
    return (
        <View style={styles.background}>
            <EvilIcons name="search" style={styles.iconStyle} />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
                placeholder="Search"
                value={term}
                onChangeText={(newTerm) => onTermChange(newTerm)}
                onEndEditing={onTermSubmit}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "lightgray",
        height: 50,
        margin: 15,
        borderRadius: 10,
        flexDirection: "row",
    },
    iconStyle: {
        fontSize: 40,
        alignSelf: "center",
        marginHorizontal: 10,
    },

    input: {
        flex: 1,
        fontSize: 20,
    },
});
