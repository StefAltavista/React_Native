import React, { useState, useEffect } from "react";

import { View, Text, StyleSheet, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import yelp from "../api/yelp";

export default function ResultScreen({ navigation }) {
    const [result, setResult] = useState(null);
    const id = navigation.getParam("id");
    console.log(result);
    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);

        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <>
            <Text>{result.name}</Text>
            <Text>
                {result.location.address1} {result.location.city}{" "}
                {result.location.country}
            </Text>

            <Text>
                {result.hours[0].is_open_now ? "NOW OPEN" : "NOW ClOSED"}
            </Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return (
                        <Image source={{ uri: item }} style={styles.image} />
                    );
                }}
            />
        </>
    );
}

const styles = StyleSheet.create({
    image: {
        height: 250,
        width: 300,
        margin: 20,
    },
});
