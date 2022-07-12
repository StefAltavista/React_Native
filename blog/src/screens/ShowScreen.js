import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";

export default function ShowScreen({ navigation }) {
    const { state } = useContext(BlogContext);

    const blogPost = state.find((x) => x.id === navigation.getParam("id"));

    return (
        <View>
            <Text>{blogPost.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({});
