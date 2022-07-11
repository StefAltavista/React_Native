import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import BlogContext from "../context/BlogContext";

export default function IndexScreen() {
    const { data, addBlogPost } = useContext(BlogContext);

    return (
        <View>
            <Text>HEY</Text>
            <Button title="addPost" onPress={addBlogPost} />
            <FlatList
                data={data}
                keyExtractor={(x) => x.title}
                renderItem={({ item }) => {
                    return <Text>{item.title}</Text>;
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({});
