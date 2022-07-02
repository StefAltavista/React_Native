import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

export default function TextScreen() {
    const [name, setName] = useState("");
    const [pass, setPass] = useState("");

    return (
        <View>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                // value={name}
                onChangeText={(newName) => setName(newName)}
            />
            <Text>My name is:{name}</Text>
            <Text>Enter Password:</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                // value={name}
                onChangeText={(newPass) => setPass(newPass)}
            />
            {pass.length < 5 ? (
                <Text>Password must contain at least 5 characters</Text>
            ) : null}
        </View>
    );
}
const styles = StyleSheet.create({
    input: {
        margin: 10,
        borderColor: "black",
        borderWidth: 1,
    },
});
