import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
export default function ResultDetail({ result }) {
    return (
        <View style={styles.container}>
            <Image source={{ uri: result.image_url }} style={styles.image} />
            <Text style={styles.name}>{result.name}</Text>
            <Text>
                {result.rating} Stars {result.review_count} Reviews
            </Text>
            <Text></Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { marginLeft: 15 },
    image: {
        width: 200,
        height: 120,
        borderRadius: 2,
        marginBottom: 5,
    },
    name: {
        fontWeight: "bold",
    },
});
