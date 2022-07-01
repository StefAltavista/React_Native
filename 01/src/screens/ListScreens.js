import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

export default function ListScreen() {
    const friends = [
        { name: "friend1", age: 20 },
        { name: "friend2", age: 20 },
        { name: "friend3", age: 20 },
        { name: "friend4", age: 25 },
        { name: "friend5", age: 23 },
        { name: "friend6", age: 232 },
        { name: "friend7", age: 26 },
        { name: "friend8", age: 24 },
        { name: "friend9", age: 21 },
        { name: "friend10", age: 220 },
    ];
    return (
        <FlatList
            // horizontal={true}
            keyExtractor={(friend) => friend.name}
            data={friends}
            renderItem={({ item }) => {
                return (
                    <Text style={styles.listStyle}>
                        Name: {item.name} Age: {item.age}
                    </Text>
                );
            }}
        />
    );
}

const styles = StyleSheet.create({
    listStyle: {
        // marginHorizontal: 30,
        marginVertical: 20,
    },
});
