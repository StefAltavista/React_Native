import React, { useState } from "react";
import { View, StyleSheet, Button, FlatList } from "react-native";

export default function ColorScreen() {
    const [colors, setColor] = useState([]);

    return (
        <View>
            <Button
                title="Add a Color"
                onPress={() => {
                    setColor([...colors, randomRgb()]);
                }}
            />

            <FlatList
                keyExtractor={(item) => item}
                data={colors}
                renderItem={({ item }) => {
                    return (
                        <View
                            style={{
                                height: 100,
                                width: 100,
                                backgroundColor: item,
                            }}
                        />
                    );
                }}
            />
        </View>
    );
}
const randomRgb = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
};
const style = StyleSheet.create({});
